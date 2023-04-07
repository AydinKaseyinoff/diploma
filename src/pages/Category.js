import { useMatch } from "react-router"

export default function Category() {
    const { params } = useMatch("/categories/:slug");
    console.log(params.slug)

    const categories = [
        {id: 1, name: 'Phone Cases', slug: 'phone-cases'},
        {id: 2, name: 'Chargers and Cables', slug: 'chargers-and-cables'},
        {id: 3, name: 'Portable Power Banks', slug: 'portable-power-banks'},
        {id: 4, name: 'Audio and Video Accessories', slug: 'audio-and-video-accessories'},
    ]

    return (
        <div className="Category">
            <h1>{ params.slug }</h1>
            <p>This is</p>
        </div>
    )
}