import { useState } from "react";
import Hero from "./components/Hero";
import Generator from "./components/Generator";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/functions";

function App() {
    const [workout, setWorkout] = useState(null);
    const [poison, setPoison] = useState("individual");
    const [muscles, setMuscles] = useState([]);
    const [goal, setGoal] = useState("strength_power");

    function updateWorkout() {
        if (muscles.length < 1) {
            return;
        }
        let newWorkout = generateWorkout({ poison, muscles, goal });
        window.location.href = "#workout";
        setWorkout(newWorkout);
    }

    return (
        <main
            className="min-h-screen flex flex-col bg-gradient-to-r from-green-700 to-emerald-900
 text-white text-sm sm:text-base"
        >
            <div className="signinBtn text-sm md:text-base font-light">
                <button className="login">Login</button>
                <button className="signup">Signup</button>
            </div>
            <Hero />
            {/*<Generator
                poison={poison}
                setPoison={setPoison}
                muscles={muscles}
                setMuscles={setMuscles}
                goal={goal}
                setGoal={setGoal}
                updateWorkout={updateWorkout}
            />
            {workout && <Workout workout={workout} />}*/}
        </main>
    );
}

export default App;
