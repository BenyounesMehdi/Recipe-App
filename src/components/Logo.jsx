import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom"

export default function Logo () {
    return (
        <div className=" dark:text-white">
            <Link to={"/"} className="flex justify-start items-center gap-2">
                <GiKnifeFork className="text-3xl" />
                <p className="italic text-2xl font-sans">delicious</p>
            </Link>
        </div>
    )
}