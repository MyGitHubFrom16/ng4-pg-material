import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const getScreenShots = {
            screenshots: [
                {
                    'img': 'assets/images/01.jpg',
                    'description': 'FarCry description...Lorem ipsum dolor sit amet, consectetur adipisicing',
                    'liked': 0
                },
                {
                    'img': 'assets/images/02.jpg',
                    'description': 'FarCry description...Lorem ipsum dolor sit amet, consectetur adipisicing',
                    'liked': 0
                },
                {
                    'img': 'assets/images/03.png',
                    'description': 'FarCry description...Lorem ipsum dolor sit amet, consectetur adipisicing',
                    'liked': 1
                }
            ]
        }

        return {
            getScreenShots
        };
    }
}
