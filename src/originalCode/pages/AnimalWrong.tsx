import {ThumbnailWrong} from "../thumbnail/ThumbnailWrong";
import {Header} from "../header/Header";
import {Navigation} from "../nav/Navigation";
import React from "react";
import {cat} from "../data/Data";

export interface Dog {
    title: string
    dogBreed: string
    coverUrl: string
}

export interface Cat {
    title: string
    catBreed: string
    previewUrl: string
}

interface Props {
    animals: Array<Dog | Cat>
}

const AnimalList = ({ animals }: Props) => {
    return (
        <ul>
            {animals.map(animal => {
                if ('coverUrl' in animal) {
                    return <ThumbnailWrong dog={animal} />
                }
            })}
        </ul>
    )
}

export const Animal = () => (
    <>
        <Header/>
        <Navigation/>
        <AnimalList animals={cat}/>
    </>
)


