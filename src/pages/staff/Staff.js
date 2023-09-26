import {Button, Carousel} from 'flowbite-react';
import {useNavigate} from 'react-router-dom';
import './style/calendar.css';
import {useState} from "react";
import {Alert} from 'flowbite-react';
import "./style/alert_animation.css";
import banners from "./data/banners";
import OpenCalendar from "../../componets/pop_ups/OpenCalendar";

export default function Staff() {
    const navigate = useNavigate();
    const [date, setDate] = useState(null);
    const [showSuccess, setShowSuccess] = useState(1);

    function carousels() {
        return banners.map(e => <img className="h-56" alt={e.alt} src={e.image}/>)
    }

    return (
        <div className="space-y-2">

            <div className="relative">

                <Alert
                    className={showSuccess === 4 ? "opacity-0" : showSuccess === 3 ? 'alert-entering alert-entered' :
                        showSuccess === 2 ? 'alert-exiting alert-exited' : 'hidden'}
                    color="info">
                  <span>
                    <p>
                      <span className="font-medium">
                        Info alert!
                      </span>
                      Successfully, book meeting with doctor {date}
                    </p>
                  </span>
                </Alert>
                <div className="absolute z-10 mt-2">
                    <button style={{all: null}} onClick={() => navigate(-1)}>
                        <svg className="text-gray-800" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                             viewBox="0 0 24 24">
                            <path d="M14.3 18.3l-1.4 1.4L6.6 12l6.3-6.3 1.4 1.4L9.4 12z"/>
                        </svg>
                    </button>
                </div>
                <div className="h-56">
                    <Carousel leftControl=" "
                              indicators={false}
                              rightControl=" ">
                        {carousels()}
                    </Carousel>
                </div>
            </div>

            <div>
                <h1 className="dark:text-white ">Title </h1>
                <p className="dark:text-white text-left text-wrap mx-2">A doctor is a highly trained medical
                    professional who plays a crucial role in
                    maintaining and
                    improving people's health. The journey to becoming a doctor is long and demanding, typically
                    requiring several years of education and training.</p>
            </div>

            <div className="flex flex-row justify-between p-3">
                <OpenCalendar setDate={setDate}></OpenCalendar>
                <Button color="gray" onClick={() => {
                    setShowSuccess(2);
                    setTimeout(() => setShowSuccess(3), 1);
                    setTimeout(() => {
                            setShowSuccess(2);
                            setTimeout(() => setShowSuccess(1), 1000);
                        }
                        , 3000);
                }}>Submit</Button>
            </div>

        </div>

    )
}

