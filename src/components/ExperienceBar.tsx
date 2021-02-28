import syles from '../styles/componentes/ExperienceBar.module.css'


export function ExperienceBar() {
    return(
        <header className={syles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%'}}/>
                <span className={syles.currentExperience} style={{ left: '50%'}}> 
                300 xp </span>
            </div>
            <span>600 xp</span>
        </header>
    );
}