
export const BoxAnimationLeft = {

    hidden: {
        
        x: -500,
        opacity: 0,
        scale: 0.9,
    },

    show: {

        x: 0,
        opacity:1,
        scale: 1,
        transition: {duration: 1, ease: "easeOut"},
    }
}

export const BoxAnimationRight = {

    hidden: {
        
        x: 500,
        opacity: 0,
        scale: 0.9,
    },

    show: {

        x: 0,
        opacity:1,
        scale: 1,
        transition: {duration: 1, ease: "easeOut"},
    }
}

export const BoxAnimationUp = {

    hidden: {
        
        y: 600,
        opacity: 0,
        scale: 0.9,
    },

    show: {

        y: 0,
        opacity:1,
        scale: 1,
        transition: {duration: 1, ease: "easeOut"},
    }
}

export const BoxAnimationDown = {

    hidden: {
        
        y: -500,
        opacity: 0,
        scale: 0.9,
    },

    show: {

        y: 0,
        opacity:1,
        scale: 1,
        transition: {duration: 1, ease: "easeOut"},
    }
}