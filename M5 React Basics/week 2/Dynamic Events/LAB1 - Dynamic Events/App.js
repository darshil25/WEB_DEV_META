function App() {
    function handleClick() {
        let rand = Math.floor(Math.random() * 3) + 1
        console.log(rand);
        let inp = prompt("type a number");
        alert(`Computer number: ${rand}, Your guess: ${inp}`)
    }
    return (
        <div>
            <h1>Task: Add a button and handle a click event</h1>
            <button onClick={handleClick}>Guess the number between 1 and 3</button>
        </div>
    );
}

export default App;
