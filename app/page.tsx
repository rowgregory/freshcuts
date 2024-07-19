import About from './components/home/About';
import Banner from './components/home/Banner';
import ProjectGalleries from './components/home/ProjectGalleries';
import Services from './components/home/Services';
import WhyChooseUs from './components/home/WhyChooseUs';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Banner />
      <Services />
      <ProjectGalleries />
      <About />
      <WhyChooseUs />
    </main>
  );
}

export default Home

