import Modal from 'react-modal'
import { useState } from 'react'

import { TransactionsProvider } from './hooks/useTransactions'

import {Header} from './Components/Header'
import {NewTransactionModal} from './Components/NewTransactionModal'
import {Dashboard} from './Components/Dashboard'

import {GlobalStyle} from './styles/global'

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

