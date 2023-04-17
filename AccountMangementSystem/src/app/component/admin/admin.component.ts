import { Component, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/models/userdetails';
import { UserdetailserviceService } from 'src/app/services/userdetailservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  constructor(private service:UserdetailserviceService){
    
  }
  public userdetails:any;


  ngOnInit(): void {

    this.getUserDetails();
    
  }
  getUserDetails(){
    this.service.getUserDetails().subscribe(data=>{
      this.userdetails=data;
    })
  }
  
  
  //This deletes the user
  /*delete(id:any){
    this.service.deleteUserDetails(id).subscribe((y:any)=>{
     this.getUserDetails()
   
    })
  }*/
  delete(accountNumber: any) {
    const index = this.userdetails.findIndex((c: { accountnumber: any; }) => c.accountnumber === accountNumber);
    if (index !== -1) {
      this.userdetails.splice(index, 1);
    }
  }
  

  approved(c:any){
    const data={
      FirstName:c.firstName,
      LastName:c.lastName,
      Email:c.email,
      Address:c.address,
      DateOfBirth:c.dateOfBirth,
      Phone:c.phone
    
    }
    this.service.postUserdetails(data).subscribe((x:any)=>{
      console.log("dfgh",x)
      console.log("uyxhwdcgchgc",this.delete(c.accountNumber))
    })
  }



}
