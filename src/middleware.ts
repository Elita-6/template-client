export { default } from "next-auth/middleware"

//ito lesy tsy azoko fa vao securisena le route de maona server config error le izy ah
export const config = { matcher: ["/test"] }