import { defineConfig } from "vite";
export default defineConfig({
    base:"/tiya/",
    build:{
        rollupOptions:{
            input:{
                main:'index.html',
                event:'event.html',
                listing:'lis`ting.html',
            }
        }
    }
})