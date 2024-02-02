function Btn(){

    const clickHandle = () => console.log('Button clicked');
    return(
        <button onClick={clickHandle}>
            Click this
        </button>
    )
}

export default Btn;