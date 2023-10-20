export class Question {
        public Id:number;
        public Image:string;
        public Respuesta:string;
        public CorrectValue:string;

        constructor (id:number, image:string, respuesta:string, correctValue:string){
                this.Id=id;
                this.Image=image;
                this.Respuesta=respuesta;
                this.CorrectValue=correctValue;
        }
}
