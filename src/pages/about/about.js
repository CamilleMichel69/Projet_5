import React from 'react';
import Banner from '../../components/banner_about/banner';
import Collapse from '../../components/collapse/collapse';
import datas from '../../datas/collapse.json'; 

function About() {
  return (
    <main>
      <Banner />
      {datas.map((data) => (
        <Collapse key={data.id} title={data.title} content={data.content} />
      ))}
    </main>
  );
}

export default About;
