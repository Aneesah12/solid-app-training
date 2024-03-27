interface Props {
    imageUrl: string
}

export const Thumbnail = ({ imageUrl }: Props) => {
    return <img src={imageUrl} alt={"coverImage"}/>
}