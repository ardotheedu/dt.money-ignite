import Modal from 'react-modal'

import {Header} from './Components/Header'
import {NewTransactionModal} from './Components/NewTransactionModal'
import {Dashboard} from './Components/Dashboard'
import {GlobalStyle} from './styles/global'
import { useState } from 'react'

Modal.setAppElement('#root')
export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

