import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '560px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  
};

const Car = () => (
  <Carousel autoplay>
    <div>
    <img style={contentStyle} src="https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/Grey%20Minimalist%20Get%20Clothes%20Facebook%20Ad%20%20(1).png?alt=media&token=b5bcfd8f-a5da-4053-b993-88f9a0afae1b" alt="" />

    </div>
    <div>

    <img src='https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/Brown%20%26%20White%20Modern%20Simple%20Minimalist%20Furniture%20Interior%20Products%20Presentation.png?alt=media&token=eaf04d1a-1e12-49b1-b5d2-392d9034d2a9'/>

    </div>
    <div>
    <img style={contentStyle} src="https://firebasestorage.googleapis.com/v0/b/my-1st-projects-6730c.appspot.com/o/Green%20Nature%20Elegant%20Skincare%20Banner.png?alt=media&token=ae94d338-cdba-430d-8e98-9ac1648788ba" alt="" />

    </div>
    
  </Carousel>
);

export default Car;