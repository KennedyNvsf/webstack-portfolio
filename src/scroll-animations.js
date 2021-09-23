import {useInView} from "react-intersection-observer"//triggers the element when in view.
import {useAnimation} from "framer-motion";//this will make the functionality work with motion

//1.create the component
//2.then create a var for the useAnimation to give motion(framer-motion) animation functionalities
//3.then create a custom hook for the elements in view states
//4.then create the if statement: if the element is in view then give the motion.element the show property otherwise give the hidden property.


//1.
export const useScroll = () => {

    const controls = useAnimation();//2.

    const [element, view] = useInView({triggerOnce: true, threshold: 0.2});//3.

    //4.
    if(view){

        controls.start("show");

    }else{
        controls.start("hidden");
    }

    return [element, controls];

}