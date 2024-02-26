import './Header.scss';
import { RiTodoLine } from "react-icons/ri";
function Header (){
    return(
        <header>
            <div className='header-left'>
            <RiTodoLine className='header-icon'/>
        <h1>To Do List</h1>
            </div>
        
        <div>by Katy Molloy</div>
        </header>
    )
}

export default Header;