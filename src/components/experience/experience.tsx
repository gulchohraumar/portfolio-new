
import { useState } from 'react';
import './experience.scss';


function Experience() {
    const [experienceList, setExperienceList] = useState(
        [
            {
                name: 'Middle Front-End Web Developer | "Uniser Group" MMC',
                imgUrl: 'uniserGroup.png',
                period: 'May 2024 - Current',
                works: [
                    { desc: "I do this works during this time: User-friendly, adaptive and responsive websites with optimized cross-browser compatibility and runtime performance. Optimize website performance by minimizing load times and reducing page weight. Troubleshoot and debug frontend issues using browser developer tools. Work closely with backend developers to integrate frontend and backend functionality " },
                ]
            },
            {
                name: 'Front-End Web Developer | "Uniser Group" MMC',
                imgUrl: 'uniserGroup.png',
                period: 'Sep 2022 - May 2024',
                works: [
                    { desc: " I developed the front-end of new software for many logistics, travel, etc. companies and supported previous projects working within the team. During this term, I used HTML5, CSS3 (Bootstrap, Tailwind), JavaScript (Angular) and so many npm libraries. And I continue to do so." },
                ]
            },
            {
                name: 'Intern Front-End Web Developer | "Uniser Group" MMC',
                imgUrl: 'uniserGroup.png',
                period: 'Jun 2022 - Sep 2022',
                works: [
                    { desc: " I improved my abilities about web developement, how we can work with team and get more  skills about programminng in this term." },
                    { desc: " Support ready project and to make some changes in their UI and integrate them with database " },
                ]
            },

            // {
            //     name: 'Intern Front-End Web Developer | Algorithmics Azerbaijan',
            //     imgUrl: 'algorithmics.png',
            //     period: 'Feb 2022 - Jun 2022',
            //     works: [
            //         { desc: "I learned basics of web developement, how we can work with front-end languages, tools,  libraries to make more efficient, reliable, safe etc products and so on." },
            //         { desc: "Developed user interface components and implemented them following well-known React.js workflows." },
            //     ]
            // },
        ]);


    return (
        <div id='experience' className='row mt-5 py-4 px-4'>
            <div className="col-lg-12 mb-3">
                <h3 className='text-center px-2 font-semibold text-4xl header-title'>
                    Experience
                    <div className="header-bottom" ></div>
                </h3>
            </div>


            <div className="mt-4 row" style={{ gap: '20px' }}>
                {
                    experienceList.map((dt: any, key: number) => {
                        return <div className="row text-start py-3 rounded" key={key} style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}}>
                            <div className="col-md-2 border-r">
                                <img className="col-sm-10 p-2 mx-auto" style={{ maxWidth: '110px' }} src={require('../../assets/experience/' + dt.imgUrl)} alt="" />
                            </div>
                            <div className="col-md-10 text-sm font-normal ps-3">
                                <div className="mb-1">
                                    <span className="font-medium">
                                        • {dt.name},
                                    </span>
                                    <small className="color: #f39d35;"> {dt.period}</small>
                                </div>

                                {
                                    dt.works.map((data: any, keyWorks: number) => {
                                        return <p key={keyWorks} className="mt-2 text-justify">
                                            {
                                                data.desc
                                            }
                                        </p>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div >
        </div >
    );
}

export default Experience;
