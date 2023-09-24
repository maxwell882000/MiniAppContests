import logo from './logo.svg';
import './App.css';
import PersonCard from "./componets/cards/PersonCard";
import {useTelegram} from "./hooks/useTelegram";
import {useEffect} from "react";

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <div className="w-1/5">
                <PersonCard>

                </PersonCard>
            </div>
            <div className="w-1/5">
                <PersonCard>

                </PersonCard>
            </div>
            <div className="w-1/5">
                <PersonCard>

                </PersonCard>
            </div>

        </div>
    );
}

export default App;
