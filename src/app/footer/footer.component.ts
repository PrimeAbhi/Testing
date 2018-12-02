import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      let openA = false
      $(".linkA").click(function () {

        if (openA) {
          $(".linkItemA").hide()
        } else {
          $(".linkItemA").show()
          $(".linkItemB").hide()
          $(".linkItemC").hide()
        }
        openA = !openA
      });
      let openB = false;
      $(".linkB").click(function () {

        if (openB) {
          $(".linkItemB").hide()
        } else {
          $(".linkItemB").show()
          $(".linkItemA").hide()
          $(".linkItemC").hide()
        }
        openB = !openB
      });
      let openC = false;
      $(".linkC").click(function () {

        if (openC) {
          $(".linkItemC").hide()
        } else {
          $(".linkItemC").show()
          $(".linkItemA").hide()
          $(".linkItemB").hide()
        }
        openC = !openC
      });
      $(".linkItemA, .linkItemB, .linkItemC").click(function (e) {
        e.stopPropagation()
      });
    });
  }

}
