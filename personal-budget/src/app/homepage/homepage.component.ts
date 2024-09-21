import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { Chart,ArcElement, CategoryScale, LinearScale, registerables } from 'chart.js';
Chart.register(ArcElement, CategoryScale, LinearScale, ...registerables);
@Component({
  selector: 'pb-homepage',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  public dataSource={
    labels: [] as string[],
        datasets:[
            {
                data: [] as number[],
                backgroundColor: [
                    '#CC0003',
                    '#45818d',
                    '#c90078',
                    '#783f09',
                    '#ffcd51',
                    '#ff6383',
                    '#36a2e0',
                    '#fd6b19',
                    '#f6b26f'
                ],
            }
        ],
    };
  constructor(private http:HttpClient){}
  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res:any) =>{
      for(var i = 0; i < res.myBudget.length; i++){
        this.dataSource.datasets[0].data[i] = res.myBudget[i].budget;
        this.dataSource.labels[i] = res.myBudget[i].title;
      }
      this.createChart()
    })
  }
  createChart() {
    const chartElement = document.getElementById("myChart") as HTMLCanvasElement | null;

    if (chartElement) {
        const ctx = chartElement.getContext("2d");

        if (ctx) {
            const myPieChart = new Chart(ctx, {
                type: 'pie',
                data: this.dataSource
            });
        } else {
            console.error('Could not get the 2D context of the chart element.');
        }
    } else {
        console.error('Chart element with id "myChart" not found.');
    }
}


}
