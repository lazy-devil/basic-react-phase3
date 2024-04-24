import about from '../../assets/images/about.svg'

export default function About() {
    return (
        <div className='container'>
            <h2 className='title'>เกี่ยวกับเรา</h2>
            <img src={about} alt='About' />
        </div>
    )
}