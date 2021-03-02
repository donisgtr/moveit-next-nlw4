import { Profile } from "../components/Profile";
import { ExperienceBar } from '../components/ExperienceBar';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import styles from "../styles/pages/Home.module.css";
import React from "react";

import Head from 'next/head';

export default function Home() {
  return (
     /* isso aqui e um compomente, um compomente é uma função e só isso. que  retorna um html 
  e um compomente que cria conteudo em html, isolar forma de codigo e reaproveitar codigos */
    <div className={styles.container}>
      <head>
        <title> Inicio | move.it </title>
      </head>
      <ExperienceBar />
      <section>
        <div>
         <Profile />
         <CompletedChallenges /> 
         <Countdown />
        </div>
        <div>

        </div>
      </section>
    </div>
  /* propriedades e como cor de cada botão */
  /* childen e toda vez que a gente passa algo dentro de um compomente, tudo que esta dentro de um compomente e um children. */

  /* conceito de estado dentro do react:  */

  /* toda vez que uso {} chaves dentro do html siginifica que eu vou usar  um codigo javascript dentro do html  */
  );
}



