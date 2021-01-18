import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import '../Register/style.css';

import logoIMG from '../../../assets/logo.svg';

export default function Register(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoIMG} alt="Be the Hero"></img>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma. </p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Não tenho Cadastro
                    </Link>
                </section>

                <form>
                    <input placeholder="Digite o nome da ONG" />
                    <input type="email" placeholder="Digite seu email" />
                    <input placeholder="whatsapp" />

                    <div className="input-group">
                        <input placeholder="cidade" />
                        <input placeholder="UF" style={{width : 80}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}