/* eslint-disable react/prop-types */
export default function Ingredients ({Ingredients}) {
    return (
        <div>
            {Ingredients.map(({id, original})=> {
                return (
                    <li key={id} className="font-semibold">{original}</li>
                )
            })}
        </div>
    )
}