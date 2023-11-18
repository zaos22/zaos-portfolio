import HeaderLight from './Header/Header_light';
import HomeLight from './Home/Home_light';
import MeLight from './Me/Me_light';
import SkillsLight from './Skills/Skills_light';
import EducationLight from './Education/Education_light';
import ProjectsLight from './Projects/Projects_light';
import FooterLight from './Footer/Footer_light';
import HomeDark from './Home/Home_dark';
import HeaderDark from './Header/Header_dark';
import MeDark from './Me/Me_dark';
import SkillsDark from './Skills/Skills_dark';
import './App.css';

function App() {
    return (
        <>
            <div>
                <div>
                    <HeaderDark></HeaderDark>
                </div>
                {/* <div>
                    <HeaderLight></HeaderLight>
                </div> */}
            </div>
            <div>
                <div>
                    <HomeDark></HomeDark>
                </div>
                {/* <div>
                    <HomeLight></HomeLight>
                </div> */}
            </div>
            <div>
                <div>
                    <MeDark></MeDark>
                </div>
                {/* <div>
                    <MeLight></MeLight>
                </div> */}
            </div>
            <div>
                <div>
                    <SkillsDark></SkillsDark>
                </div>
                {/* <div>
                    <SkillsLight></SkillsLight>
                </div> */}
            </div>
            <div>
                <EducationLight></EducationLight>
            </div>
            <div>
                <ProjectsLight></ProjectsLight>
            </div>
            <div>
                <FooterLight></FooterLight>
            </div>
        </>
    );
}
export default App;