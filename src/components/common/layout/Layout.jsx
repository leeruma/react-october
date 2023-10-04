import styles from './Layout.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export default function Layout({ title, children, styleName }) {
	const [IsOn, setIsOn] = useState(false);
	const frame = useRef(null);
	const tit = useRef(null);

	const splitText = (ref, gap = 0.1, delay = 0) => {
		let count = 0;
		let tags = '';
		for (let letter of ref.current.innerText) {
			tags += `<span style='transition-delay:${gap * count + delay}'>${letter}</span>`;
			count++;
		}
		ref.current.innerText = '';
		ref.current.innerHTML = tags;
	};

	useEffect(() => {
		setIsOn(true);
		splitText(tit, 0.2, 0.5);
	}, []);
	return (
		<section ref={frame} className={clsx(styles.layout, styleName, IsOn ? styles.on : '')}>
			<figure></figure>

			<div className={clsx(styles.content, styleName)}>
				<h1 ref={tit}>{title}</h1>
				{children}
			</div>
		</section>
	);
}
