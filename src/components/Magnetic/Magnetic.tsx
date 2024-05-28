"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

interface MagneticProps {
    children: JSX.Element
}
export default function Magnetic({children} : MagneticProps) {
    const magnetic = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

    useEffect( () => {
        console.log(children)
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        magnetic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/1.5)
            const y = clientY - (top + height/1.5)
            xTo(x * 0.55);
            yTo(y * 0.55)
        })
        magnetic.current.addEventListener("mouseleave", (e) => {
            xTo(0);
            yTo(0)
        })
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}
