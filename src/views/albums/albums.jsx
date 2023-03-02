import React, { useEffect, useState, useContext } from "react";
import { getAlbums } from "./services";
import { UserContext } from "../../context";

import Card from "../../components/CardUI/Card";
import Headers from "../../components/HeadersUI/Headers";
import classes from "./albums.module.css";
import AlbumData from "./components/AlbumsData";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const { currentUser } = useContext(UserContext);
  useEffect(() => {
    const fetchAlbums = async () => {
      const albums = await getAlbums();

      const userAlbums = await albums?.filter(
        (album) => album.userId === currentUser.id
      );
      setAlbums(userAlbums);
    };
    fetchAlbums();
  }, [currentUser?.id]);
  return (
    <Card className={classes.card}>
      <Headers head="Albums" />
      {albums.map((album) => (
        <AlbumData key={album.id} albumInfo={album} />
      ))}
    </Card>
  );
};

export default Albums;
