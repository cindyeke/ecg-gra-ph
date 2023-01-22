const layoutStyles = {
    imgWrapper: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        zIndex: '-100',
        opacity: 1,
        transition: 'opacity 2s ease',
    },
    overlay: {
        width: '100%',
        height: '100%',
        background: 'rgba(243, 243, 243, 0.8)',
        position: 'absolute',
    },
    main: {
        height: '77%',
        overflow: 'scroll',
    },
    disableImageWrapper: {
        transition: 'opacity 1s ease',
        opacity: 0,
    },
    homeIcon: {
        color: 'red',
        textColor: 'red',
    },
}

export default layoutStyles
