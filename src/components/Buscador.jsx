import { useState, useEffect } from "react"

const Buscador = () => {

    const [usuarios, setUsuarios] = useState([])
    const [busqueda, setBusqueda] = useState('')

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://jsonplaceholder.typicode.com/users'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            setUsuarios(resultado)

            
        }
      consultarAPI()
    }, [])

    
    const buscar = (e) => {
      setBusqueda(e.target.value)

    }
    
    const resultados = !busqueda ? usuarios : usuarios.filter((dato) => dato.name.toLowerCase().includes(busqueda.toLocaleLowerCase()))


  return (
    <div>

      <input value={busqueda} onChange={buscar} type="text" placeholder="Buscar" className="form-control"/>

      <table className="table table-striped table-hover mt-5 shadow-lg text-center">
        <thead>
          <tr>
            <th className="bg-success bg-gradient text-white">Nombre</th>
            <th className="bg-success bg-gradient text-white">Nombre de Usuario</th>
          </tr>
        </thead>
        <tbody>
            {
              resultados.map((usuario) => (
                <tr key={usuario.id}>
                  <td>{usuario.name}</td>
                  <td>{usuario.username}</td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default Buscador