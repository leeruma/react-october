import styles from './Layout.module.scss';
import clsx from 'clsx';
import { useEffect, useRef } from 'react';

export default function Layout({ title, children, styleName }) {
	// 가상돔 요소를 document.querySelector를 쓰지않고 실시간으로 참조하고 싶을때
	// 빈 참조객체를 useRef로 생성
	const frame = useRef(null);
	const isOn = useRef(false);

	useEffect(() => {
		// 컴포넌트 마운트시 한번만 호출
		// 페이지가 변경이 돼서 각 페이지마다의 layout컴포넌트가 마운트될시 한번만 on 클래스를 추가
		isOn.current = true;
	}, []);
	return (
		// 참조하고 싶은 가상돔 요소에 ref로 연결
		<section ref={frame} className={clsx(styles.layout, styleName, isOn.current ? styles.on : '')}>
			<figure></figure>

			<div className={clsx(styles.content, styleName)}>
				<h1>{title}</h1>
				{children}
			</div>
		</section>
	);
}
