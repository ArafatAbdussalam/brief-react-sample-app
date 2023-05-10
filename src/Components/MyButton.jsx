import "./MyButton.css"

const MyButton = () => {

    const clickHandler = () => {
        alert("You clicked me");
    }

    return (
        <div>
            <button onClick={clickHandler} className="main-button">Button</button>
        </div>
    )
}

export default MyButton;