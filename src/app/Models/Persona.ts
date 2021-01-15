export class Persona{
    nombre:string;
    apellidos:string;
    edad:number;
    sexo:string;
    public setNombre(nombre){
        return this.nombre=nombre;
    }
    public setApellido(apellidos){
        return this.apellidos=apellidos;
    }
    public setSexo(sexo){
        return this.sexo=sexo;
    }
    public setEdad(edad){
        return this.edad=edad;
    }

}