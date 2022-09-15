class Cavalo{
ferradura;

set Ferradura(Ferradura){
    this.Ferradura = Ferradura;
}

get Ferradura(){
    return this.Ferradura;
}
    constructor(ferradura){
        
        this.ferradura = ferradura;
        
    }   
    correrCavaloUm(){
        return "Cavalo um está fazendo: TUTUCTUTUCTUTUC... ";
    } 
    correrCavaloDois(){
        return "Cavalo dois está fazendo: POCOTOPOCOTO... ";

    }
    correrCavaloTres(){
        return "Cavalo três está fazendo: IIINHHIIHAAARAA... ";
    }
}
