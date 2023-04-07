import { NavLink } from "react-router-dom"
import "./CategoryList.css"

export default function CategoryList () {
    const categories = [
        {id: 1, name: 'Phone Cases', slug: 'phone-cases'},
        {id: 2, name: 'Chargers and Cables', slug: 'chargers-and-cables'},
        {id: 3, name: 'Portable Power Banks', slug: 'portable-power-banks'},
        {id: 4, name: 'Audio and Video Accessories', slug: 'audio-and-video-accessories'},
    ]

    const output = categories.map((category) => (
        <li key={category.id}>
            <NavLink to={"/categories/" + category.slug}>
              {category.name}
            </NavLink>
        </li>
    ))
     
    return (
        <div className="CategoryList">
            <ul>
                {output}
            </ul>
        </div>
    )
}