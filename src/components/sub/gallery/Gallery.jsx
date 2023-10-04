import Layout from '../../common/layout/Layout';
import styles from './Gallery.module.scss';
//import clsx from 'clsx';

export default function Gallery() {
	return (
		<Layout title={'Gallery'} styleName={styles.gallery}>
			<p>갤러리 페이지입니다.</p>
		</Layout>
	);
}
