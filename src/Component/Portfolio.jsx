import CardPort from "./Card";
import Trek from '/project/tretek.png'
import ins from '/project/insightize.png'
import mint from '/project/micromint.png'
 

const Portfolio = () => {
    return (
        <div id="portfolio" className="max-w-7xl mx-auto my-20 space-y-8">
            <div className="text-center">
                <h1 className="text-4xl text-white robo">Portfolio</h1>
                <p>These projects highlight my expertise in creating user-centric solutions <br /> for outdoor planning, smart shopping, and accessible investing.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5 items-center justify-center grid-cols-1 p-5 md:p-0">
                <CardPort img={Trek} pName='TreTek - MERN Stack' description='Trektek is a web platform for outdoor enthusiasts, providing tools for planning and managing trekking adventures with real-time data and user-friendly features.' client='https://github.com/ASLAM-stack/TreTek_Client' server='https://github.com/ASLAM-stack/TreTek_Server' Live='https://trektek-auth.web.app/'></CardPort>
                <CardPort img={ins} pName='Insightize - MERN Stack' description='Insightize is a platform that offers quick product queries and suggests alternative options, helping users make informed purchasing decisions efficiently.' client='https://github.com/ASLAM-stack/Insightize-Client' server='https://github.com/ASLAM-stack/Insightize-Server' Live='https://insightize.web.app/'></CardPort>
                <CardPort img={mint} description='Micromint is a platform for micro-investing, allowing users to invest small amounts in diversified portfolios, making investing accessible and straightforward.' Live='https://micromint-c399d.web.app/' client='https://github.com/ASLAM-stack/MicroMint-Client' sever='https://github.com/ASLAM-stack/MicroMint-Server' pName='MicroMint - MERN Stack'></CardPort>
            </div>
        </div>
    );
};

export default Portfolio;