import styles from './Layout.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export default function Layout({ title, children, styleName }) {
	const [IsOn, setIsOn] = useState(false);
	const frame = useRef(null);
	const tit = useRef(null);

	// 인수로 참조객체를 받아서 참조객체의 글자값을 반복돌면서 span으로 감싸주는 함수
	const splitText = (ref) => {
		// 문자열이 담길 변수 초기화
		let tags = '';

		// 참조객체 안쪽의 글자를 innerText로 구해서
		// for of로 반복처리하면서 span태그로 감싸줌
		for (let letter of ref.current.innerText) {
			tags += `<span>${letter}</span>`;
		}
		// 기존 참조객체 안쪽의 글자는 지워주고
		ref.current.innerText = '';
		// span으로 감싸준 문자열을 참조객체의 innerHTML로 삽입
		ref.current.innerHTML = tags;
	};

	useEffect(() => {
		setIsOn(true);
		// 컴포넌트가 마운트되자마자 h1요소가 담겨있는 참조객체를 인수로 전달해서 글자 분리
		splitText(tit);
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
