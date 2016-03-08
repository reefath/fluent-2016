import React from 'react'

const WatchedReposPage = React.createClass({

    componentDidMount: function() {

       const repos = this.props.fetchSubscriptions()
    },
    render() {

        let content

        if (repos.length) {
            content = (
                <div>
                    {repos.map((repo) => {
                        return <div key={repo.id}>hi {repo.full_name}</div>
                    })}
                </div>
            )
        }

        return(
            <div>
                <h1> Watched Repos</h1>
                {content}
            </div>

        )
    }
})

export default WatchedReposPage