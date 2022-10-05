import style from '../styles/Showcase.module.css'
import Image from 'next/image'

function Showcase(props) {
    return(
        <section className={style.showcaseSection}>
            <div className={style.showcaseImage}>
                <Image 
                    src={'/images/siteLogo.png'}
                    alt='Website logo.'
                    width={100}
                    height={100}
                    />
            </div>
            <div className={style.titles}>
                {props.title.split('\n').map(word =>
                    <h1 className={style.title}>{word}</h1>
                    )}
            </div>
        </section>
    )
}

Showcase.defaultProps = {
    title: "Oops! Title Missing!"
}

export default Showcase