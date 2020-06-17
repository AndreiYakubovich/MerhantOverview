import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionsService } from '../Services/transactions.service';
import { Transaction } from '../Interfaces/transaction';
import { Summary } from '../Interfaces/Summary';
import { ChartOptions } from './ChartOptions';

@Component({
  selector: 'app-transactions-component',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  public chartOptions: ChartOptions = { ready: false,
    series: [100],
    labels: [],
    chart: {
      width: 200,
      type: "pie"
    },
    responsive: [ ]
  };
  transactions: Transaction[];
  displayedColumns: string[] = ['description', 'date', 'price'];
  summary: Summary = new Summary();

  constructor(private route: ActivatedRoute,
    private transactionService: TransactionsService) { }


  ngOnInit() {
    this.route.data.subscribe(routeData => {
      this.transactions = routeData.fullMerchantData.transactions;
      this.getSummary();
      this.summary.subsidy = routeData.fullMerchantData.pricing.subsidy;
      this.setPieChart();
    });

  }
  setPieChart() {
    let totalPercentage = this.summary.total / (this.summary.total + this.summary.subsidy) * 100;
    let subsidyPercentage = this.summary.subsidy / (this.summary.total + this.summary.subsidy) * 100;

    this.chartOptions = {
      ready: true,
      series: [totalPercentage, subsidyPercentage],
      chart: {
        width: 200,
        type: "pie"
      },
      labels: ["Total", "Subsidy"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  getSummary(): void {
    this.summary = this.transactionService.getSummary(this.transactions);
  }

  visible(chartOptions : ChartOptions) : boolean {
    console.log(chartOptions.ready);
    return chartOptions.ready;
  }

}
