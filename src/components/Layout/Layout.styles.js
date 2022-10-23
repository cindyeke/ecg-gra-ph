const layoutStyles = {
    imgWrapper: {
        height: '95vh',
        width: '100%',
        position: 'absolute',
        zIndex: '-100',
        opacity: 1,
        transition: 'opacity 2s ease',
    },
    overlay: {
        width: '100%',
        height: '100%',
        background: 'rgba(243, 243, 243, 0.6)',
        position: 'absolute',
    },
    main: {
        height: '77vh',
        overflow: 'scroll',
    },
    disableImageWrapper: {
        transition: 'opacity 1s ease',
        opacity: 0,
    },
}

export default layoutStyles
