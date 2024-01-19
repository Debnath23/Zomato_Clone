import React from "react";
import Navbar from "../components/Main/Navbar";
import Header from "../components/Main/Header";
import Main from "../components/Main/Main";
import Footer from "../components/Main/Footer";

function Home() {
  return (
    <>
      <div className="bg-bgImage bg-no-repeat bg-cover bg-center bg-local h-screen bg-h-[400px] bg-w-[412px] md:{bg-bgImage bg-no-repeat bg-cover bg-center bg-fixed  w-full h-[710px]} ">
        <Navbar />
        <Header />
      </div>
      
      <Main />
      <Footer />
    </>
  );
}

export default Home;
