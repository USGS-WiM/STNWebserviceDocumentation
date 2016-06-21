//------------------------------------------------------------------------------
//----- MainController ------------------------------------------------------
//------------------------------------------------------------------------------
//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+
// copyright:   2014 WiM - USGS
//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//   purpose:  
//discussion:   Controllers are typically built to reflect a View. 
//              and should only contailn business logic needed for a single view. For example, if a View 
//              contains a ListBox of objects, a Selected object, and a Save button, the Controller 
//              will have an ObservableCollection ObectList, 
//              Model SelectedObject, and SaveCommand.
//Comments
//04.14.2015 jkn - Created
//Imports"
var STN;
(function (STN) {
    var Controllers;
    (function (Controllers) {
        'use strinct';
        var Center = (function () {
            //Constructor
            //-+-+-+-+-+-+-+-+-+-+-+-
            function Center(lt, lg, zm) {
                this.lat = lt;
                this.lng = lg;
                this.zoom = zm;
            }
            return Center;
        })();
        var Layer = (function () {
            function Layer(nm, ul, ty, vis, op) {
                if (op === void 0) { op = undefined; }
                this.name = nm;
                this.url = ul;
                this.type = ty;
                this.visible = vis;
                this.layerOptions = op;
            }
            return Layer;
        })();
        //class mapFeatures {
        //    //Properties
        //    //-+-+-+-+-+-+-+-+-+-+-+-
        //    public lat: number;
        //    public lng: number;
        //    //public rcode: string;  //public crs: number;//public workspaceID: string;        
        //    //Constructor
        //    //-+-+-+-+-+-+-+-+-+-+-+-
        //    //constructor(rcode: string) {
        //    //    this.rcode = rcode;
        //    //}
        //}   
        var MainController = (function () {
            function MainController($scope, $filter, Resource, leafletBoundsHelper, leafletData) {
                var _this = this;
                this.$filter = $filter;
                this.Resource = Resource;
                this.mapPoint = null;
                this.bounds = null;
                this.center = null;
                this.layers = null;
                this.markers = null;
                this.geojson = null;
                $scope.vm = this;
                this.selectedUri = new STN.Models.URI('');
                this.waitCursor = false;
                this.sideBarCollapsed = false;
                this.downloadable = false;
                this.applicationURL = configuration.baseurls['application'];
                this.servicesBaseURL = configuration.baseurls['services'];
                this._onSelectedResourceHandler = new WiM.Event.EventHandler(function () {
                    //clear selectedUri on resource change
                    _this.selectedUri = new STN.Models.URI('');
                    _this.selectedResource = Resource.SelectedResource;
                });
                Resource.onResourceChanged.subscribe(this._onSelectedResourceHandler);
                this._onSelectedUriHandler = new WiM.Event.EventHandler(function () {
                    _this.selectedUri = Resource.SelectedUri;
                    _this.requestResults = "";
                });
                Resource.onUriChanged.subscribe(this._onSelectedUriHandler);
                //MAP STUFF
                //-+-+-+-+-+-+-+-+-+-+-+-
                this.initMap();
                this.leafletData = leafletData;
                this.showOnMap = false;
                //update lat lng on click
                //$scope.$on('leafletDirectiveMap.click',(event, args) => {
                //    var latlng = args.leafletEvent.latlng;
                //    this.studyArea.lat = latlng.lat;
                //    this.studyArea.lng = latlng.lng;
                //    this.markers['pourpoint'] = {
                //        lat: this.studyArea.lat,
                //        lng: this.studyArea.lng,
                //        focus: true
                //    }
                //    for (var index in this.selectedUri.parameters) {
                //        if (this.selectedUri.parameters[index].name == "xlocation") {
                //            this.selectedUri.parameters[index].value = latlng.lng.toFixed(4);
                //        }
                //        if (this.selectedUri.parameters[index].name == "ylocation") {
                //            this.selectedUri.parameters[index].value = latlng.lat.toFixed(4);
                //        }
                //    }
                //});
                $scope.$on('leafletDirectiveMap.zoomend', function (event, args) {
                    //console.log('map zoom changed', args.leafletEvent.target._animateToZoom, 15, this.cursorStyle);
                    (args.leafletEvent.target._animateToZoom > 13) ? _this.cursorStyle = 'crosshair' : _this.cursorStyle = 'hand';
                });
                $scope.$watch(function () { return _this.selectedUri.selectedMedia; }, function (newVal, oldVal) {
                    _this.makeRequestURL();
                });
                $scope.$watch(function () { return _this.selectedUri.parameters; }, function (newVal, oldVal) {
                    _this.makeRequestURL();
                    if (_this.selectedUri.id == 'Delineate Watershed By Location') {
                        for (var key in _this.selectedUri.parameters) {
                            //if oldval doesnt exists were on first page load
                            if (_this.selectedUri.parameters[key].name == "rcode") {
                            }
                        }
                    }
                }, true);
            }
            //Methods
            //-+-+-+-+-+-+-+-+-+-+-+-
            MainController.prototype.loadResponse = function () {
                var _this = this;
                this.waitCursor = true;
                this.showOnMap = false;
                this.requestResults = '';
                this.Resource.getURL(this.selectedUri.newURL, this.selectedMedia).then(function (response) {
                    _this.requestResults = response.data;
                }, function (error) {
                    _this.requestResults = "(" + error.status + ") " + error.data;
                }).finally(function () {
                    _this.waitCursor = false;
                    _this.showOnMap = true;
                });
            };
            MainController.prototype.makeRequestURL = function () {
                //clear map if there's a response in there
                this.geojson = {};
                this.downloadable = false;
                var inputParams = [this.selectedUri.selectedMedia];
                for (var i = 0; i < this.selectedUri.parameters.length; i++) {
                    inputParams.push(this.selectedUri.parameters[i].value);
                }
                var func = this.selectedUri.uri.format;
                var newURL = func.apply(this.selectedUri.uri, inputParams);
                this.selectedUri.newURL = newURL;
                //for file download endpoints, don't show button to load response in output box
                if (this.selectedUri.availableMedia != undefined) {
                    if (this.selectedUri.availableMedia.length == 0)
                        this.downloadable = true;
                }
                return newURL.replace(/\{(.+?)\}/g, "");
            };
            //MAP STUFF
            //-+-+-+-+-+-+-+-+-+-+-+-
            MainController.prototype.changeMapRegion = function (region) {
                this.leafletData.getMap().then(function (map) {
                    for (var index in configuration.regions) {
                        var value = configuration.regions[index];
                        if (value.RegionID == region.toUpperCase()) {
                            //console.log('match found', value.RegionID + "_region", value.Bounds);
                            map.fitBounds(value.Bounds);
                        }
                    }
                });
            };
            MainController.prototype.showResponseOnMap = function () {
                var _this = this;
                //clear out this.markers
                this.markers = {};
                this.geojson = {};
                this.geojson["data"] = this.requestResults;
                //        var bbox = item.bbox;
                //        //console.log(bbox);
                this.leafletData.getMap().then(function (map) {
                    var latlngs = [];
                    angular.forEach(_this.geojson["data"]["features"][0].geometry.coordinates, function (g) {
                        var coord = g.coordinates;
                        for (var j in coord) {
                            var points = coord[j];
                            for (var k in points) {
                                latlngs.push(L.GeoJSON.coordsToLatLng(points[k]));
                            }
                        }
                    });
                    map.fitBounds(latlngs);
                    //map.fitBounds(bounds); //lat, long, lat,long
                });
                if (this.selectedUri.id.indexOf("HWM") > 0) {
                    //hwm query
                    this.geojson["onEachFeature"] = function (obj, layer) {
                        var popupContent = ''; //<strong>Latitude: </strong>' + obj.geometry.coordinates[1] + '</br><strong>Longitude: </strong>' + obj.geometry.coordinates[0] + '</br><strong>Region: </strong>' + 'rcode' + '</br><strong>WorkspaceID: </strong>' + 'workspaceID' + '</br>';
                        angular.forEach(obj.properties, function (value, key) {
                            if (key == 'hwm_id' || key == 'waterbody' || key == 'site_id' || key == 'event_id' || key == 'hwm_type_id' || key == 'hwm_quality_id' || key == 'hwm_locationdescription' || key == 'latitude_dd' || key == 'longitude_dd') {
                                popupContent += '<strong>' + key + ': </strong>' + value + '</br>';
                            }
                        });
                        layer.bindPopup(popupContent);
                    };
                } //if hwm
            };
            MainController.prototype.initMap = function () {
                this.center = new Center(39, -100, 4);
                this.layers = {
                    baselayers: configuration.basemaps,
                    overlays: configuration.overlayedLayers,
                    markers: this.markers,
                    geojson: this.geojson
                };
                this.markers = {};
                this.geojson = {};
                L.Icon.Default.imagePath = 'images';
            };
            //Helper Methods
            //-+-+-+-+-+-+-+-+-+-+-+-
            MainController.prototype.sm = function (msg) {
                try {
                }
                catch (e) {
                }
            };
            //Constructor
            //-+-+-+-+-+-+-+-+-+-+-+-
            MainController.$inject = ['$scope', '$filter', 'STN.Services.ResourceService', 'leafletBoundsHelpers', 'leafletData'];
            return MainController;
        })(); //end class
        angular.module('STN.Controllers').controller('STN.Controllers.MainController', MainController);
    })(Controllers = STN.Controllers || (STN.Controllers = {}));
})(STN || (STN = {})); //end module
//# sourceMappingURL=MainController.js.map