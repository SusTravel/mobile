import axios from 'react-native-axios';

class PathService {
    getPath(pointFrom, pointTo) {       
        return axios
            .get(`https://api.tfl.lu/v1/Journey/${pointFrom}/to/${pointTo}`)
            .then(response => {
                const data = response.data;
                const routes = [];

                //console.log('DATA', data);

                data.plan.itineraries.forEach((option, index) => {
                    //console.log('duration', moment.utc(option.duration).format('HH:mm'));

                    let fullRoute = [pointFrom.split(',')];
                    const steps = [];

                    option.legs.forEach(record => {
                        const points = this.polylineDecode(record.legGeometry.points);
                        fullRoute = fullRoute.concat(points.slice(1));

                        steps.push({
                            mode: record.mode,
                            duration: record.duration || 0,
                            name: record.routeShortName || '',
                            longName: record.routeLongName || ''
                        });
                    });
                    routes.push({fullRoute, steps});
                });

                return routes;
            });
    }

    polylineDecode(str, precision) {
        var index = 0,
            lat = 0,
            lng = 0,
            coordinates = [],
            shift = 0,
            result = 0,
            byte = null,
            latitude_change,
            longitude_change,
            factor = Math.pow(10, precision || 5);

        // Coordinates have variable length when encoded, so just keep
        // track of whether we've hit the end of the string. In each
        // loop iteration, a single coordinate is decoded.
        while (index < str.length) {
            // Reset shift, result, and byte
            byte = null;
            shift = 0;
            result = 0;

            do {
                byte = str.charCodeAt(index++) - 63;
                result |= (byte & 0x1f) << shift;
                shift += 5;
            } while (byte >= 0x20);

            latitude_change = result & 1 ? ~(result >> 1) : result >> 1;

            shift = result = 0;

            do {
                byte = str.charCodeAt(index++) - 63;
                result |= (byte & 0x1f) << shift;
                shift += 5;
            } while (byte >= 0x20);

            longitude_change = result & 1 ? ~(result >> 1) : result >> 1;

            lat += latitude_change;
            lng += longitude_change;

            coordinates.push([lat / factor, lng / factor]);
        }

        return coordinates;
    }
}

export default new PathService();
