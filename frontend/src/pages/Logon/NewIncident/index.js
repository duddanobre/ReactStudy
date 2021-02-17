import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import '../../../global.css';
import '../NewIncident/style.css';
import logoIMG from '../../../assets/logo.svg';

import api from '../../../services/api';

export default function NewIncident(){
const history = useHistory();

const [titulo, setTitulo] = useState('');
const [descricao, setDescricao] = useState('');
const [valor, setValor] = useState('');

const ongId = localStorage.getItem('ongId');

async function handleNewIncident(e){
    e.preventDefault();

    const data = {
        titulo,
        descricao,
        valor,
    };

   try {
       await api.post('incidents', data, {
           headers: {
               Authorization : ongId,
           }
       });

       history.push('/profile');
   } catch (error) {
       alert('Erro ao cadastrar o caso, verifique os dados e tente novamente.')
   }
}

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoIMG} alt="Be the Hero"></img>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                       Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso" 
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição do caso" 
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                    />
                    <input 
                        placeholder="valor em reais" 
                        value={valor}
                        onChange={e => setValor(e.target.value)}
                    />


                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}