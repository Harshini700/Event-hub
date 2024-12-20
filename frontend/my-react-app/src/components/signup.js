import  { useState } from 'react';
import axios from 'axios';
import './assets/styles/SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const { username, email, password } = formData;

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/register', { username, email, password });
            localStorage.setItem('token', response.data.token);
            alert('Registration successful');
        } catch (error) {
            console.error(error.response.data);
            alert('Registration failed');
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required />
                <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
