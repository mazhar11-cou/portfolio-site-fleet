// Import Assets
import profile from '../assets/MazharulHasan.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Mazharul Hasan" />

            <div className='header__content'>
                <h1>Hi, I'm Mazharul Hasan</h1>
                <p>Blockchain Developer</p>
                <a href = "mailto:mhasan@stud.cou.ac.bd" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;