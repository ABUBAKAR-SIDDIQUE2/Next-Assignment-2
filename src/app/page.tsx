import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import { Fragment } from "react";

function Home(){
  return(
    <Fragment>
      <Header/>
      <Hero/>
      <Footer/>
    </Fragment>
  )
}

export default Home;