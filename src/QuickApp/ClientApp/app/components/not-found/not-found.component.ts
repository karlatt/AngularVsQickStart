// ======================================
// Author: Ebenezer Monney
// Email:  info@ebenmonney.com
// Copyright (c) 2017 www.ebenmonney.com
// 
// ==> Gun4Hire: contact@ebenmonney.com
// ======================================

import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { ConfigurationService } from '../../services/configuration.service';


@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css'],
    animations: [fadeInOut]
})
export class NotFoundComponent {
    constructor(private configurations: ConfigurationService) {
    }
}
