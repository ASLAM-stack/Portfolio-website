import { FaReact } from 'react-icons/fa';
import './css/Skills.css';
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpress } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';

const Skills = () => {
    return (
        <div id='boxZ'>
        <div className='zigzag'>
            <div style={{ '--i': '0' }}><span><b><FaReact /></b></span></div>
            <div style={{ '--i': '1' }}><span><b><IoLogoJavascript /></b></span></div>
            <div style={{ '--i': '2' }}><span><b><SiExpress /></b></span></div>
            <div style={{ '--i': '3' }}><span><b><BiLogoMongodb /></b></span></div>
        </div>
    </div>
    );
};

export default Skills;