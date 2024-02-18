// function Btn(){

//     const clickHandle = () => console.log('Button clicked');
//     return(
//         <button onClick={clickHandle}>
//             Click this
//         </button>
//     )
// }

// export default Btn;

function Btn(){

    const clickHandle = () => console.log('Mouse Overed');
    return(
        <button onMouseOver={clickHandle}>
            Click this
        </button>
    )
}

export default Btn;