import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPhotos } from "./services";

import Card from "../../components/CardUI/Card";
import PhotoData from "./components/PhotosData";
import classes from "./Photos.module.css";
import Headers from "../../components/HeadersUI/Headers";

const Photos = () => {
  const [albumPhotos, setAlbumsPhotos] = useState([]);
  const location = useLocation();
  const albumId = new URLSearchParams(location.search).get("albumId");
  useEffect(() => {
    const fetchPhotos = async () => {
      const allPhotos = await getPhotos();
      const userAlbumPhotos = allPhotos.filter(
        (photo) => photo.albumId === +albumId
      );
      setAlbumsPhotos(userAlbumPhotos);
    };
    fetchPhotos();
  }, [albumId]);
  return (
    <div className={classes.container}>
      <Headers head="Photos" />
      <Card className={classes.card}>
        {albumPhotos.map((photo) => (
          <PhotoData key={photo.id} photo={photo} />
        ))}
      </Card>
    </div>
  );
};

export default Photos;
