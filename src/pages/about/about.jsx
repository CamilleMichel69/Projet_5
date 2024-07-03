import Banner from '../../components/banner/banner';
import Collapse from '../../components/collapse/collapse';
import datas from '../../datas/collapse.json'; 

function About() {
  return (
    <main>
      <Banner type="about" />
      {datas.map((data) => (
        <Collapse key={data.id} title={data.title} content={data.content} />
      ))}
    </main>
  );
}

export default About;
