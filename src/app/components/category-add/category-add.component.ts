import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryAddForm:FormGroup;
  constructor(private formBuilder:FormBuilder, private categoryService:CategoryService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.createCategoryAddForm();
  }
  createCategoryAddForm(){
    this.categoryAddForm=this.formBuilder.group({
      categoryName:["",Validators.required]
    })
  }
  add(){
    this.categoryService.add(this.categoryAddForm.value).subscribe(
      (data)=>{
        if(data.success){
          this.toastrService.success("Kategori eklendi","Başarılı");
          this.categoryAddForm.reset();
        }else{
          this.toastrService.error("Kategori eklenemedi","Başarısız");
        }

      }
    )}

}
