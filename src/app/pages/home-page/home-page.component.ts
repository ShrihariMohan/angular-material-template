import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { DataService } from 'src/app/service/dataService.ts/data.service';

interface TABLE {
  0: string,
  1: string,
  2: string,
  3: string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  constructor(private dataService: DataService) { }

  @ViewChild(MatTable) table: MatTable<TABLE> | null = null;

  form = new FormGroup({
    csv: new FormControl(''),
  });

  csvArray: Object[] = []
  displayedColumns: string[] = ['1', '2', '3', '4'];



  ngOnInit(): void {
  }

  async onSubmit() {
    const submittedString: string = this.form.get('csv')?.value
    const arr = submittedString.split(',')
    const obj: any = {}
    arr.map((each, ind) => {
      obj[ind] = each
    })
    obj[3] = 'Loading'
    this.csvArray.push(obj)
    this.table?.renderRows();
    console.log("🚀 ~ file: home-page.component.ts ~ line 30 ~ HomePageComponent ~ onSubmit ~ this.csvArray", this.csvArray)
    const fourthVal = await this.dataService.getDataAfterNSeconds(obj[2])
    console.log("🚀 ~ file: home-page.component.ts ~ line 47 ~ HomePageComponent ~ onSubmit ~ fourthVal", fourthVal)

    obj[3] = fourthVal
    this.table?.renderRows();

  }

  loadData(val: any) {
    return '123'
  }

}
