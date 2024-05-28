import React, { useRef, useEffect, useState } from 'react'
import styles from './style.module.scss'
import gsap from 'gsap'
import Magnetic from '../Magnetic/Magnetic'

type RoundedButtonProps = {
  children: React.ReactNode
  backgroundColor?: string
} & React.HTMLAttributes<HTMLDivElement>

const RoundedButton = ({ children, backgroundColor = '#9A3B3B', ...attributes }: RoundedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const circle = useRef<HTMLDivElement>(null)
  const timeline = useRef(gsap.timeline({ paused: true }))

  useEffect(() => {
    timeline.current
      .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: 'power3.in' }, 'enter')
      .to(circle.current, { top: '-150%', width: '125%', duration: 0.25 }, 'exit')
  }, [])

  const manageMouseEnter = () => {
    setIsHovered(true)
    timeline.current.tweenFromTo('enter', 'exit')
  }

  const manageMouseLeave = () => {
    const timeoutId = setTimeout(() => {
      setIsHovered(false)
      timeline.current.play()
    }, 200)

    return () => {
      clearTimeout(timeoutId)
    }
  }

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: 'hidden' }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div ref={circle} style={{ backgroundColor }  } className={styles.circle} />
      </div>
    </Magnetic>
  )
}

export default RoundedButton

