import React, { useEffect } from "react";
import styles from "./FeedModal.module.css";
import useFetch from "../../Hooks/useFetch";
import { PHOTO_GET } from "../../api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(ev) {
    if (ev.target === ev.currentTarget) setModalPhoto(null)
    console.log('Target:', ev.target)
    console.log('Current:', ev.currentTarget)
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading loading={loading} />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
