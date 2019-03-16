

// ====================

// PORT
// =====================
process.env.PORT = process.env.PORT || 3000;


// ====================
// ENTORNO
// =====================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ====================
// TOKEN
// =====================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// ====================
// SEED
// =====================
process.env.SEED = process.env.SEED || 'seed_development';


// ====================
// database
// =====================
let urlDB;
urlDB = 'mongodb+srv://vafaster:M8qMljhEBOpUzrZo@cluster0-pyqmy.mongodb.net/cafe'

if(process.env.NODE_ENV === 'dev')
  urlDB = 'mongodb://localhost:27017/cafedb';
process.env.URLDB = urlDB;