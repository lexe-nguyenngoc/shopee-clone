import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';

import { auth as authRoute } from '~/routes';

import Button from '~/components/Button';
import { InputField } from '~/components/Form';

import Group from '../../components/Group';
import Social from '../../components/Social';
import Redirect from '../../components/Redirect';

import styles from './SignUp.module.scss';

const cx = classNames.bind(styles);

const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const signUpSchema = new yup.object({
  phone: yup
    .string()
    .required('Vui lòng điền vào mục này.')
    .matches(phoneRegExp, 'Số điện thoại không hợp lệ.'),
});

const SignUp = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ resolver: yupResolver(signUpSchema), mode: 'onChange' });

  const handleLogin = (data) => {
    console.log({ data });
  };

  return (
    <Group className={cx('sign-up')}>
      <h1 className={cx('heading')}>Đăng ký</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <InputField
          id='phone'
          name='phone'
          placeholder='Số điện thoại'
          register={register}
          message={errors.phone?.message}
        />

        <Button
          type='submit'
          color='primary'
          variant='contained'
          disabled={!isValid}
        >
          ĐĂNG NHẬP
        </Button>
      </form>
      <Social data={['facebook', 'google']} />
      <div className={cx('commit')}>
        Bằng việc đăng kí, bạn đã đồng ý với Shopee về
        <a
          href='https://shopee.vn/legaldoc/termsOfService/?__classic__=1'
          target='_blank'
          rel='noreferrer'
        >
          Điều khoản dịch vụ
        </a>
        &#38;
        <a
          href='https://shopee.vn/legaldoc/privacy/?__classic__=1'
          target='_blank'
          rel='noreferrer'
        >
          Chính sách bảo mật
        </a>
      </div>
      <Redirect
        label='Bạn đã có tài khoản?'
        to={`${authRoute.index}/${authRoute.signIn}`}
        text='Đăng nhập'
      />
    </Group>
  );
};

SignUp.propTypes = {};

SignUp.defaultProps = {};

export default SignUp;
