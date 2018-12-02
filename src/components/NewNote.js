import React from 'react';
class NewNote extends React.Component{
    constructor(props){
        super(props)
        this.handleDetail = this.handleDetail.bind(this)
        this.handleSummary = this.handleSummary.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            summary:'',
            detail:'',
            created:null,
            active:true
        }
    }
    handleSummary(evt) {
        this.setState({summary:
            evt.target.value
        })
    }
    handleDetail(evt) {
        this.setState({detail:
            evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault()
        console.log("Submitted!");
        this.props.handleSubmit({...this.state, ...{created: new Date()}});
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Name:
                    <input type="text"value={this.state.summary} onChange={this.handleSummary}  />
                    <textarea value={this.state.detail} onChange={this.handleDetail} />

                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default NewNote