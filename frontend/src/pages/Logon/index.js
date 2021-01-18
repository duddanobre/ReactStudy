import React from 'react';
import {Link} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';
import './style.css';
import '../../global.css';
import heroesIMG from '../../assets/heroes.png';
import logoIMG from '../../assets/logo.svg';

export default function Login(){
    return(
       <div className="logon-container">
           <section className="form">
                <img src={logoIMG} alt="Be the Hero" />

            <form>
                <h1>Faça seu Login</h1>

                <input placeholder="Seu ID"></input>
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                    <FiLogIn size={16} color="#E02041"/>
                    Não tenho Cadastro
                </Link>
            </form>
           </section>

           <img src={heroesIMG} alt="Heroes"/>
       </div>
    );
}