import LoginForm from '@/components/auth/LoginForm';
import Container from '@/components/shared/Container';
import React from 'react';

const Loginpage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
            <LoginForm />
        </div>
    );
};

export default Loginpage;