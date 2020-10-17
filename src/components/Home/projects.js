import todosDarkImage from '../../images/todos_dark.jpg';
import todosLightImage from '../../images/todos_light.jpg';
import pricingDarkImage from '../../images/pricing_dark.jpg';
import pricingLightImage from '../../images/pricing_light.jpg';
import calculatorDarkImage from '../../images/calculator_dark.jpg';
import calculatorLightImage from '../../images/calculator_light.jpg';
import pickerDarkImage from '../../images/picker_dark.jpg';
import pickerLightImage from '../../images/picker_light.jpg';
import profileViewerDarkImage from '../../images/profile_viewer_dark.jpg';
import profileViewerLightImage from '../../images/profile_viewer_light.jpg';
import gameDarkImage from '../../images/game_dark.jpg';
import gameLightImage from '../../images/game_light.jpg';
import passwordDarkImage from '../../images/password_dark.jpg';
import passwordLightImage from '../../images/password_light.jpg';
import jokesDarkImage from '../../images/jokes_dark.jpg';
import jokesLightImage from '../../images/jokes_light.jpg';
import { BASE_URL } from '../../resources/constants';

export const projects = [
    { sequence: '1', title: 'Todos Manager', imageLight: todosLightImage, imageDark: todosDarkImage, projectPath: `${BASE_URL}/#/todos`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/Todos' },
    { sequence: '2', title: 'Pricing Cards', imageLight: pricingLightImage, imageDark: pricingDarkImage, projectPath: `${BASE_URL}/#/pricing-cards`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/PricingCards' },
    { sequence: '3', title: 'Calculator', imageLight: calculatorLightImage, imageDark: calculatorDarkImage, projectPath: `${BASE_URL}/#/calculator`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/Calculator' },
    { sequence: '4', title: 'Color Picker', imageLight: pickerLightImage, imageDark: pickerDarkImage, projectPath: `${BASE_URL}/#/color-picker`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/ColorPicker' },
    { sequence: '5', title: 'GitHub Profile Viewer', imageLight: profileViewerLightImage, imageDark: profileViewerDarkImage, projectPath: `${BASE_URL}/#/github-profile-viewer`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/GitHubProfileViewer' },
    { sequence: '6', title: 'Stone-Paper-Scissor', imageLight: gameLightImage, imageDark: gameDarkImage, projectPath: `${BASE_URL}/#/stone-paper-scissor`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/StonePaperScissor' },
    { sequence: '7', title: 'Password-Generator', imageLight: passwordLightImage, imageDark: passwordDarkImage, projectPath: `${BASE_URL}/#/password-generator`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/PasswordGenerator' },
    { sequence: '8', title: 'Random Jokes', imageLight: jokesLightImage, imageDark: jokesDarkImage, projectPath: `${BASE_URL}/#/random-jokes`, githubLink: 'https://github.com/DemonDaddy22/all-about-reactJS/tree/master/src/components/RandomJokes' },
];