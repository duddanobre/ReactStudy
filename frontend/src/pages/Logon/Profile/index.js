import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../Profile/style.css';
import logoIMG from '../../../assets/logo.svg';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoIMG} alt="Be the Hero"  />
                <span>Bem vinda, APAD!</span>

                <Link className="button" to="/incidentes/new">Cadastrar novo caso</Link>
                <button type="button" >
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

        </div>
    )
}