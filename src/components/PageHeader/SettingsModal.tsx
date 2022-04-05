import React from 'react'
import { Modal } from '@drivenx/uikit-lib'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'
// import AudioSetting from './AudioSetting'

type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  return (
    <Modal title='Settings' onDismiss={onDismiss}>
      <SlippageToleranceSetting />
      <TransactionDeadlineSetting />
      {/* <AudioSetting translateString={translateString} /> */}
    </Modal>
  )
}

export default SettingsModal
