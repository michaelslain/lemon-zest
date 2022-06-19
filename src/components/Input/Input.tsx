import React from 'react'
import InputProps from './Input.types'
import styles from './Input.module.css'

export default function InputProps(props: InputProps) {
    return <input type="text" className={styles.input} style={props.style} onChange={props.onChange ?? (() => {})} />
}
