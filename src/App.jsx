import MyButton from "./Components/MyButton"
import Users from "./Components/Users";
import Hooks1 from "./Components/Hooks1";
import Students from "./Components/Students";

const App = () => {

    return (
        <div>
            <h1>Welcome to my App</h1>
            <MyButton />
            <Users />
            <Hooks1 />
            <Students studentName = "Arafat" subject = "Economics" country = "Malaysia" />
            <Students studentName = "Abdussalam" subject = "Mathematics" country = "Singapore" />
        </div>
    )
}

export default App;