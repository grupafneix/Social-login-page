import React from 'react';
import SocialLogin from './components/SocialLogin';
import { User } from 'lucide-react';

function App() {
  return (
    <div>
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <div className="box login-container">
                  <div className="has-text-centered mb-6">
                    <div className="is-flex is-justify-content-center mb-4">
                      <span className="icon is-large">
                        <User size={48} />
                      </span>
                    </div>
                    <h3 className="title is-3">Welcome Back</h3>
                    <p className="subtitle is-6">Sign in to continue</p>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-medium" type="email" placeholder="Email" />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input is-medium" type="password" placeholder="Password" />
                    </div>
                  </div>

                  <div className="field">
                    <label className="checkbox">
                      <input type="checkbox" />
                      <span className="ml-2">Remember me</span>
                    </label>
                  </div>

                  <div className="field">
                    <button className="button is-primary is-fullwidth is-medium">
                      Sign In
                    </button>
                  </div>

                  <div className="has-text-centered my-4">
                    <p className="is-size-7">Forgot your password?</p>
                  </div>

                  <div className="is-divider" data-content="OR"></div>

                  <SocialLogin />

                  <div className="has-text-centered mt-4">
                    <p className="is-size-7">
                      Don't have an account? <a href="#">Sign up</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;