function ModeToggler(){
    const darkMode = false
    const darkModeOn = <h1>Dark mode is on</h1>
    const lightModeOn = <h1>Light mode is on</h1>
    return(
        <div>
            {darkMode ? darkModeOn : lightModeOn};
        </div>
        
    );
}

export default ModeToggler;