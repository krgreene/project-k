import '../App.css'
import leftClick from '../graphics/left_click.gif'
import rightClick from '../graphics/right_click.gif'
import doubleClick from '../graphics/double_click.gif'

export default function Mouse() {

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
            <h1>Mouse Skills 1</h1>
            <div>
                <img src={leftClick} alt={'mouse animation'} width={175} height={175} />
                <h3>Click the red blocks</h3>
                <table onClick={handleClick}>
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
            <img src={rightClick} alt={'mouse animation'} width={175} height={175} />
                <h3>Right-click the red blocks</h3>
                <table onContextMenu={handleClick}>
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
            <img src={doubleClick} alt={'mouse animation'} width={300} height={195} />
                <h3>Double-click the red blocks</h3>
                <table onDoubleClick={handleClick}>
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