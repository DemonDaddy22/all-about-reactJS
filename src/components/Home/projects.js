import todosDarkImage from '../../images/todos_dark.jpg';
import todosLightImage from '../../images/todos_light.jpg';
import pricingDarkImage from '../../images/pricing_dark.jpg';
import pricingLightImage from '../../images/pricing_light.jpg';
import { themed } from '../../utils/theme';

export const projects = [
    { sequence: '1', title: 'Todos Manager', image: themed(todosLightImage, todosDarkImage), projectPath: '/#/todos', githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/Todos' },
    { sequence: '2', title: 'Pricing Cards', image: themed(pricingLightImage, pricingDarkImage), projectPath: '/#/pricing-cards', githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/PricingCards' },
];