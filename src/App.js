import React, { useState, useEffect, Suspense } from 'react';
import RocketAnimation from './RocketAnimation'; // Importa tu componente de animación
import './App.css';

const HeaderLight = React.lazy(() => import('./Header/Header_light'));
const HomeLight = React.lazy(() => import('./Home/Home_light'));
const MeLight = React.lazy(() => import('./Me/Me_light'));
const SkillsLight = React.lazy(() => import('./Skills/Skills_light'));
const EducationLight = React.lazy(() => import('./Education/Education_light'));
const ProjectsLight = React.lazy(() => import('./Projects/Projects_light'));
const FooterLight = React.lazy(() => import('./Footer/Footer_light'));
const HeaderDark = React.lazy(() => import('./Header/Header_dark'));
const HomeDark = React.lazy(() => import('./Home/Home_dark'));
const MeDark = React.lazy(() => import('./Me/Me_dark'));
const SkillsDark = React.lazy(() => import('./Skills/Skills_dark'));
const EducationDark = React.lazy(() => import('./Education/Education_dark'));
const ProjectsDark = React.lazy(() => import('./Projects/Projects_dark'));
const FooterDark = React.lazy(() => import('./Footer/Footer_dark'));


function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);

    const toggleDarkMode = () => {
        setLoading(false); // Inicia la animación al cambiar de modo
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        // Simula un tiempo de carga
        const loadTimeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        // Limpieza cuando se desmonta el componente
        return () => clearTimeout(loadTimeout);
    }, [isDarkMode]);

    return (
        <div>
            {loading ? (
                <RocketAnimation isLoading={loading} />
            ) : (
                <Suspense>
                    <div>
                        {isDarkMode ? <HeaderDark toggleDarkMode={toggleDarkMode} /> : <HeaderLight toggleDarkMode={toggleDarkMode} />}
                    </div>
                    <div>
                        {isDarkMode ? <HomeDark /> : <HomeLight />}
                    </div>
                    <div>
                        {isDarkMode ? <MeDark /> : <MeLight />}
                    </div>
                    <div>
                        {isDarkMode ? <SkillsDark /> : <SkillsLight />}
                    </div>
                    <div>
                        {isDarkMode ? <EducationDark /> : <EducationLight />}
                    </div>
                    <div>
                        {isDarkMode ? <ProjectsDark /> : <ProjectsLight />}
                    </div>
                    <div>
                        {isDarkMode ? <FooterDark /> : <FooterLight />}
                    </div>
                </Suspense>
            )}
        </div>
    );
}

export default App;