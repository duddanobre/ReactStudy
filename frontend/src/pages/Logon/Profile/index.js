import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../Profile/style.css';
import logoIMG from '../../../assets/logo.svg';

export default function Profile(){
const ongName = localStorage.getItem('ongName');

    return(
        <div className="profile-container">
            <header>
                <img src={logoIMG} alt="Be the Hero"  />
                <span>Bem vinda, {ongName}!</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button" >
                    <FiPower size={18} color="E02041" />
                </button>
            </header>

            <h1>CASOS CADASTRADOS</h1>

            <ul>
                <li>
                    <strong>CASO</strong>
                    <p>Caso I</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repudiandae pariatur minima
                        vel laborum. Alias ab quo eius, et consequatur corrupti
                        nemo delectus dicta, odio, corporis inventore repudiandae eum exercitationem debitis!</p>
                    <strong>VALOR</strong>
                    <p>550,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="#E02041" />
                </button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso I</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repudiandae pariatur minima
                        vel laborum. Alias ab quo eius, et consequatur corrupti
                        nemo delectus dicta, odio, corporis inventore repudiandae eum exercitationem debitis!</p>
                    <strong>VALOR</strong>
                    <p>550,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="E02041" />
                </button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso I</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repudiandae pariatur minima
                        vel laborum. Alias ab quo eius, et consequatur corrupti
                        nemo delectus dicta, odio, corporis inventore repudiandae eum exercitationem debitis!</p>
                    <strong>VALOR</strong>
                    <p>550,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="E02041" />
                </button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso I</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repudiandae pariatur minima
                        vel laborum. Alias ab quo eius, et consequatur corrupti
                        nemo delectus dicta, odio, corporis inventore repudiandae eum exercitationem debitis!</p>
                    <strong>VALOR</strong>
                    <p>550,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="E02041" />
                </button>
                </li>
                <li>
                    <strong>CASO</strong>
                    <p>Caso I</p>
                    <strong>DESCRIÇÃO</strong>
                    <p>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repudiandae pariatur minima
                        vel laborum. Alias ab quo eius, et consequatur corrupti
                        nemo delectus dicta, odio, corporis inventore repudiandae eum exercitationem debitis!</p>
                    <strong>VALOR</strong>
                    <p>550,00</p>

                <button type="button">
                    <FiTrash2 size={20} color="E02041" />
                </button>
                </li>
            </ul>

        </div>
    );
}