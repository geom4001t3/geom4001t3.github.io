var config = {
    style: 'mapbox://styles/alexandramullen11/ckkuphcox1c9r17s946ng8yxm',
    accessToken: 'pk.eyJ1IjoiYWxleGFuZHJhbXVsbGVuMTEiLCJhIjoiY2traWY2cHN6MDllbjJ3cW5jNWE1aDYzcyJ9.OTPTW0eSm2_M_KfIGn0s1Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Welcome to Gatineau Park',
    subtitle: "The National Capital Region's Conservation Park",
    byline: 'By Alexandra, Didier, Edward, Gillian, Yussuf',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'overview-id',
            alignment: 'left',
            description: '<h2> About Gatineau Park </h2> Gatineau Park is the National Capital Region’s conservation park. The largest green space in the region, the Park occupies an area of more than 361 square kilometres, and is a place of rich and unique biodiversity. It is the second-most visited park in Canada, and a destination for outdoor enthusiasts to engage in recreational activities that respect the environment. (NCC, 2020) <video width="500" height="300" controls><source src="./images/Gatineau_video.mp4" type="video/mp4">Your browser does not support the video tag.</video>Video taken on NCC`s Youtube page: <a href="https://www.youtube.com/watch?v=KZMiPpAMlKI&t=1s" target="_blank">Welcome to Gatineau Park</a>',
            hidden: false,
            location: {
                center: [-75.95286, 45.55058],
                zoom: 9.74,
                pitch: 33.00,
                bearing: 16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {

               }
            ],
            onChapterExit: [
               {

               }
            ]
        },
        {
            id: 'overview-id',
            alignment: 'right',
            description: '<h2> There are many activities at Gatineau Park that differ by season </h2><br><h3>Summer Activities:</h3><ul><li> Hiking and walking </li><li> Dog walking </li><li> Cycling </li><li> In-line skating </li><li> Picnicking </li><li> Swimming </li><li> Boating Fishing </li><li> Horseback Riding</li><li> Rock climbing </li><li> Camping </li></ul><br><h3>Winter Activities:</h3><ul><li> Cross country skiing </li><li> Snowshoeing </li><li> Snow biking </li><li> In-line skating </li><li> Winter hiking and walking </li><li> Camping </li></ul>',
            hidden: false,
            location: {
                center: [-75.95286, 45.55058],
                zoom: 10.74,
                pitch: 33.00,
                bearing: 16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {

               }
            ],
            onChapterExit: [
               {

               }
            ]
        },
        {
            id: 'chart-id',
            alignment: 'left',
            hidden: false,
            title: 'Busiest days per Season',
            image: '',
            description: ' Fall time Busiest days in % <canvas id="myChart" width="100" height="25"></canvas> Winter time Busiest days in %<canvas id="myChart2" width="100" height="25"> </canvas> Spring/Summer time Busiest days in % <canvas id="myChart3" width="100" height="25"></canvas>',
            location: {
                center: [-75.95286, 45.55058],
                zoom: 10.74,
                pitch: 33,
                bearing: 16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    
                } 
            ],
            onChapterExit: [
                {

                }
            ]
        },

        {
            id: 'mackenzie-king-id',
            alignment: 'right',
            hidden: false,
            title: 'Mackenzie King Estate',
            image: './images/Mack.png',
            description: 'Canada’s 10th serving Prime Minister William Lyon Mackenize King gifted his 231 hectare country estate for all Canadians to enjoy in the 1950s. This estate in Gatineau Park offers a chance to engage with historical french gardens, hiking trails, and interactive exhibits. <br>For more information about Mackenzie King Estate visit: <a href="https://ncc-ccn.gc.ca/places/mackenzie-king-estate" target="_blank">Mackenzie King Estate (NCC)</a>',
            location: {
                center: [-75.84786, 45.48358],
                zoom: 15.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Contour',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'Contour',
                    opacity: 0,
                }
            ]
        },

        {
            id: 'CampF-id',
            alignment: 'left',
            hidden: false,
            title: 'Camp Fortune',
            image: './images/Campfortune.jpg',
            description: 'Located in Gatineau hills approximately 15 minutes from downtown Ottawa, Camp Fortune has many activities to enjoy with family and friends. Whether it’s skiing or snowboarding you can enjoy one of the 20 runs before stopping at the lodge and enjoying a famous Quebec poutine. Stop by in the summer to enjoy Camp Fortunes tree top adventure that ends with a  which is a 3 hour adventure in the trees. <br>For more information about Camp Fortune visit: <a href="https://campfortune.com/en/" target="_blank">Camp Fortune</a>',
            location: {
                center: [-75.86040, 45.50649],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Contour',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'Contour',
                    opacity: 0,
                }
            ]
        },

        {
            id: 'sugarbush-id',
            alignment: 'right',
            hidden: false,
            title: 'Sugarbush Trail',
            image: './images/sugarbush.jpg',
            description: 'Sugarbush Trail is a 3 kilometer heavily trafficked loop trail primarily used for hiking, walking, running, and snowshoeing. The trail is accessible year-round. Dogs are also able to use this trail but must be kept on leash. <br>For more information about Sugarbush Trail visit: <a href="https://www.alltrails.com/trail/canada/quebec/sentier-de-la-sucrerie" target="_blank">Sugarbush Trail (AllTrails)</a>',
            location: {
                center: [-75.81658, 45.50829],
                zoom: 16.07,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Contour',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'Contour',
                    opacity: 0,
                }
            ]
        },

        {
            id: 'champlain-id',
            alignment: 'left',
            hidden: false,
            title: 'Champlain Lookout',
            image: './images/champlain.jpg',
            description: 'As the name goes, Champlain lookout offers the best-known and most popular view in Gatineau Park. The trail offers a number of activity options and is best used from April until October. Although the wall has collapsed, the NCC hopes to complete it by spring 2021. <br>For more information about Champlain Lookout visit: <a href="https://www.alltrails.com/trail/canada/quebec/sentier-d-observation-de-champlain" target="_blank">Champlain Lookout (AllTrails)</a>',
            location: {
                center: [-75.91259, 45.50850],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'Contour',
                opacity: 0,
                }
            ],
            onChapterExit: [
                {                    
                layer: 'Contour',
                opacity: 0,
            }
            ]
        },

        {
            id: 'Luskville-id',
            alignment: 'right',
            hidden: false,
            title: 'Luskville Waterfalls',
            image: './images/waterfall.jpg',
            description: ' After a challenging hike through the beautiful park with 300 m of elevation you can enjoy a beautiful view of the Luskville waterfall. Flowing through the Eardley Escarpment this trail also leads to multiple lookouts and the fire tower. <br>For more information about Luskville Falls visit: <a href="https://ncc-ccn.gc.ca/places/luskville-falls" target="_blank">Luskville Falls (NCC)</a>',
            location: {
                center: [-75.99255, 45.53658],
                zoom: 15,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Contour',
                    opacity: 0,
                }
            ],
            onChapterExit: [{
                layer: 'Contour',
                opacity: 0,
            }]
        },

        {
            id: 'pinklake-id',
            alignment: 'left',
            hidden: false,
            title: 'Pink Lake',
            image: './images/pinklake.jpg',
            description: 'Pink Lake is a freshwater lake in Gatineau Park. The green colour of the water during the late summer is a result of algae growth. Pink Lake has a three-season trail and a lookout. Pink lake is very fragile, and it is important that visitors follow the principles of outdoor ethics. Pets, swimming, boats, and other watercraft are not permitted in or around Pink Lake (National Capital Commission, 2021). Image source: https://ncc-ccn.gc.ca/places/pink-lake <br>For more information about Pink Lake visit: <a href="https://ncc-ccn.gc.ca/places/pink-lake" target="_blank">Pink Lake (NCC)</a>',
            location: {
                center: [-75.80848, 45.46718],
                zoom: 16.03,
                pitch: 45,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'Contour',
                opacity: 0,
                }
            ],
            onChapterExit: [
                {
                layer: 'Contour',
                opacity: 0,
                }
            ]
        },

        {
            id: 'wakefield-id',
            alignment: 'right',
            hidden: false,
            title: 'Village of Wakefield',
            image: './images/wakefield.png',
            description: 'Wakefield is a small, joyful village in the Municipality of La Pêche which is located on the western shore of the Gatineau River. Filled with local restaurant and small boutiques, Wakefield has plenty of attractions and activities to stay occupied for a day. <br><h3><u>Some historical sites:</u></h3> <h4>Wakefield covered bridge:</h4> <ul><li>Originally built in 1915, the Wakefield Covered Bridge links the two shores of the Gatineau River. Unfortunately in 1984 it was destroyed by a fire, however, it was later rebuilt by the community. Nowadays, it can only be used by pedestrians and some of its original features were maintained such as the pillars that support it.</li></ul><h4>Wakefield mill:</h4> <ul><li>Located on the banks of the La Pêche River the Wakefield Mill was initially built in 1838, however it was destroyed by a fire in1910. Today, the newly renovated mill is a central point along with the award-winning Wakefield Mill Hotel & Spa right beside.</li></ul><h3>Other activities & nearby points of interest include:</h5><ol><li>Canoe, kayak & paddleboard rentals</li> <li>Mountain biking</li> <li>Golfing</li> <li>Alpine skiing (i.e. Vorlage, Edelweiss, Mont Cascades)</li> <li>Cross-country skiing and more!</li> <br>For more information about Wakefield visit: <a href="http://www.destinationwakefield.com/" target="_blank">Wakefield</a>',
            location: {
                center: [-75.92755, 45.64980],
                zoom: 14,
                pitch: 33.00,
                bearing: 16.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                layer: 'Contour',
                opacity: 0,
               }
            ],
            onChapterExit: [
               {
                layer: 'Contour',
                opacity: 0,
               }
            ]
        },

        {
            id: 'peche-lake-id',
            alignment: 'left',
            hidden: false,
            title: 'La Pêche Lake',
            image: './images/lacpeche.jpg',
            description: 'La Peche lake is the largest lake in all of Gatineau Park. Located on the western portion, this lake is the farthest from the Ottawa/Gatineau downtown core. This location is popular for canoe-camping and fishing. <br>For more information about La Pêche Lake visit: <a href="https://ncc-ccn.gc.ca/places/la-peche-lake" target="_blank">La Pêche Lake (NCC)</a>',
            location: {
                center: [-76.17878, 45.62195],
                zoom: 14,
                pitch: 33,
                bearing: 16.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Contour',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'Contour',
                    opacity:1,
                }
            ]
        },

        {
            id: 'terrain-id',
            alignment: 'right',
            hidden: false,
            title: 'Terrain',
            image: './images/terrain.jpg',
            description: 'Extending across multiple municipalities such as Chelsea, Wakefield and Pontiac, Gatineau Park offers a variety of lookouts, picnic areas and various levels of elevation. The highest levels of elevation near Pontiac can reach up to 388m. <br> <a href="https://ncc-ccn.gc.ca/places/scenic-lookouts"target="_blank">Image source: Huron Lookout (NCC)</a>',
            location: {
                center: [-75.90550, 45.54921],
                zoom: 11.09,
                pitch: 46.50,
                bearing: 0.02
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Contour',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'Contour',
                    opacity: 0,
                }
            ]
        },

        {
            id: 'credits-id',
            alignment: 'left',
            hidden: false,
            title: 'Thank You from Team 3!',
            image: './images/Gatineaupark.jpg',
            description: '-Alexandra, Didier, Edward, Gillian, Yussuf. <br> <a href="https://ncc-ccn.gc.ca/places/conservation-at-gatineau-park"target="_blank">Image Source (NCC)</a>',
            location: {
                center: [-75.94234, 45.54483],
                zoom: 11.09,
                pitch: 46.00,
                bearing: -2.65
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {

                }
            ],
            onChapterExit: [
                {

                }
            ]
        }

    ]
};
