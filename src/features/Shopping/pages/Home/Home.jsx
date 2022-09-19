import classNames from 'classnames/bind';

import Container from '~/layouts/components/Container';
import SearchKeyword from '../../components/SearchKeyword';
import Sidebar from '../../components/Sidebar';
import Sortbar from '../../components/Sortbar';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <Container className={cx('wrapper')}>
      <Sidebar />
      <div className={cx('content')}>
        <SearchKeyword />
        <Sortbar />
      </div>
    </Container>
  );
};

export default Home;
