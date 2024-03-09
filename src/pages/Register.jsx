import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';

export const Register = () => {
  const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password must be less than 16 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await axios.post('/api/users', data);
      if (response.status === 201) {
        console.log('User registered successfully');
        // Optionally, you can redirect the user to another page or perform other actions
      } else {
        console.error('Failed to register user');
        // Handle the error, show a message to the user, etc.
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='register-container'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control'>
          <label>Username:</label>
          <input type='text' name='username' {...register('username')} />
          {errors.username && (
            <div className='error-message'>{errors.username.message}</div>
          )}
        </div>
        <div className='form-control'>
          <label>Email:</label>
          <input type='text' name='email' {...register('email')} />
          {errors.email && (
            <div className='error-message'>{errors.email.message}</div>
          )}
        </div>
        <div className='form-control'>
          <label>Password:</label>
          <input type='password' name='password' {...register('password')} />
          {errors.password && (
            <div className='error-message'>{errors.password.message}</div>
          )}
        </div>
        <div className='form-control'>
          <label>Confirm Password:</label>
          <input
            type='password'
            name='confirmPassword'
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <div className='error-message'>
              {errors.confirmPassword.message}
            </div>
          )}
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};
