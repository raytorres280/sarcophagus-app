import React from 'react'
import { STATUSES } from '../../../constants'
import useCollapse from '../../customHooks/useCollapse'
import { useResurrectionTimer } from '../../customHooks/useTimers'
import SarcophagusCollapsed from './SarcophagusCollapsed'
import SarcophagusExpanded from './SarcophagusExpanded'

const SarcophagusContainer = ({ sarcophagus, currentStatus, setError, setCurrentStatus, error, archaeologist , refresh}) => {
    const { timer, color, timers, refreshTimers } = useResurrectionTimer(sarcophagus.resurrectionTime, sarcophagus.resurrectionWindow, currentStatus, setCurrentStatus)
    const { collapsed, toggle } = useCollapse(true, true)
    const isExpanded = () => !!error ? true : currentStatus === STATUSES.WINDOW_CLOSED ? true : currentStatus === STATUSES.SARCOPHAGUS_AWAIT_SIGN ? true : currentStatus === STATUSES.ACTIVE ? true : false
    return (
        <div className="border border-gray-500 px-4 my-8 pt-3 ">

            <SarcophagusCollapsed sarcophagus={sarcophagus} currentStatus={currentStatus} error={currentStatus === STATUSES.TRANSACTION_MINING_IN_PROGRESS ? false : error} 
                expandedOption={isExpanded()}
                toggle={toggle} collapsed={collapsed} timer={timer} color={color} timers={timers}/>
            {!collapsed && (
                <SarcophagusExpanded sarcophagus={sarcophagus} currentStatus={currentStatus} refresh={refresh} setCurrentStatus={setCurrentStatus} error={error} toggle={toggle} archaeologist={archaeologist} setError={setError} timer={timer} color={color} timers={timers} refreshTimers={refreshTimers}/>
                )}
        </div>
    )
}

export default SarcophagusContainer