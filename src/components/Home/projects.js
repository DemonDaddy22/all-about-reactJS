import todosDarkImage from '../../images/todos_dark.jpg';
import todosLightImage from '../../images/todos_light.jpg';
import pricingDarkImage from '../../images/pricing_dark.jpg';
import pricingLightImage from '../../images/pricing_light.jpg';
import calculatorDarkImage from '../../images/calculator_dark.jpg';
import calculatorLightImage from '../../images/calculator_light.jpg';
import { BASE_URL } from '../../resources/constants';

export const projects = [
    { sequence: '1', title: 'Todos Manager', imageLight: todosLightImage, imageDark: todosDarkImage, projectPath: `${BASE_URL}/#/todos`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/Todos' },
    { sequence: '2', title: 'Pricing Cards', imageLight: pricingLightImage, imageDark: pricingDarkImage, projectPath: `${BASE_URL}/#/pricing-cards`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/PricingCards' },
    { sequence: '3', title: 'Calculator', imageLight: calculatorLightImage, imageDark: calculatorDarkImage, projectPath: `${BASE_URL}/#/calculator`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/Calculator' },
];