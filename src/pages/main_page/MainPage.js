import {TitleMenu} from '../../components/TitleMenu/TitleMenu';
import { MainButton } from '../../components/MainButton/MainButton';
import './main.css';
import '../../assets/css/root.css';



export const MainPage = () => {

    return (
        <div>
            <TitleMenu />
            <MainButton />
        </div>
    )        
}