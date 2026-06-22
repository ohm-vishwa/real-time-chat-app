import app from "./src/app";
import { connectBD } from "./src/config/database";

const PORT = process.env.PORT || 3000

connectBD().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on PORT:", PORT)
    })
}).catch((error) => {
    console.error("Failed to start server", error);
    process.exit(1);
})