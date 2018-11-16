import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $(".dropdown,.dropbtn").mouseover(function () {
        $(this).find(".dropdown-content").css("display", "block");
        $(this).find(".caret-wrapper").css("display", "block");
      });
      $(".dropdown,.dropbtn").mouseout(function () {
        $(this).find(".dropdown-content").css("display", "none");
        $(this).find(".caret-wrapper").css("display", "none");
      });

      $(".openicon").click(function () {
        $(".openicon").hide();
        $(".closeicon").show();
      });
      $(".closeicon").click(function () {
        $(".closeicon").hide();
        $(".openicon").show();
      });

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
