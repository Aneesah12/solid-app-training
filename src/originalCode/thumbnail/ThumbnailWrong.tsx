interface Dog {
    coverUrl: string
    title: string
}

interface Props {
    dog: Dog
}
export const ThumbnailWrong = ({ dog }: Props) => {
    return <img key={dog.title} src={dog.coverUrl} />
}