import './add-form-component.css'

export default function AddForm(props: { title: string, setTitle: any, saveTask: any, editId: string | null }) {
    const { title, setTitle, saveTask, editId } = props
    return (
        <>
            <h2>แบบฟอร์มจัดการงาน</h2>
            <form onSubmit={saveTask}>
                <div className='form-control'>
                    <input type="text" className="text-input" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <button type="submit" className="submit-btn">
                        {editId != null ? "อัพเดต" : "เพิ่ม"}
                    </button>
                </div>
            </form>
        </>
    );
}