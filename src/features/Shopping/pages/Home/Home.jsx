import classNames from 'classnames/bind';

import Container from '~/layouts/components/Container';
import Sidebar from '../../components/Sidebar';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <Container className={cx('wrapper')}>
      <Sidebar />
      <div className={cx('content')}></div>
    </Container>
  );
};

export default Home;
