import React, { useEffect, useState, useContext } from "react";
import { getPosts } from "./services";
import { UserContext } from "../../context/user.context";
import searchIcon from "../../img/icons8-search-48.png";

import classes from "./Posts.module.css";
import Headers from "../../components/HeadersUI/Headers";
import UserInfo from "../../components/UserInfo/UserInfo";
import PostContent from "./components/PostContent/PostContent";
import AddComment from "./components/AddComment/AddComment";
import AddPost from "./components/AddPost/AddPost";
import Card from "../../components/CardUI/Card";

const Posts = (props) => {
  const { currentUser } = useContext(UserContext);
  const [searchedInput, setSearchedInput] = useState("");
  const [state, setState] = useState({
    allPosts: [],
    loadedPosts: [],
    isLoaded: false,
    startIndex: 0,
  });

  useEffect(() => {
    const loadPosts = async () => {
      const posts = await getPosts();
      const userPosts = posts.filter((post) => post.userId === currentUser?.id);
      setState({
        allPosts: userPosts,
        loadedPosts: posts.slice(0, 5),
        isLoaded: true,
        startIndex: 5,
      });
    };
    loadPosts();
  }, [currentUser]);

  const addPostHandler = (addedNewPost) => {
    setState((prevState) => ({
      ...state,
      allPosts: [addedNewPost, ...prevState.allPosts],
      loadedPosts: [addedNewPost, ...prevState.loadedPosts],
    }));
  };

  const loadMorePosts = () => {
    setState((prevState) => ({
      ...state,
      loadedPosts: [
        ...prevState.loadedPosts,
        ...prevState.allPosts.slice(
          prevState.startIndex,
          prevState.startIndex + 5
        ),
      ],
      startIndex: prevState.startIndex + 5,
    }));
    return;
  };

  const searchPostHandler = (event) => {
    setSearchedInput(event.target.value);
  };

  const filteredPosts = state.loadedPosts.filter((post) =>
    post.body.toLowerCase().includes(searchedInput.toLocaleLowerCase())
  );

  return (
    <>
      <Card className={classes.card}>
        <Headers head="Discover" />
        <div className={classes.searchBar}>
          <div className={classes.searchIcon}>
            <img src={searchIcon} alt="" />
          </div>
          <div className={classes.searchInput}>
            <input
              type="text"
              placeholder="Search for posts..."
              value={searchedInput}
              onChange={searchPostHandler}
            />
          </div>
        </div>
        {state.isLoaded &&
          filteredPosts.map((post) => (
            <React.Fragment key={post.id}>
              <UserInfo />
              <PostContent content={post} />
              <AddComment />
            </React.Fragment>
          ))}
        <div className={classes.loadButton}>
          <button type="button" onClick={loadMorePosts}>
            More Posts
          </button>
        </div>
      </Card>

      <footer className={classes.footer}>
        <AddPost onAddPost={addPostHandler} />
      </footer>
    </>
  );
};

export default Posts;
