export default {
  App: {
    textAlign: 'center'
  },

  AppLogo: {
    height: '40vmin',
    pointerEvents: 'none',
  },

  AppHeader: {
    backgroundColor: props => props.mode === 'light' ?  'gray' : 'black',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },

  AppLink: {
    color: '#61dafb'
  },

  '@keyframes AppLogoSpin': {
    from: {
      transform: 'rotate(0deg)'
    },

    to: {
      transform: 'rotate(360deg)'
    }
  },

  '@media (prefers-reduced-motion: no-preference)': {
    AppLogo: {
      animationName: '$AppLogoSpin',
      animationDuration: '20s',
      animationIterationCount: 'infinite',
      animationDirection: 'linear'
    }
  }
}
