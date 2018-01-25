import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'Id', 'Name', 'Rewards'],
            dataRows: [
                ['1', 'Anshul Sharma','$36,738'],
                ['2', 'Seema Kad','$30,534'],
                ['3', 'Sneha Joshi','$28,766'],
                ['4', 'Soumya Arora','$26,923'],
                ['5', 'Snigdha Tamot','$20,666'],
                ['6', 'Priya Shetty','$16,222']
            ]
        };
    }
}
