// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 
class Circle {
    constructor(radius){
        this.radius=radius
    };
    get radius_(){
        return this.radius
    };
    set radius_(a) {
        this.radius = a;
        console.log("You just changed the radius of the circle");
        this.render()
    };
    get diametr() {
        return  this.radius*2
    };
    getArea (){
        let area = Math.PI*Math.pow(this.radius, 2);
        return "Area of this circle is - " +area
    };
    getCircleLength() {
        let lenght = 2*Math.PI*this.radius;
        return "Lenght of this circle is - " +lenght
    };
    render(){
        document.write("<br>"+"Radius of this circle is - "+this.radius_+"<br>"+"Diametr of this circle is - "+this.diametr+"<br>"+this.getArea()+"<br>"+this.getCircleLength()+"<br>")
    }
};

let circle_1 = new Circle(3);
circle_1.render();

let circle_2=new Circle(15);
circle_2.render();


// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 
 
class Marker{
    constructor(color, inkQuantity){
        this.color=color;
        this.inkQuantity=inkQuantity
    }
    getPrint(stringForPrint){
        document.write(`<br> This ${this.color} text <br>` );
        let string=stringForPrint.split("");
        for(let i = 0; i<=string.length-1 && this.inkQuantity>0;i++){
            if (string[i]!==" "){
            this.inkQuantity= this.inkQuantity-0.5;
            document.write(`<font color="${this.color}">${string[i]}</font>`)
            }
            else{
            document.write(`<font color="${this.color}">${string[i]}</font>`)   
            }
        }
    }
};

class RefilMarker extends Marker{
    constructor(color, inkQuantity){
      super(color, inkQuantity)
    }
    markerRefueling(){
        let percentToRefil=100 - this.inkQuantity;
        this.inkQuantity=this.inkQuantity+percentToRefil
    }
};

let red = new Marker("red", 5);
red.getPrint("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem tempore id est iusto, provident quis architecto quisquam fugiat voluptate modi? Ab placeat temporibus saepe iste exercitationem officia libero. Odio?");

let green = new Marker("green", 12);
green.getPrint("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem tempore id est iusto, provident quis architecto quisquam fugiat voluptate modi? Ab placeat temporibus saepe iste exercitationem officia libero. Odio?");

let violet = new Marker ("violet", 45);
violet.getPrint("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem tempore id est iusto, provident quis architecto quisquam fugiat voluptate modi? Ab placeat temporibus saepe iste exercitationem officia libero. Odio?");

// Об'єкт для заправки червоного маркера
let redRefil = new RefilMarker(red.color, red.inkQuantity);

// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
class Employee {
    constructor(surname, firstName, position, age){
        this.surname = surname;
        this.firstName=firstName;
        this.position=position;
        this.age=age
    }
};

class EmpTable{
    constructor(){
        this.list =[];
       }
    addEmployee(employee){
        this.list.push(employee);
    }
    getHtml(){
        let htmlTable=`<table border="1"> 
        <tr>
        <td>№</td> <td>Surname</td>  <td>Name</td>  <td>Position</td>  <td>Age</td>
        </tr>`;
        for (let i=0; i<=this.list.length-1; i++ ){
            htmlTable+=`<tr>
            <td>${i+1}</td> 
            <td>${this.list[i]['surname']}</td>  
            <td>${this.list[i]['firstName']}</td>  
            <td>${this.list[i]['position']}</td>  
            <td>${this.list[i]['age']}</td>
            </tr>`
        }
        htmlTable+=`</table>`;
        document.write(`${htmlTable}`);
    }
};

let table = new EmpTable();

table.addEmployee( new Employee("Bondar", "Oleg", "Department Director", 35));
table.addEmployee ( new Employee("Savchuk", "Olena", "Deputy head of department", 25));
table.addEmployee ( new Employee("Nebor", "Nataliya", "Senior cashier", 29));
table.addEmployee ( new Employee("Oleksiuk", "Ihor", "Cashier", 35));
table.addEmployee ( new  Employee("Stasiuk", "Galyna", "Cashier", 25));
table.addEmployee ( new Employee("Petryk", "Nina", "Cashier", 28));


table.getHtml();