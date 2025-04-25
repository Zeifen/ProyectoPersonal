
const CV = () => {
  return (
    <>
      <div className="container mb-4">
        <div className="row">

          {/*Left col */}
          <div className="col-md-4 resume-col-lef">
            <div className="general-text"><img src="/zeifen.PNG" className="picture"/></div>
            <h2>Sebastian Ruiz Garcia</h2>
            <p className="general-text">Fullstack JS Developer</p>
            <hr />
            <div className="subtitles-left">Contacto</div>
            <ul className="list-unstyled">
                <li><i className="fa-solid fa-envelope"></i> Email: <a href="mailto:sebastianruizfen@outlook.com?subject=Consulta desde el CV&body=Hola Sebastián, vi tu portafolio y me interesa...">sebastianruizfen@outlook.com</a></li>
                <li><i className="fa-solid fa-mobile-screen"></i> Teléfono: 5534435937</li>
                <li><i className="fa-brands fa-linkedin"></i> LinkedIn: <a className="text-decoration-none" href="https://www.linkedin.com/in/sebastian-ruiz-garcia/" title=''>Sebastian Ruiz Garcia</a></li>
                <li><i className="fa-brands fa-github"></i> GitHub: <a className="text-decoration-none" href="https://github.com/Zeifen" title=''>Zeifen</a></li>
            </ul>

            <div className="subtitles-left">Habilidades Técnicas</div>
            <ul className="ul-custom">
                <li>Front End: JavaScript / HTML / CSSSASS / Bootstrap / React / Redux / Lit Element / Cells</li>
                <li>Back End: NodeJS / Express / MySQL</li>
                <li>Herramientas: Trello / Slack / Git & Github / Bitbucket</li>
                <li>Habilidades generales: Testing / Teoría de Objetos / Seguridad / Scrum / Kanban / DevOps / JIRA</li>
            </ul>

            <div className="subtitles-left">Habilidades Humanas</div>
            <ul className="ul-custom">
                <li>Compromiso</li>
                <li>Trabajo en equipo</li>
                <li>Responsabilidad</li>
            </ul>

            <div className="subtitles-left">Idiomas</div>
            <ul className="ul-custom">
                <li>Español - Nativo</li>
                <li>Inglés - Avanzado / Técnico y hablado</li>
            </ul>

            <div className="subtitles-left">Intereses</div>
            <ul className="ul-custom">
                <li>Compromiso</li>
                <li>Trabajo en equipo</li>
                <li>Responsabilidad</li>
            </ul>
          </div>

          {/*Right col */}
          <div className="col-md-8 resume-col-right">
            <div className="container-general">Mi Historia:</div>
            <p>
              ¡Hola y mucho gusto! Mi nombre es Sebastian, estoy titulado como
              Ing. en Sistemas Computacionales, gracias a practicas y
              experiencias profesionales decidí desarrollarme como programador y
              es a lo que me sigo dedicando hasta el día de hoy. Cuento con
              experiencia en proyectos como programador Full Stack y como Front
              end, tengo 3 años de experiencia como desarrollador Front end y 1
              año como desarrollador Full Stack, 4 años de experiencia en áreas
              de IT como soporte técnico y 1 año como consultor jr. Busco seguir
              desarrollarme con el fin de seguir creciendo profesionalmente así
              como crecer junto con la empresa. Me gustaría que en base a mis
              acciones te pueda demostrar de lo que soy capaz, gracias por darte
              el tiempo de leer un fragmento de mi vida.
            </p>

            <div className="row">
                <div className="container-general">Experiencia:</div>
                    <div className="col-md-5">
                        <div className="subtitles-right">Front End Developer</div>
                        <p>
                        <strong>Sngular</strong>
                        <br />
                        Marzo - 2022 / Marzo - 2024
                        </p>
                    </div>
                    <div className="col-md-7">
                        <p>Actividades realizadas: Desarrollo en proyectos internos de
                            BBVA en JS / Java con frameworks Cells - Lit Element, uso
                            de repositorios Github y Bitbucket, actividades DevOps con
                            Unit Test con Jenkins y Sonar, Gherkin, TS, Chai, proyectos
                            con metodologías Scrum y JIRA.
                        </p>
                    </div>

                    <div className="col-md-5">
                        <div className="subtitles-right">Full Stack Developer</div>
                        <p>
                        <strong>Tecla Coding Academy</strong>
                        <br />
                        Octubre - 2021 / Enero - 2022
                        </p>
                    </div>
                    <div className="col-md-7">
                        <p>Actividades realizadas: Creación de Proyecto "Red Social"
                            en JS con librería React y MySQL / NodeJS, metodoloía Slack
                            , estilos CSS - SASS, uso de repositorio Github, interfaz de
                            usuario, responsive, Endpoints, BD, token, componentes,
                            testing
                        </p>
                    </div>

                    <div className="col-md-5">
                        <div className="subtitles-right">Soporte / Consultor Jr.</div>
                        <p>
                        <strong>IBM / Irium - CDMX</strong>
                        <br />
                        Mayo - 2020 / Julio - 2021
                        </p>
                    </div>
                    <div className="col-md-7">
                        <p>Actividades realizadas: Validación de Tareas pendientes en
                            el Turno. Línea MVS. Atención de incidentes y alertas durante
                            el turno. Validación de Profiles, Checklist y archivos de
                            delegación.
                            Tecnologías utilizadas: TSO, TrueSight, Remedy
                        </p>
                    </div>

                    <div className="col-md-5">
                        <div className="subtitles-right">Soporte TI</div>
                        <p>
                        <strong>Sinercorp</strong>
                        <br />
                        Noviembre - 2018 / Abril - 2019
                        </p>
                    </div>
                    <div className="col-md-7">
                        <p>Actividades realizadas: Soporte telefónico de procesos y
                            movimientos de SAT, Manejo de bases de datos, soporte a
                            usuarios dados de alta en plataforma de empresa.
                            Tecnologías utilizadas: HeidiSQL
                        </p>
                    </div>

                    <div className="col-md-5">
                        <div className="container-general">Formación:</div>
                        <div>2021 <strong>Bootcamp Fullstack</strong></div>
                        <p>Tecla Coding Academy</p>
                        <div>2018 <strong>Ing. Computacional</strong></div>
                        <p>Universidad Tecnológica de México</p>
                    </div>
                    <div className="col-md-7">
                        <div className="container-general">Certificaciones:</div>
                        <div>2024 <strong>Cells</strong></div>
                        <p>Net4Skills</p>
                        <div>2024 <strong>Desarrollo Seguro</strong></div>
                        <p>Net4Skills</p>
                        <div>2022 <strong>Scrum Developer</strong></div>
                        <p>SCRUMStudy</p>
                        <div>2018 <strong>MySQL / SQL</strong></div>
                        <p>Platzi</p>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default CV;
