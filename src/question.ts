export class Question {
        public Id:number;
        public Image:string;
        public Respuesta:string;
        public CorrectValue:string;
        public Deshabilitado: boolean;

        constructor (id:number, image:string, respuesta:string, correctValue:string, deshabilitado:boolean){
                this.Id=id;
                this.Image=image;
                this.Respuesta=respuesta;
                this.CorrectValue=correctValue;
                this.Deshabilitado=deshabilitado;
        }
}
