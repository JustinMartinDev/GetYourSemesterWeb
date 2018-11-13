import React from 'react';

const FormSignUp = () => {
    return (
        <form className="col s12 offset-s3">
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                    <input id="email" type="email" className="validate"/>
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <i className="material-icons prefix">lock</i>
                    <input id="password" type="password" className="validate"/>
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="row">
                <div className="col s6">
                    <p>
                        <label>
                            <input className="with-gap" name="group1" type="radio"/>
                            <span>Student</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input className="with-gap" name="group1" type="radio"/>
                            <span>Teacher</span>
                        </label>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col s5 offset-s2">
                    <button className="btn btn-large waves-effect waves-light" type="submit" name="action">S'inscrire
                        <i className="material-icons right">send</i>
                    </button>

                </div>
            </div>
        </form>
    );
};

export default FormSignUp;