import icon from '../assets/icon.png'

export default function Header(){
    return (
        <header className="header">
            <img src={icon} alt="icon"></img>
            <h1>Chef Claude</h1>
        </header>
    )
}