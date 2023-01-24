import styles from './card.module.css';
import Modal from 'react-modal';
import React from 'react';
import { useState } from 'react';
import Socials from '../socials';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginTop: '20px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: 'none',
      backgroundColor: 'white',
      padding: '0',
      maxHeight: '85vh',
      overflowY: 'auto',
      overflowX: 'clip',
      borderRadius: '12px',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    },
};
Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = '#927c8596';

const Card = (props) => {

    const [ modalIsOpen, setIsOpen ] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }


    return (
        <div className={ styles.card }>
            <img className={ styles.lilImage } src={ props.image } alt=''/>
            <h3 className={ styles.title }><a onClick={openModal}>{ props.id }</a></h3>
            <p>{ props.minidesc }</p>

            {/* <button className='btn' onClick={openModal}><h3 style={{ color: "white", margin: "5px 10px 5px", fontSize: '16px' }}>see more</h3></button> */}

            <div className='fullContainer'>
                <Modal
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={ customStyles }
                    contentLabel="Example Modal"
                >
                    <div className={ styles.lgProjectCard }>

                        <div onClick={closeModal} className={ styles.x }><img src='/images/icons/svg/X.svg' alt=''/></div>

                        <div className={ styles.rowToCol }>
                            <div className={ styles.lgCardInfo }>
                                <h2>{props.id}</h2>
                                <a className={ styles.button } href={props.demo} target="_blank" rel="noopener noreferrer">
                                    <img src='/images/icons/svg/Demo.svg' alt=''/>
                                    Demo
                                </a>
                                <a className={ styles.button } href={props.repo} target="_blank" rel="noopener noreferrer">
                                    <img src='/images/icons/svg/Repo.svg' alt=''/>
                                    Repo
                                </a>
                            </ div>
                            <div>
                                <div className={ styles.image }>
                                    <img src={props.image} />
                                </div>
                            </div>
                        </div>

                        <div className='block'>
                            <h2>description:</h2>
                            <p>{ props.description }</p>
                        </div>

                        <Socials />

                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Card;