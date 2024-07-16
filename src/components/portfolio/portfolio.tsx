import { useState } from 'react';
import './portfolio.scss';
import { useNavigate } from 'react-router-dom';

function Portfolio() {


    const [items, setItems] = useState(
        [
            {
                imageUrl: 'denta.svg',
                url: 'https://chipper-salamander-bf3d53.netlify.app/',
                name: 'Denta',
                desc: 'Made for dentist task management'
            },
            {
                imageUrl: 'seramic.png',
                url: 'https://celadon-pika-fd5113.netlify.app/',
                name: 'Mina Seramic',
                desc: 'Seramic e-commerce website'
            },
            {
                imageUrl: 'illdy.png',
                url: 'https://thriving-youtiao-4b75d8.netlify.app/',
                name: 'Illdy',
                desc: 'Illdy project'
            },
        ]
    )

    const navigate = useNavigate();

    return (
        <div className='row mt-5 py-4'>
            <div className="col-lg-12 mb-4">
                <h3 className='text-center px-2 font-semibold text-4xl header-title'>
                    Portfolio
                    <div className="header-bottom" ></div>
                </h3>
            </div>


            <div className="mt-5 row">

                {
                    items.map((dt: any, key: number) => {
                        return <div key={key} className="col-md-4">
                            <div className="project-con">
                                <div className="img-projects">
                                    <img src={require('../../assets/projects/' + dt.imageUrl)} alt="" />
                                </div>
                                <div className='mt-2 px-2 row justify-content-between align-items-center'>
                                    <div className='col-sm-9'>
                                        <h4 >
                                            {dt.name}
                                        </h4>
                                        <p className='col-sm-12'>{dt.desc}</p>
                                    </div>

                                    <div className="col-sm-3 text-end">
                                        <a target='_blank' rel='noopener noreferrer' href={dt.url}>

                                            <button className='project-hyperlink' >
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    );
}

export default Portfolio;
