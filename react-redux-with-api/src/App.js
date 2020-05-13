import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Header />
            </header>
        </div>
    );
}

export default App;

// curl -X GET --header 'Accept: application/json' --header "authorization: Bearer <API token>" 'https://api.clashofclans.com/v1/players/%23LJP8LRVU'
// axios({
//     url: 'https://api.clashofclans.com/v1/players/%23LJP8LRVU',
//     method: 'get',
//     headers: {
//         Accept: 'application/json',
//         authorization: `Bearer ${token}`,
//     },
// })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQwMjg2ODZmLTc4ODgtNDkzYi1iYmRmLTIyMDM1ZTFmNmMxMyIsImlhdCI6MTU4OTM4NzIzOCwic3ViIjoiZGV2ZWxvcGVyLzJhYTRkOWFhLTUyNzUtMzkwMy0wZWJmLTIyMjg0NjJkYjEzNSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ3LjIxNy4xOTcuMzYiXSwidHlwZSI6ImNsaWVudCJ9XX0.ypuAzpWR4luEqJf5qsQ214LSh2ZVE0125eI6KFLVv1HSYIaV_T654nWiPG1F-G-A4s-A_YTtBhDAqwn0m68sww';
