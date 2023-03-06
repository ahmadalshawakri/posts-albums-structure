import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPosts, getComments } from "./services";
import { UserContext } from "../../context/user.context";

import classes from "./PostComments.module.css";
import Headers from "../../components/HeadersUI/Headers";
import UserInfo from "../../components/UserInfo/UserInfo";
import Card from "../../components/CardUI/Card";
import CommentContent from "./components/CommentContent/CommentContent";
import AddComment from "./components/AddComment/AddComment";

const PostComments = (props) => {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();
  const postId = new URLSearchParams(location.search).get("postId");

  const [state, setState] = useState({
    postBody: "",
    postComments: [],
    loggedUser: [],
    isLoaded: false,
  });

  useEffect(() => {
    const loadComments = async () => {
      const posts = await getPosts();
      const mainPost = await posts.find((post) => post?.id === +postId);
      const comments = await getComments();
      const postComments = comments.filter(
        (comment) => comment?.postId === +postId
      );

      if (postComments.length !== 0) {
        setState({
          postBody: mainPost.body,
          postComments: postComments,
          loggedUser: currentUser,
          isLoaded: true,
        });
      }
    };
    loadComments();
  }, [currentUser, postId]);

  return (
    <Card className={classes.card}>
      <div>
        <Headers head="Comments" />
      </div>
      <div>
        <UserInfo
          name={state.loggedUser.name}
          userName={state.loggedUser.username}
        />
      </div>
      <div className={classes.mainPost}>
        <p>{state.postBody}</p>
      </div>
      <div>
        <AddComment />
      </div>

      {state.isLoaded &&
        state.postComments.map((comment) => (
          <React.Fragment key={comment.id}>
            <CommentContent commentData={comment} />
          </React.Fragment>
        ))}
    </Card>
  );
};

export default PostComments;
