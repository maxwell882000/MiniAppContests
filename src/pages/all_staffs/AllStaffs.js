import PersonCard from "../../componets/cards/PersonCard";
import "./style/text_style.css";
import {people_data} from "./data/people_data";

export default function AllStaffs() {
    const objects = people_data;

    function getPersonCards() {
        return objects.map(e =>
            <div className="w-[48%] my-2">
                <PersonCard imageUrl={e.image} altImage={e.alt} title={e.title}/>
            </div>)
    }

    return (
        <div className="all_cards">
            <h1 className="dark:text-white">MediStaff Book</h1>
            <div className="flex flex-wrap justify-evenly">
                {getPersonCards()}
            </div>
        </div>

    )
}