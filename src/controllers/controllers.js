import router from "../routes/routes.js";

export const home = (req, res) => res.render('home', { title: 'Home' })