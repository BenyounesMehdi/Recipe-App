/* eslint-disable react/prop-types */
export default function Instructions ({summary, instructions}) {
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: summary}} className="mt-5 font-semibold"></div>
            <div dangerouslySetInnerHTML={{__html: instructions}} className="mt-5 font-semibold"></div>
        </div>
    )
}