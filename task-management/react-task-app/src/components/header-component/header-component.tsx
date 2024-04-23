import './header-component.css'
//import { FaSun, FaMoon } from 'react-icons/fa'
import { BsSunFill, BsMoonFill } from 'react-icons/bs'

export default function Header(props: any) {
    const { theme, setTheme } = props
    return (
        <header>
            <div className="logo">
                <span>Task Management</span>
            </div>
            <div className="theme-container">
                <span>{theme == 'light' ? 'โหมดกลางวัน' : 'โหมดกลางคืน'}</span>
                <span className="icon"
                    onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
                    {/* {theme == 'dark' ? <FaMoon /> : <FaSun />} */}
                    {theme == 'dark' ? <BsMoonFill /> : <BsSunFill />}
                </span>
            </div>
        </header>
    );
}