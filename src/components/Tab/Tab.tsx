import React from 'react'
import TabProps from './Tab.types'
import styles from './Tab.module.css'
import { Text } from '../Text'

export default function Tab(props: TabProps) {
    const classes: string = [styles.text, props.className, styles[props.navType ?? 'up']].join(' ')

    return (
        <a className={classes} href={props.href} target={props.target} onClick={props.onClick ?? (_ => {})}>
            <Text size="small" faint>
                {props.text}
            </Text>
        </a>
    )
}
