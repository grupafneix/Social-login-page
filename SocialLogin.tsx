import React from 'react';
import { Facebook, Instagram, Mail } from 'lucide-react';

const SocialLogin = () => {
  const handleLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="buttons is-centered">
      <button
        className="button is-medium social-button"
        style={{ backgroundColor: '#DB4437', color: 'white' }}
        onClick={() => handleLogin('Google')}
      >
        <Mail className="mr-2" />
        <span>Continue with Google</span>
      </button>
      
      <button
        className="button is-medium social-button"
        style={{ backgroundColor: '#4267B2', color: 'white' }}
        onClick={() => handleLogin('Facebook')}
      >
        <Facebook className="mr-2" />
        <span>Continue with Facebook</span>
      </button>
      
      <button
        className="button is-medium social-button"
        style={{ backgroundColor: '#E1306C', color: 'white' }}
        onClick={() => handleLogin('Instagram')}
      >
        <Instagram className="mr-2" />
        <span>Continue with Instagram</span>
      </button>
    </div>
  );
};

export default SocialLogin;