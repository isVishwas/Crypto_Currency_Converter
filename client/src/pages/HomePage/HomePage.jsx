import React from "react";
import Background from "../../components/Background/Background";
import Header from "../../components/Header/Header";
import Hero from "../../components/Crypto/Crypto";
import CoinsTable from "../../components/Coins/Table/CoinsTable";
import Search from "../../components/Coins/Search/Search";

const HomePage = () => {
  return (
    <Background>
      <Header></Header>
      <Hero></Hero>
      <Search></Search>
      <CoinsTable></CoinsTable>
    </Background>
  );
};

export default HomePage;
