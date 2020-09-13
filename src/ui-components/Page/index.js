import React from 'react';
import './styles.module.css';
import classes from './styles.module.css';
import { GREY_50 } from '../../resources/colors';
import Iconbutton from '../Button/Iconbutton';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import { getTheme, themes, setTheme } from '../../utils/theme';

export default class Page extends React.Component {

    state = {
        darkMode: false
    }

    componentDidMount = () => this.loadTheme();

    loadTheme = () => {
        const currTheme = getTheme();
        this.setState({ darkMode: currTheme === themes.LIGHT ? false : true},
            () => setTheme(currTheme));
    }

    handleThemeChange = () => this.setState({ darkMode: !this.state.darkMode },
        () => {
            setTheme(this.state.darkMode ? themes.DARK : themes.LIGHT);
            // pass this function as a prop whenever a component needs to be re-mounted on theme change to trigger themed function
            typeof this.props.shouldComponentUpdate === 'function' && this.props.shouldComponentUpdate(new Date().getTime());
            // window.location.reload();
        });

    render = () => <div className={classes.page}>
        <div className={classes.switchWrapper}>
            <Iconbutton iconColor={GREY_50} onClick={this.handleThemeChange} icon={this.state.darkMode ? <Brightness7RoundedIcon fontSize='large' /> : <Brightness4RoundedIcon fontSize='large' />}></Iconbutton>
        </div>
        {this.props.children}
    </div>
}