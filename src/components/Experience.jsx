import React from 'react';
import Card from './Card';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      jobs: [
        {
          id: '1azd',
          title: 'Platzi Master',
          date: '15/05/20 - Actual',
          description: 'Realizo un proceso de formación de 1680 hrs donde me especializó en backend con tecnológias como Mongo DB, Node JS, Express, React, Python y Django',
        },
        {
          id: '2azd',
          title: 'Líder Técnico',
          date: '01/12/19 - 30/05/20',
          description: 'Realice la coordinación de 4 proyectos con un total de 5 personas donde mis actividades consistían en la planeación, ejecución y seguimiento de proyectos. Así el diseño de productos digitales, utilizando tecnologías como Mysql, Node JS, Laravel y Boostrap',
        },
        {
          id: '3azd',
          title: 'Desarrollador Web',
          date: '01/04/19 - 06/07/19',
          description: 'Realice un sistema para el control de permisos en la empresa IT Solutions utilizando tecnologías Mysql, Laravel y Boostrap',
        },
        {
          id: '4azd',
          title: 'Soporte Maximo IBM',
          date: '01/01/19 - 06/07/19',
          description: 'Realice actividades de soporte utilizando tecnologías como SQL developer, Bash scripting, Servidores Linux, y Windows ',
        },
        {
          id: '5azd',
          title: 'Centro de Investigaciones en Optica',
          date: '15/06/15 - 15/08/15',
          description: 'Desarrolle un sistema de reconocimiento de objetos utilizando una Red Backprogation con Matlab',
        },
      ],
    };
  };

  render() {
    const { jobs } = this.state;

    return (
      <div className='Experience'>
        <h2 className='Experience__title'>Experiencia</h2>
        <div className='Experience__cards'>
          {
            jobs.map((job) => (
              <Card
                key={job.id}
                title={job.title}
                date={job.date}
                description={job.description}
              />
            ))
          }
        </div>
      </div>
    );
  };
}

export default Experience;
