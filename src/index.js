import mainComponent from './main_comp';
import headerComp from './header';
import navComp from './nav';
import content1 from './content-1';
import changeContent from './changeInBetween';

import './style.css';

// Create main structure
mainComponent.createElementTree();
// Create Static Header
headerComp.createHeader();
// Create Static Nav
navComp.createNav();
// Create Inital Content
content1.createContent();
// Listen and Restructure Content As Necessary
changeContent.bttnListen();
