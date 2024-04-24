import notfound from '../../assets/images/notfound.svg'

export default function NotFound() {
    return (
        <div className='container'>
            <h2 className='title'>ไม่พบหน้าเว็บ (404 Page Not Found)</h2>
            <img src={notfound} alt='Not Found' />
        </div>
    )
}