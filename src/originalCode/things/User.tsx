
interface User {
    name: string;
}

export const DisplayUser = ({name}: User) => {
    return (
        <div>
            <h1>Hello, {name}! </h1>
        </div>
    )
};