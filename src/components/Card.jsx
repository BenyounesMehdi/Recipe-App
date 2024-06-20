/* eslint-disable react/prop-types */
export default function Card ({title, image}) {
    return (
        <div >
            <div className="flex justify-center items-center">
                <img src={image} className="object-cover rounded-lg " />
            </div>
            <p className="font-semibold text-center mt-2 text-sm dark:text-white">{title}</p>
        </div>
    )
}