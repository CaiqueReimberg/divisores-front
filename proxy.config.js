// Proxy para redirecionar requisição e evitar erro de CORS
const proxy = [
  {
    context: '/calculator-api',
    target: 'http://localhost:3020',
    pathRewrite: {'^/calculator-api' : ''}
  }
];
module.exports = proxy;
