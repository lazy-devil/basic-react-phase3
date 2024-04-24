import home from '../../assets/images/home.svg'

export default function Home() {
    return (
        <div className='container'>
            <h2 className='title'>หน้าแรกของเว็บไซต์</h2>
            <img src={home} alt='Home' />
        </div>
    )
}