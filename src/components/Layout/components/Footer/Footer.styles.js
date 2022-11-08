import { keyframes } from '@mui/system'

// const marquee = keyframes`
//     0 %  { transform: translate(0, 0) },
//     ...
//     100% { transform: translate(-100%, 0) }
// `

const marquee = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-100%, 0);
  }
`

const footerStyles = {
    root: {
        height: '5vh',
        width: '100%',
        bgcolor: 'background.secondary',
        position: 'absolute',
        bottom: 0,
        color: 'text.accent2',
        padding: '0 1.2rem',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 300,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    text: {
        display: 'inline-block',
        animation: `${marquee} 10s linear infinite`,
    },
}

export default footerStyles
