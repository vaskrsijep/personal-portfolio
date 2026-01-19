"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

interface MagneticProps {
    children: JSX.Element
}
export default function Magnetic({children} : MagneticProps) {
    const magnetic = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);

    useEffect( () => {
        const currentElement = magnetic.current;
        if (!currentElement) return;

        const xTo = gsap.quickTo(currentElement, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(currentElement, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = currentElement.getBoundingClientRect();
            const x = clientX - (left + width/1.5)
            const y = clientY - (top + height/1.5)
            xTo(x * 0.55);
            yTo(y * 0.55)
        }

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0)
        }

        currentElement.addEventListener("mousemove", handleMouseMove)
        currentElement.addEventListener("mouseleave", handleMouseLeave)

        return () => {
            currentElement.removeEventListener("mousemove", handleMouseMove);
            currentElement.removeEventListener("mouseleave", handleMouseLeave);
        }
    }, [children])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}
