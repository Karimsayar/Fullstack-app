// TransferModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TransferModal = ({ show, onHide, accounts, onTransferMoney }) => {
  const [transferAmount, setTransferAmount] = useState(0);
  const [sourceAccount, setSourceAccount] = useState('');
  const [targetAccount, setTargetAccount] = useState('');

  const handleTransferMoney = () => {
    const sourceAcc = accounts.find((acc) => acc.name === sourceAccount);
    const targetAcc = accounts.find((acc) => acc.name === targetAccount);

    if (sourceAcc && targetAcc && transferAmount > 0 && sourceAcc.balance >= transferAmount) {
      // Perform the money transfer
      sourceAcc.balance -= transferAmount;
      targetAcc.balance += transferAmount;
      // setAccounts([...accounts]);
      onHide();
      // setShowTransferModal(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Transférer de l'argent entre comptes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
                <Form.Label>Montant à transférer (€)</Form.Label>
                <Form.Control
                  type="number"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(parseFloat(e.target.value))}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Compte source</Form.Label>
                <Form.Select onChange={(e) => setSourceAccount(e.target.value)}>
                  <option value="">Choisir un compte</option>
                  {accounts.map((account) => (
                    <option key={account.id} value={account.name}>
                      {account.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Compte cible</Form.Label>
                <Form.Select onChange={(e) => setTargetAccount(e.target.value)}>
                  <option value="">Choisir un compte</option>
                  {accounts.map((account) => (
                    <option key={account.id} value={account.name}>
                      {account.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
          {/* ... (same as before) */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Annuler
        </Button>
        <Button variant="primary" onClick={handleTransferMoney}>
          Transférer
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const TransferMoney = ({accounts}) => {
  const [showTransferModal, setShowTransferModal] = useState(false)

  return (
    <div>
      <Button variant="primary" className="mt-3" onClick={() => setShowTransferModal(true)}>
        Transférer de l'argent
      </Button>
      {showTransferModal && <TransferModal accounts={accounts} show={showTransferModal} onHide={() => setShowTransferModal(false)}/>}
    </div>
  )
}

export default TransferMoney;
