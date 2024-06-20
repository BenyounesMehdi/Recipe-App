/* eslint-disable react/prop-types */
import { Splide, SplideSlide } from  '@splidejs/react-splide'
import "@splidejs/splide/dist/css/splide.min.css"
import Card from './Card'
import { Link } from 'react-router-dom'

export default function Carousel ({recipes}) {
    return (
        <div className='flex justify-center items-center p-4'>
            <Splide 
                options={{
                    perPage: 4, 
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "1rem"
                }}
            >
                {
                    recipes.map(({title, image, id}) => {
                        return (
                            
                            <SplideSlide key={id}>
                                <Link to={"recipe/" + id}>
                                    <Card title={title}  image={image} />
                                </Link>
                            </SplideSlide>
                        )
                    })
                }
            </Splide>
        </div>
    )
}