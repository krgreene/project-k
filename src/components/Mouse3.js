import '../App.css'
import ball from '../graphics/ball.png'
import field from '../graphics/field.jpg'

export default function Mouse3() {

    const handleDrag = (event) => {
        event.dataTransfer.setData("text", event.target.id)
    }

    const allowDrop = (event) => {
        event.preventDefault()
    }

    const handleDrop = (event) => {
        event.preventDefault();
        let data = event.dataTransfer.getData("text");
        event.target.appendChild(document.getElementById(data))
    }

    return(
        <div>
            <h1>Mouse Skills 3</h1>
            <div>
                <h3>Drag and drop the balls onto the playing field</h3>
                <table className={'balls'}>
                    <tbody>
                        <tr><td><img id={'draggable1'} src={ball} draggable={true} onDragStart={handleDrag} alt={'ball'} /></td><td></td><td><img id={'draggable2'} src={ball} draggable={true} onDragStart={handleDrag} alt={'ball'} /></td><td></td><td><img id={'draggable3'} src={ball} draggable={true} onDragStart={handleDrag} alt={'ball'} /></td></tr>
                    </tbody>
                </table>
                <div id={'field'} onDrop={handleDrop} onDragOver={allowDrop} ></div>
            </div>
            <h2>Selecting text</h2>
            <br />
            <h3>Double-click the word pizza to select it.</h3>
            <br />
            <h3>Select this sentence by dragging over the sentence.</h3>
            <br />
            <h3>Right-click the sentence which you selected to see the context menu.</h3>
        </div>
    )
}