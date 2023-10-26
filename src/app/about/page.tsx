import ProfileAside from './components/ProfileAside';
import ProfileInfo from './components/ProfileInfo';
import style from './index.module.css'

const About = () => {
	return (
		<main className={`${style.page} container`}>
			<aside className={style.aside}>
                <ProfileAside />
			</aside>
            <section className={style.mainSection}>
                <h1>Hi! My name is Serhii</h1>
                <ProfileInfo />
            </section>
		</main>
	);
};
export default About;
