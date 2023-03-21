import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Layout from '@theme/Layout';



const productList = [
  {
    type: 'supCollector',
    Svg: require('@site/static/img/collector.svg').default,
    desc: (
      <>
        Technical documentation places most of its focus on the content.
      </>
    ),
    link: "Getting Started/System Requirements sc",
  },
  {
    type: 'supETL',
    Svg: require('@site/static/img/etl.svg').default,
    desc: (
      <>
        Think like a user, write like an expert.
      </>
    ),
    link: "Getting Started/System Requirements se",
  },
  {
    type: 'supDAM',
    Svg: require('@site/static/img/dam.svg').default,
    desc: (
      <>
        Always excited and enthusiastic to make technical stuff easy for everyone.
      </>
    ),
    link: "Getting Started/System Requirements sd",
  },
  {
    type: 'supEdge',
    Svg: require('@site/static/img/edge.svg').default,
    desc: (
      <>
        Always excited and enthusiastic to make technical stuff easy for everyone.
      </>
    ),
    link: "Getting Started/System Requirements sedge",
  },
  {
    type: 'supBD',
    Svg: require('@site/static/img/bd.svg').default,
    desc: (
      <>
        Always excited and enthusiastic to make technical stuff easy for everyone.
      </>
    ),
    link: "Getting Started/System Requirements sb",
  },
  {
    type: 'supLink',
    Svg: require('@site/static/img/link.svg').default,
    desc: (
      <>
        Always excited and enthusiastic to make technical stuff easy for everyone.
      </>
    ),
    link: "Getting Started/System Requirements sl",
  },
];

const FeatureList = [
  {
    title: 'supOS Overview',
    Svg: require('@site/static/img/supOS.svg').default,
    description: (
      <>
        Technical documentation places most of its focus on the content.
      </>
      
    ),
    link: "intro",
  },
  {
    title: 'Video Demonstration',
    Svg: require('@site/static/img/video.svg').default,
    description: (
      <>
        Technical documentation places most of its focus on the content.
      </>
      
    ),
    link: "Video/Dashboard Development Step by Step",
  },
  {
    title: 'API Reference',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
        Technical documentation places most of its focus on the content.
      </>
    ),
    link: "category/openapi",
  },
  
]; 



function Product({Svg, type, desc,link}) {
  return (
      <div className={clsx('col col--3')} >
        <a href={link} target="_self" style={{textDecoration:"none", color:"black"}}>
        <div><Svg className={styles.productSvg}/></div>
      <div className="text"  >
        <h3>{type}</h3>
        <p>{desc}</p>
      </div>
      </a>
      </div>
    
   
  );
}

function Feature({Svg, title, description, link}) {
  return (
      <div className={clsx('col col--4', styles.col)}>
        <a href={link} target="_self" style={{textDecoration:"none", color:"black"}}>
          <div className="text-center"  >
          <Svg className={styles.featureSvg}/>
      </div>
      <div className={styles.featureContent}>
        <h3>{title}</h3>
        <p>{description}</p>

      </div>
      </a>
      </div>
  );
} 
 

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx("container", styles.featureContainer)}>
        <div className={clsx('row', styles.featureDiv)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
      <div className="container" style={{padding:"4rem 0 2rem 0"}}>
        <div className="row"  >
          <h2>supOS Applications</h2>
        </div>
      </div>
      <div className="container" style={{padding:"2rem"}}>
        <div className="row"  >
          {productList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
          </div>
          </div>
      
    </section>
    
  );
}
