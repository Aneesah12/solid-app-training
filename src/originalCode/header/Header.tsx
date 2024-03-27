import React from "react";
import "../../Styles.css"
import {useLocation} from "react-router-dom";


export const Header = () => {
    const location = useLocation();

    return (
        <header>
                {location.pathname === '/' && <h2>HOME</h2>}
                {location.pathname === '/blogs' && <h2>BLOGS</h2>}
                {location.pathname === '/contact' && <h2>CONTACT</h2>}
                {location.pathname === '/animal' && <h2>ANIMALS</h2>}
        </header>
    )
}








// const homeHeader = <>
//     <h2>
//         HOME
//     </h2>
// </>;
//
// const blogsHeader = <h2>
//         BLOGS
//     </h2>
//
// const contactHeader = <h2>
//     CONTACT
// </h2>;
//
// const headerMap = new Map(
//     [
//         ['/', homeHeader],
//         ['/blogs', blogsHeader],
//         ['/contact', navigationMap]
//     ]
// )

// export const Header = () => {
//
//     const location = useLocation();
//
//     return (
//         <nav>
//             {
//                 headerMap.get(location.pathname)
//             }
//
//         </nav>
//     )
// }

