import React from 'react';

import Directory from '../../components/directory/directory.component';
import ShowCase from "../../components/show-case/show-case.component";

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <ShowCase />
    <Directory />
  </div>
);

export default HomePage;
