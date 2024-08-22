import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
 

const MySkills = () => {
    return (
        <div id='skills' className="max-w-7xl mx-auto mt-10">
               <div className="content py-5">
                    <h1 className='md:text-5xl pop font-medium text-3xl text-white text-center'>My Skills</h1>
                    <p className='md:text-base text-center pop text-[#dbdbdb] mt-1'>
                    I have proficiency in working with HTML, CSS, JavaScript, and React for front-end development,<br /> along with Node.js, Express.js, and MongoDB for back-end solutions. </p>
                </div>
                <div className='p-5 md:p-0'>
                    <VerticalTimeline lineColor='#01dbc2'>
                        <VerticalTimelineElement contentArrowStyle={{color:"#01dbc2"}} icon={<FaLaptopCode />} iconStyle={{background:'#64F4AB',color:'black'}}>
                            <div className='text-center text-white '>
                                <h1 className='mb-3 font-bold text-white text-3xl text-center pb-5'>Fornt-End Side </h1>
                            <div className='grid md:grid-cols-3 grid-cols-2  gap-5'>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/React.svg" alt="" />
                                    <p>React JS</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/JavaScript.svg" alt="" />
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/TailWind.svg" alt="" />
                                    <p>Tailwind css</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/CSS.svg" alt="" />
                                    <p>CSS-3</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/Bootstrap.svg" alt="" />
                                    <p>BootStrap</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/HTML.svg" alt="" />
                                    <p>HTML-5</p>
                                </div>
                            </div>
                            </div>
                            
                        </VerticalTimelineElement>
                        <VerticalTimelineElement contentArrowStyle={{color:"#01dbc2"}} icon={<FaServer />} iconStyle={{background:'#64F4AB',color:'black'}}>
                            <div className='text-center text-white '>
                                <h1 className='mb-3 font-bold text-white text-3xl text-center pb-5'>Backend Side </h1>
                            <div className='grid md:grid-cols-3 grid-cols-2  gap-5'>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/Node JS.svg" alt="" />
                                    <p>Node JS</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/EXpress.svg" alt="" />
                                    <p>Express Js</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/MongoDB.svg" alt="" />
                                    <p>MongoDB</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/FirBase.svg" alt="" />
                                    <p>FireBase</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/Jwt.svg" alt="" />
                                    <p>JWT Token</p>
                                </div>
                                 
                            </div>
                            </div>
                            
                        </VerticalTimelineElement>
                        <VerticalTimelineElement contentArrowStyle={{color:"#01dbc2"}} icon={<FaTools />} iconStyle={{background:'#64F4AB',color:'black'}}>
                            <div className='text-center text-white '>
                                <h1 className='mb-3 font-bold text-white text-3xl text-center pb-5'>Using Tools</h1>
                            <div className='grid md:grid-cols-3 grid-cols-2  gap-5'>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/github.svg" alt="" />
                                    <p>GitHub</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/git.svg" alt="" />
                                    <p>Git</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/vscode.svg" alt="" />
                                    <p>VS code</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/Figma.svg" alt="" />
                                    <p>Figma</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/GitConnect.svg" alt="" />
                                    <p>Netlify</p>
                                </div>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/versel.svg" alt="" />
                                    <p>Vercel</p>
                                </div>
                            </div>
                            </div>
                            
                        </VerticalTimelineElement>
                        
                    </VerticalTimeline>
                </div>
            
        </div>
    );
};

export default MySkills;