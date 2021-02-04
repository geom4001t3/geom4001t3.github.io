var config = {
    style: 'mapbox://styles/didiers/ckkospocs704v17qq6enkrtjn',
    accessToken: 'pk.eyJ1IjoiZGlkaWVycyIsImEiOiJja2tpajA5bHYwcXZwMzFvZHIwcWZqNnhvIn0.pfl4-VFX09OkJGwidtNv_A',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    title: 'Test of story map - GEOM4001 T3',
    subtitle: 'TESSTTESTESTESTSTES',
    byline: 'By Team3',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'trails-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './images/trails.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-75.84453, 45.50354],
                zoom: 11.59,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
               {
                layer: 'test-gatineaupark-activities',
                opacity: 1,
                duration: 2000
               }
            ],
            onChapterExit: [
               {
                layer: 'test-gatineaupark-activities',
                opacity: 0
               }
            ]
        },
        {
            id: 'picnic_areas-id',
            alignment: 'right',
            hidden: false,
            title: 'These are the picnic areas',
            image: './images/picnic.jfif',
            description: 'These are some of the designated picnic areas in Gatineau park.',
            location: {
                center: [-75.83438, 45.47754],
                zoom: 12.30,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'picnic-areas',
                opacity: 1,
                duration: 5000
                }   
            ],
            onChapterExit: [
                {
                layer: 'picnic-areas',
                opacity: 0
                }
            ]
        }
    ]
};
