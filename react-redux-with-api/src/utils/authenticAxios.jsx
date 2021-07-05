import axios from 'axios';

export const authenticAxios = () => {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.create({
        headers: {
            Authorization: token,
        },
        baseURL: 'https://api.clashofclans.com/v1',
    });
};
// /players/%23LJP8LRVU

//  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQwMjg2ODZmLTc4ODgtNDkzYi1iYmRmLTIyMDM1ZTFmNmMxMyIsImlhdCI6MTU4OTM4NzIzOCwic3ViIjoiZGV2ZWxvcGVyLzJhYTRkOWFhLTUyNzUtMzkwMy0wZWJmLTIyMjg0NjJkYjEzNSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjQ3LjIxNy4xOTcuMzYiXSwidHlwZSI6ImNsaWVudCJ9XX0.ypuAzpWR4luEqJf5qsQ214LSh2ZVE0125eI6KFLVv1HSYIaV_T654nWiPG1F-G-A4s-A_YTtBhDAqwn0m68sww

//  https://api.clashofclans.com/v1/players/%23LJP8LRVU
