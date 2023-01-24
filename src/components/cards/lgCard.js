import styles from './card.module.css';
import Socials from '../socials';
import { Link } from 'react-router-dom';

const LgCard = ( props ) => {

    return (
        <div className={ styles.lgProjectCard }>

            <Link to='/projects' className={ styles.x }><img src='/images/icons/svg/X.svg' alt=''/></Link>

            <div className={ styles.rowToCol }>
                <div className={ styles.lgCardInfo }>
                    <h2>{props.id}</h2>
                    <a className={ styles.button } href={props.demo}>
                        <img src='/images/icons/svg/Demo.svg' alt='' rel="noopener noreferrer"/>
                        Demo
                    </a>
                    <a className={ styles.button } href={props.repo}>
                        <img src='/images/icons/svg/Repo.svg' alt='' rel="noopener noreferrer"/>
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
                <p>{props.description}</p>
            </div>

            <Socials />

        </div>
    )
}

export default LgCard;