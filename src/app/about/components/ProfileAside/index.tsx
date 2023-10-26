import { getCurrentAge } from '@/app/lib/getCurrentAge';
import Image from 'next/image';
import style from './index.module.css';
import Link from 'next/link';

const socialLinks = [
	{
		title: 'Telegram',
		link: 'https://t.me/g4rvend',
	},
	{
		title: 'GitHub',
		link: 'https://github.com/g4rv',
	},
	{
		title: 'LinkedIn',
		link: '#',
	},
];

const ProfileAside = () => {
	return (
		<aside>
			<Image
				className={style.img}
				src={'/no-photo.jpg'}
				width="80"
				height="80"
				alt="Serhii Volsyi"
			/>
			<div className={style.infoList}>
				<p className={style.info}>
					name: <span>Serhii</span>
				</p>
				<p className={style.info}>
					age: <span>{getCurrentAge()}</span>
				</p>
				<p className={style.info}>
					country: <span>Ukraine</span>
				</p>
			</div>
			<div className={style.socials}>
				{socialLinks.map((link) => (
					<Link key={link.link} href={link.link} target="_blank">
						{link.title}
					</Link>
				))}
			</div>
		</aside>
	);
};
export default ProfileAside;
