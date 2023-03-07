import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PlaceService } from 'src/app/services/place.service';




@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.css']
})
export class PlaceAddComponent implements OnInit {

  placeAddForm : FormGroup
  constructor(private formBuilder: FormBuilder,
     private placeService:PlaceService,private toastrService:ToastrService
   ) { }

  ngOnInit(): void {
    this.createPlaceAddForm();
  }

  createPlaceAddForm(){
    this.placeAddForm=this.formBuilder.group({
         placeName:["",Validators.required],
         placePrice:["",Validators.required],
         placeDescription:["",Validators.required],
         categoryId:["",Validators.required],



    })
  }

  add(){
    this.placeService.add(this.placeAddForm.value).subscribe(
      (data)=>{
        this.toastrService.success("Mekan eklendi","Başarılı");
        this.placeAddForm.reset();
  })
}
}
