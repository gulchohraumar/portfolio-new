
import { useState } from 'react';
import './skills.scss';

function Skills() {

  const [skills, setSkills] = useState(
    [
      {
        name: 'HTML5',
      },
      {
        name: 'CSS3',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'Bootstrap',
      },
      {
        name: 'Tailwind CSS',
      },
      {
        name: 'Responsive design',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'Angular JS',
      },
      {
        name: 'Angular material',
      },
      {
        name: 'RxJS',
      },

      {
        name: 'React JS',
      },
      {
        name: 'Redux',
      },
      {
        name: 'RESTful API',
      },
      {
        name: 'Github',
      },
      {
        name: 'Web scraping',
      },
    ]
  )

  return (
    <div id='skills' className='row mt-3 py-4 px-4'>
      <div className="col-lg-12 mb-3">
        <h3 className='text-center px-2 font-semibold text-4xl header-title'>
          Skills
          <div className="header-bottom" ></div>
        </h3>
      </div>


      <div className="mt-4 row justify-content-center" style={{ gap: '20px' }}>
        {
          skills.map((dt: any, key: number) => {
            return <div key={key} className='skills font-medium px-2 py-1 rounded '>
              {dt.name}
            </div>
          })
        }
      </div>
    </div>
  );
}

export default Skills;
