import React from 'react';
import logo from './logo.svg';
import styles from './AppStyles';
import jss from 'jss'
import preset from 'jss-preset-default'
jss.setup(preset())

const sheet = jss.createStyleSheet(styles);
sheet.attach();

function App() {
  const { classes } = sheet;

  console.log(classes)

  return (
    <div className={classes.App}>
      <header className={classes.AppHeader}>
        <img src={logo} className={classes.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={classes.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
