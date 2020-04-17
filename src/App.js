import './scss/app.scss'
import Header from './views/Header'
import User from './views/User'
import http from 'http'

const App = () => {
    document.getElementById('header').innerHTML = Header
    
    for (let users = 0; users < 25; users++) {
        http.get('https://randomuser.me/api/', (response) => {
            let data = []
            response.on('data', (chunck) => {
                data.push(chunck)
            })
            response.on('end', () => {
                data = JSON.parse(data).results[0]
                document.getElementById('content').innerHTML += User(data)
            })
        })
    }
}

App()