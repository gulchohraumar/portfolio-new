import { useState } from 'react';
import './portfolio.scss';
import { useNavigate } from 'react-router-dom';

function Portfolio() {


    const [items, setItems] = useState(
        [
            {
                imageUrl: 'denta.svg',
                url: 'https://6698bc5e2b97e7599831c2b6--lovely-belekoy-9184af.netlify.app',
                name: 'Denta',
                desc: 'Made for dentist '
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
            {
                imageUrl: 'watchFilm.png',
                url: 'https://illustrious-pie-12d75a.netlify.app/',
                name: 'Film',
                desc: 'How can watch film?'
            },
            {
                imageUrl: 'car.png',
                url: 'https://illustrious-dusk-629bac.netlify.app/',
                name: 'Cars',
                desc: 'Car sales website'
            },
            {
                imageUrl: 'dazko.svg',
                url: 'https://inquisitive-yeot-fd19d4.netlify.app/',
                name: 'Dazko',
                desc: 'Dazko sport website clone'
            },
            {
                imageUrl: 'table.webp',
                url: 'https://clinquant-cajeta-b47817.netlify.app/',
                name: 'Tables',
                desc: 'Multifunctional Angular table examples'
            },
            {
                imageUrl: 'cards.webp',
                url: 'https://6698cee1a2affa6b3b049a20--cheery-belekoy-d6db2b.netlify.app/',
                name: 'Cards',
                desc: 'Various card UI examples'
            },
            // {
            //     imageUrl: 'draggable.webp',
            //     url: 'https://thriving-youtiao-4b75d8.netlify.app/',
            //     name: 'Draggable',
            //     desc: 'Various draggable elements examples'
            // },
        ]
    )

    const navigate = useNavigate();

    return (
        <div id='portfolio' className='row mt-5 py-4 px-4'>
            <div className="col-lg-12 mb-3">
                <h3 className='text-center px-2 font-semibold text-4xl header-title'>
                    Portfolio
                    <div className="header-bottom" ></div>
                </h3>
            </div>


            <div className="mt-5 row" style={{gap: '20px 0'}}>
                {
                    items.map((dt: any, key: number) => {
                        return <div key={key} className="col-md-3">
                            <div className="project-con h-full">
                                <div className="bg-projects">
                                    <div className="pt-2 px-2 text-end">
                                        <a target='_blank' rel='noopener noreferrer' href={dt.url}>

                                            <button className='project-hyperlink' >
                                                <i className="fa-solid fa-arrow-up-right"></i>
                                            </button>
                                        </a>
                                    </div>
                                    <div className="img-projects">
                                        <img src={require('../../assets/projects/' + dt.imageUrl)} alt="" />
                                    </div>
                                </div>

                                <div className='mt-2 row justify-content-between align-items-center'>
                                    <div className='col-sm-12'>
                                        <h4 >
                                            {dt.name}
                                        </h4>
                                        <p className='col-sm-12'>{dt.desc}</p>
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
