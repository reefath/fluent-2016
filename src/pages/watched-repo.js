import React from 'react'
import {connect} from 'react-redux'
import {fetchSubscriptions} from '../action'

const WatchedReposPage = React.createClass({

    componentDidMount: function() {

        this.props.fetchSubscriptions()
    },
    render() {
        const {repos, loading} = this.props
        let content
        if(loading) {
            content = (
                <h3> fetching data...</h3>
                    )
        } else if (repos.length) {
            content = (
                <div>
                    {repos.map((repo) => {
                        return <div key={repo.id}>hi {repo.full_name}</div>
                    })}
                </div>
            )
        }

        return (
            <div>
                <h1>Watched Repos</h1>
                { content }
            </div>
        )

    }
})

const select = (state) => {
    return {
        repos: state.watchedRepos.data,
        loading: state.watchedRepos.loading
    }
}

const actionsToBind = {
    fetchSubscriptions
}


export default connect(select, actionsToBind)(WatchedReposPage)