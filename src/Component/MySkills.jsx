import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaLaptopCode } from 'react-icons/fa';

const MySkills = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10">
               <div className="content py-5">
                    <h1 className='md:text-5xl pop font-medium text-3xl text-white text-center'>My Skills</h1>
                    <p className='md:text-base text-center pop text-[#dbdbdb]'>
Got a project or just want to connect? Feel free to reach out for <br /> any web development inquiries or opportunities.</p>
                </div>
                <div>
                    <VerticalTimeline lineColor='#01dbc2'>
                        <VerticalTimelineElement contentArrowStyle={{color:"#01dbc2"}} icon={<FaLaptopCode />} iconStyle={{background:'#64F4AB',color:'black'}}>
                            <div className='text-center text-white '>
                                <h1 className='mb-3 font-bold text-white text-3xl text-center pb-5'>Fornt-End Side </h1>
                            <div className='grid grid-cols-3'>
                                <div>
                                    <img className='w-16 mx-auto' src="/SVG/React.svg" alt="" />
                                    <p>React JS</p>
                                </div>
                                <div>
                                    <img src="/SVG/JavaScript.svg" alt="" />
                                    <p></p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p></p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p></p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p></p>
                                </div>
                                <div>
                                    <img src="" alt="" />
                                    <p></p>
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