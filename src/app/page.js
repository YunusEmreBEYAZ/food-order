
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <HomeMenu />
    <section className="text-center my-16">
        <SectionHeaders subHeader={'Our Story'} mainHeader={'About'} />
        <div className="text-gray-600 mx-auto my-6 flex flex-col gap-4">
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
          lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>  
        </div>
        
      </section>  
      <section className="text-center my-4">
        <SectionHeaders subHeader={'Any question?'} mainHeader= {'Contact Us'} />
        <div className="my-4">
        <a className="text-4xl mt-4 my-4" href="+31613131313">+31 6 13 13 13 13</a>
        </div>
      </section>
      <footer className="text-center my-6 border-t text-gray-700 p-4 text-sm">
        <p>&copy; 2024 Pizza Place</p>
      </footer>   
    
    
    </>
  );
}
