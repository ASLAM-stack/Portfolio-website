import { useEffect } from 'react';
import './css/About.css';
import { MdCloudDownload } from 'react-icons/md';

const About = () => {
    useEffect(() => {
        let textElement = document.querySelector('#text');
        if (textElement) {
            let textContent = textElement.textContent;
            textElement.innerHTML = '';
            for (let char of textContent) {
                let span = document.createElement('span');
                span.textContent = char;
                textElement.appendChild(span);
            }

            let spans = textElement.querySelectorAll('span');

            const handleScroll = () => {
                let scrollDistance = window.scrollY;
                spans.forEach((span, index) => {
                    if (scrollDistance >= (index + 1) * 1) {
                        span.classList.add('active'); // Corrected method for adding a class
                    } else {
                        span.classList.remove('active'); // Corrected method for removing a class
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);

            // Clean up event listener on component unmount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <div className="max-w-7xl mx-auto mt-10">
            <div className="flex justify-between items-center flex-wrap gap-5 p-5 md:p-0">
                <div id='about' className="about_img w-full  md:w-[40%]">
                    <img src="/aslampro.png" alt="Person" />
                </div>
                <div className="about_description box w-full md:w-1/2">
                    <div>
                        <h2 className="text-white text-4xl text-justify">About Me</h2>
                        <h2 className="satis text-white text-7xl opacity-30 -mt-14">
                            Arif Hossain <span className="text-[#ff0000]">Aslam</span>
                        </h2>
                    </div>
                    <p id="text" className="text-white ">
                        I&apos;m Arif Hossain Aslam, a highly skilled Junior MERN Developer with a passion for creating dynamic, user-centric web applications. I specialize in cutting-edge technologies like HTML, CSS, Tailwind, JavaScript, React, Node.js, Express.js, and MongoDB. My signature projects, including Trektek, Insightize, and Micromint, demonstrate my expertise in delivering innovative, high-impact solutions. I&apos;m dedicated to continuous learning and staying ahead of industry trends, ensuring my work is always at the forefront of innovation. Let&apos;s collaborate to bring your ideas to life with powerful, scalable web applications.
                    </p>
                    <a href="/Resume of Arif Hossain Aslam Web Developer MERN STACk.pdf" className='btn text-lg shadow-[#1e9bff] mt-5 hover:-translate-y-2 duration-500  ' download={true}><MdCloudDownload /> Resume</a>
                </div>
            </div>
        </div>
    );
};

export default About;
