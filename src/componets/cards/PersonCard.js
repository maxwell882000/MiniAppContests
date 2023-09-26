import {Link} from "react-router-dom";

export default function PersonCard({imageUrl, title, altImage}) {
    return (
        <Link data-testid="flowbite-card" to="staff"
              className="flex rounded-lg border-gray-200 bg-white shadow-md dark:bg-white bg-gray-800 flex-col hover:bg-gray-100 dark:hover:bg-gray-700">
            <img data-testid="flowbite-card-image" alt={altImage}
                 src={imageUrl} className="rounded-t-lg"/>
            <div className="flex h-full flex-col justify-center gap-4 p-6">
                <h5 className=" text-sm text-md font-bold tracking-tight dark:text-gray-900 text-white">
                    <p>{title}</p></h5>
            </div>
        </Link>
    )
}


