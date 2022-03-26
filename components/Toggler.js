import React from 'react'
import { func, string } from 'prop-types';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const Toggle = ({theme,  toggleTheme }) => {
    return (
      <button onClick={toggleTheme} className="absolute right-0 py-4 px-6 text-black dark:text-white"
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
