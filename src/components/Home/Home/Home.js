import React from 'react';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Logo></Logo>
             <ServiceCard></ServiceCard>
            <ClientFeedBack></ClientFeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;