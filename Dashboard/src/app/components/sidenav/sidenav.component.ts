import { Component, OnInit } from '@angular/core';
import {
  faDiceD6,
  faHome,
  faCloud,
  faFlask,
  faShieldAlt,
  faGlobe,
  faPalette,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  faDiceD6      = faDiceD6;
  faHome        = faHome;
  faCloud       = faCloud;
  faFlask       = faFlask;
  faShieldAlt   = faShieldAlt;
  faGlobe       = faGlobe;
  faPalette     = faPalette;
  faSignOutAlt  = faSignOutAlt;
  constructor() { }

  ngOnInit(): void {
  }

}
