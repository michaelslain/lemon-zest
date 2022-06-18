import React from 'react'
import NavProps from './Nav.types'
import TabPropTypes from '../Tab/Tab.types'
import styles from './Nav.module.css'
import { Tab } from '../Tab'

export default function Nav(props: NavProps) {
    const type = props.type ?? 'up'

    const classes = [styles.container, props.className, styles[type]].join(' ')

    return (
        <div className={classes} style={props.style}>
            {props.before}
            <div className={styles.tabContainer}>
                {(props.tabs ?? []).map((tab: TabPropTypes, i: number) => (
                    <Tab {...tab} key={i} navType={type} />
                ))}
            </div>
            {props.after}
        </div>
    )
}
