import { gsap } from "gsap"
import {} from './video'
import {} from './navMenu'

gsap.timeline()
    .to('.loading .hider', { top: 0, duration: .8, ease: "Power4.easeOut", delay: .5 })
    .to('.loading span', { display: "none", duration: 0})
    .to('.loading', { height: 0, duration: .8, ease: "Power4.easeOut"}, '<-0.3')


