import exress from "express";
import serverRenderer from "./middleware/renderer";
const PORT = 3000;
const path = require("path");
const app = express();
const router = express.Router();
// root (/) should always serve our server rendered page
router.use("^/$", serverRenderer);

// other static resources should be served as they are

router.use(
    express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

// tell the app to use the above rules
app.use(router);

app.listen(PORT, error => {
    if (error) {
        console.log(error);
    }
});
