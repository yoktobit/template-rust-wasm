import http from 'k6/http';

export const options = {
  vus: 10,
  iterations: 5000,
};

export default function () {
  http.get('http://localhost/acme-app');
}