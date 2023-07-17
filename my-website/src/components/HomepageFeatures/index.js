import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Layout from '@theme/Layout';



const productList = [
  {
    type: 'X-Collector',
    Svg: require('@site/static/img/collector.svg').default,
    desc: (
      <>
        A versatile product capable of collecting diverse data types from edge devices, databases, and third-party systems.
      </>
    ),
    link: "Getting Started/System Requirements sc",
  },
  {
    type: 'X-ETL',
    Svg: require('@site/static/img/etl.svg').default,
    desc: (
      <>
        A flexible digital storage solution that securely stores and shares various types of data.
      </>
    ),
    link: "Getting Started/System Requirements se",
  },
  {
    type: 'X-DAM',
    Svg: require('@site/static/img/dam.svg').default,
    desc: (
      <>
        Efficiently organize and optimize your data assets with our comprehensive management solution.
      </>
    ),
    link: "Getting Started/System Requirements sd",
  },
  {
    type: 'X-Edge',
    Svg: require('@site/static/img/edge.svg').default,
    desc: (
      <>
        Unlock new insights from your data with our diverse collection of pre-built and custom algorithm integration.
      </>
    ),
    link: "Getting Started/System Requirements sedge",
  },
  {
    type: 'X-BD',
    Svg: require('@site/static/img/bd.svg').default,
    desc: (
      <>
        Seamlessly manage and process large volumes of data with our all-inclusive big data solution.
      </>
    ),
    link: "Getting Started/System Requirements sb",
  },
  {
    type: 'supLink',
    Svg: require('@site/static/img/link.svg').default,
    desc: (
      <>
       Efficiently manage your supOS platform on-the-go with our mobile app designed for seamless operation.
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
        Connects industrial devices to collect, analyze, and visualize data for improved efficiency.
      </>
      
    ),
    link: "intro",
  },
  {
    title: 'Video Demonstration',
    Svg: require('@site/static/img/video.svg').default,
    description: (
      <>
        A video tutorial series designed to guide you on product usage and best practices.
      </>
      
    ),
    link: "Video/Dashboard Development Step by Step",
  },
  {
    title: 'API Reference',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
        A comprehensive guide on how to use supOS' API with detailed instructions and examples.
      </>
    ),
    link: "/api",
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
      <div className="container" style={{marginTop:"10%"}}>
        <div className="row"  >
          <h2>supOS Applications</h2>
        </div>
      <div className="container">
        <div className={clsx('row')}>
          {productList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
          </div>
          </div>
          </div>
      
    </section>
    
  );
}
