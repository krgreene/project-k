import '../App.css'

export default function Mouse2() {

    const handleClick = (event) => {
        console.log('Clicked', event)
        if (event.type === 'contextmenu') {
            event.preventDefault()
        }
        if (event.target.className === 'clickable') {
            event.target.className = 'clicked'
        }
    }

    return(
        <div>
            <h1>Mouse Skills 2</h1>
            <div>
                <h3>Click the red blocks</h3>
                <table className={'small'} onClick={handleClick}>
                    <tbody>
                        <tr><td className={'clickable'}></td><td></td><td className={'clickable'}></td><td></td><td className={'clickable'}></td></tr>
                        <tr></tr>
                        <tr><td className={'clickable'}></td><td></td><td className={'clickable'}></td><td></td><td className={'clickable'}></td></tr>
                        <tr></tr>
                        <tr><td className={'clickable'}></td><td></td><td className={'clickable'}></td><td></td><td className={'clickable'}></td></tr>
                    </tbody>
                </table>
            </div>
            <br /><br />
            <div>
                <h3>Right-click the red blocks</h3>
                <table className={'small'} onContextMenu={handleClick}>
                    <tbody>
                        <tr><td className={'clickable'}></td><td></td><td className={'clickable'}></td><td></td><td className={'clickable'}></td></tr>
                        <tr></tr>
                        <tr><td className={'clickable'}></td><td></td><td className={'clickable'}></td><td></td><td className={'clickable'}></td></tr>
                        <tr></tr>
                        <tr><td className={'clickable'}></td><td></td><td className={'clickable'}></td><td></td><td className={'clickable'}></td></tr>
                    </tbody>
                </table>
            </div>
            <br /><br />
            <div>
                <h3>Double-click the red blocks</h3>
                <table className={'small'} onDoubleClick={handleClick}>
                    <tbody>
                        <tr><td className={'clickable'}></td><td></td><td className={'clickable'}></td><td></td><td className={'clickable'}></td></tr>
                        <tr></tr>
                        <tr><td className={'clickable'}></td><td></td><td className={'clickable'}></td><td></td><td className={'clickable'}></td></tr>
                        <tr></tr>
                        <tr><td className={'clickable'}></td><td></td><td className={'clickable'}></td><td></td><td className={'clickable'}></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}