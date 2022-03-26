import React from 'react'
import { func, string } from 'prop-types';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <button onClick={toggleTheme} className="absolute right-0 py-2 px-3 lg:py-4 lg:px-6 text-black dark:text-white border-y-4 border-transparent
      hover:border-y-4 hover:border-lt-purple dark:hover:border-dk-blue-light
      focus:outline focus:outline-2 focus:outline-offset-4 lg:focus:outline-offset-8	focus:outline-black dark:focus:outline-white"
        aria-label={ (theme === "light") ? "Switch to dark mode" : "Switch to light mode"}
        title={ (theme === "light") ? "Switch to dark mode" : "Switch to light mode"}
      >
        { (theme === "light") ? <Brightness2Icon aria-hidden="true" /> : <WbSunnyIcon aria-hidden="true" />}
      </button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;
