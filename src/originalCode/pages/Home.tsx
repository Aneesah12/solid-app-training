import React from "react";
import {Header} from "../header/Header";
import {Navigation} from "../nav/Navigation";
import {Thumbnail} from "../thumbnail/Thumbnail";

const Home = () => (
    <>
        <Header/>
        <Navigation/>
        <Thumbnail imageUrl={"https://www.peta.org.uk/wp-content/uploads/2022/02/cute-cat-keep-cats-indoors-peta-1536x935.jpg"}/>
    </>
)

export default Home;
