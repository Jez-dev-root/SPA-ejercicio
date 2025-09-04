function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-white">Inicia Sesión</h1>
        <form className="flex flex-col gap-4 mt-6">
          <input type="email" placeholder="Correo electrónico"
                 className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="password" placeholder="Contraseña"
                 className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
export default Login
