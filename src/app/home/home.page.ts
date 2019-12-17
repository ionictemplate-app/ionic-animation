import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    btnList = [
        {name: 'scale', className: 'scale-in-center'},
        {name: 'rotate', className: 'rotate-in-center'},
        {name: 'rotate2', className: 'rotate-in-2-cw'},
        {name: 'swirl', className: 'swirl-in-fwd'},
        {name: 'flip', className: 'flip-in-ver-right'},
        {name: 'slit', className: 'slit-in-vertical'},
        {name: 'slide top', className: 'slide-in-top'},
        {name: 'slide in', className: 'slide-in-tr'},
        {name: 'slide right', className: 'slide-in-right'},
        {name: 'slide br', className: 'slide-in-br'},
        {name: 'slide bottom', className: 'slide-in-bottom'},
        {name: 'slide bl', className: 'slide-in-bl'},
        {name: 'slide left', className: 'slide-in-left'},
        {name: 'slide tl', className: 'slide-in-tl'}
    ];
    selectClass = 'scale-in-center';

    list = [
        {
            "name": "Girl, Kayak, Canoe",
            "content": "",
            "img": "assets/images/list/girl3.jpg",
            "isOpen": false
        },
        {
            "name": "Sport, Strength Training",
            "content": "",
            "img": "assets/images/list/girl13.jpg",
            "isOpen": false
        },
        {
            "name": "Motorcycle, Speed, Helmet",
            "content": "",
            "img": "assets/images/list/girl4.jpg",
            "isOpen": false
        },
        {
            "name": "Sport,Training,Sixpack",
            "content": "",
            "img": "assets/images/list/girl5.jpg",
            "isOpen": false
        },
        {
            "name": "Training,Arms,Blonde",
            "content": "",
            "img": "assets/images/list/girl6.jpg",
            "isOpen": false
        },
        {
            "name": "Football Boot, Sport",
            "content": "",
            "img": "assets/images/list/girl9.jpg",
            "isOpen": false
        },
        {
            "name": "SurfboardWater Sports",
            "content": "",
            "img": "assets/images/list/girl1.jpg",
            "isOpen": false
        },
        {
            "name": "Ski Touring, Backcountry Skiing",
            "content": "",
            "img": "assets/images/list/girl17.jpg",
            "isOpen": false
        },
        {
            "name": "Pose, Fitness, Girl",
            "content": "",
            "img": "assets/images/list/girl18.jpg",
            "isOpen": false
        },
        {
            "name": "Ski Touring, Backcountry Skiing",
            "content": "",
            "img": "assets/images/list/girl6.jpg",
            "isOpen": false
        },
        {
            "name": "Pose, Fitness, Girl",
            "content": "",
            "img": "assets/images/list/girl11.jpg",
            "isOpen": false
        }
    ];


    constructor() {

    }
    toggle(className) {
        this.selectClass = className;
    }

}
