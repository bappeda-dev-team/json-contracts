const path = require("path");
const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const routes = require(path.join(__dirname, "routes.json"));
const rewriter = jsonServer.rewriter(routes);

// Gunakan middleware bawaan json-server (CORS, logging, static, dsb.)
server.use(middlewares);

// Custom route: /pohon_kinerja_pemda/tahun/:tahun
server.get("/pohon_kinerja_pemda/tahun/:tahun", (req, res) => {
    const db = router.db;
    const tahun = Number(req.params.tahun);

    const result = db
        .get("pohon_kinerja_pemda")
        .filter({ tahun })
        .value();

    res.json(result);
});

// Gunakan rewriter agar alias routes.json berfungsi
server.use(rewriter);

// Gunakan router bawaan json-server
server.use(router);

// Jalankan server
const PORT = 5019;
server.listen(PORT, () => {
    console.log(`JSON Server running at http://localhost:${PORT}`);
});
