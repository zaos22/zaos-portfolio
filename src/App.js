import HeaderLight from './Header/Header_light';
import HomeLight from './Home/Home_light';
import MeLight from './Me/Me_light';
import SkillsLight from './Skills/Skills_light';
import EducationLight from './Education/Education_light';
import ProjectsLight from './Projects/Projects_light';
import FooterLight from './Footer/Footer_light';
import './App.css';

function App() {
    return (
        <>
            <div>
                <HeaderLight></HeaderLight>
            </div>
            <div>
                <HomeLight></HomeLight>
            </div>
            <div>
                <MeLight></MeLight>
            </div>
            <div>
                <SkillsLight></SkillsLight>
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