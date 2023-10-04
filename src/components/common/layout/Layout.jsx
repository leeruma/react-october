import styles from './Layout.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { useSplitText } from '../../../hooks/useSplitText';
export default function Layout({ title, children, styleName }) {
	const [IsOn, setIsOn] = useState(false);
	const frame = useRef(null);
	const tit = useRef(null);

	// 컴포넌트 안쪽에서 커스텀훅을 호출해서 함수를 반환받음 (사용할 함수 활성화)
	const splitText = useSplitText();

	useEffect(() => {
		// 원하는 위치에서 활성화된 함수 호출
		splitText(tit, 0.1, 1);
		setTimeout(() => setIsOn(true), 300);
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
