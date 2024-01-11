import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET_2 } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import PhotoContent from "./PhotoContent";
import useFetch from "../../Hooks/useFetch";


const Photo = () => {
  const { id } = useParams();
  const {data, loading, error, request } = useFetch()

  useEffect(() => {
    const {url, options} = PHOTO_GET_2(id)
    request(url, options)
  }, [request, id])

  if (error) return <Error/>
  if (loading) return <Loading/>
  if (data) return <section className="container mainContainer">
    <PhotoContent single={true} data={data} />
  </section>;
  else return null
};

export default Photo;
