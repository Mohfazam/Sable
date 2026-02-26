
import { createApp } from "./app";
 const PORT = 3000;

 async function bootsTrap() {
    const app = createApp();

    app.listen(PORT, () => {
        console.log(`Server Running on PORT ${PORT}`)
    });
 }

 bootsTrap();