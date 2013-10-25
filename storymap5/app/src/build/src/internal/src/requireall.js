goog.require('ol');
goog.require('ol.Attribution');
goog.require('ol.BrowserFeature');
goog.require('ol.Collection');
goog.require('ol.CollectionEvent');
goog.require('ol.CollectionEventType');
goog.require('ol.Color');
goog.require('ol.Constraints');
goog.require('ol.Coordinate');
goog.require('ol.CoordinateArray');
goog.require('ol.CoordinateFormatType');
goog.require('ol.DeviceOrientation');
goog.require('ol.DeviceOrientationProperty');
goog.require('ol.Ellipsoid');
goog.require('ol.Extent');
goog.require('ol.Feature');
goog.require('ol.FrameState');
goog.require('ol.Geolocation');
goog.require('ol.GeolocationProperty');
goog.require('ol.IView');
goog.require('ol.IView2D');
goog.require('ol.IView3D');
goog.require('ol.Image');
goog.require('ol.ImageState');
goog.require('ol.ImageTile');
goog.require('ol.ImageUrlFunction');
goog.require('ol.ImageUrlFunctionType');
goog.require('ol.Kinetic');
goog.require('ol.Map');
goog.require('ol.MapBrowserEvent');
goog.require('ol.MapBrowserEvent.EventType');
goog.require('ol.MapBrowserEventHandler');
goog.require('ol.MapEvent');
goog.require('ol.MapEventType');
goog.require('ol.MapProperty');
goog.require('ol.Object');
goog.require('ol.ObjectEventType');
goog.require('ol.Overlay');
goog.require('ol.OverlayPositioning');
goog.require('ol.OverlayProperty');
goog.require('ol.Pixel');
goog.require('ol.PostRenderFunction');
goog.require('ol.PreRenderFunction');
goog.require('ol.RendererHint');
goog.require('ol.RendererHints');
goog.require('ol.ResolutionConstraint');
goog.require('ol.ResolutionConstraintType');
goog.require('ol.RotationConstraint');
goog.require('ol.RotationConstraintType');
goog.require('ol.Size');
goog.require('ol.Sphere');
goog.require('ol.Tile');
goog.require('ol.TileCache');
goog.require('ol.TileCoord');
goog.require('ol.TileLoadFunctionType');
goog.require('ol.TilePriorityFunction');
goog.require('ol.TileQueue');
goog.require('ol.TileRange');
goog.require('ol.TileState');
goog.require('ol.TileUrlFunction');
goog.require('ol.TileUrlFunctionType');
goog.require('ol.TransformFunction');
goog.require('ol.View');
goog.require('ol.View2D');
goog.require('ol.View2DProperty');
goog.require('ol.View2DState');
goog.require('ol.ViewHint');
goog.require('ol.animation');
goog.require('ol.array');
goog.require('ol.canvas');
goog.require('ol.control');
goog.require('ol.control.Attribution');
goog.require('ol.control.Control');
goog.require('ol.control.DragBox');
goog.require('ol.control.FullScreen');
goog.require('ol.control.Logo');
goog.require('ol.control.MousePosition');
goog.require('ol.control.ScaleLine');
goog.require('ol.control.ScaleLineProperty');
goog.require('ol.control.ScaleLineUnits');
goog.require('ol.control.Zoom');
goog.require('ol.control.ZoomSlider');
goog.require('ol.control.ZoomToExtent');
goog.require('ol.coordinate');
goog.require('ol.css');
goog.require('ol.dom');
goog.require('ol.dom.BrowserFeature');
goog.require('ol.dom.Input');
goog.require('ol.dom.InputProperty');
goog.require('ol.easing');
goog.require('ol.ellipsoid.BESSEL1841');
goog.require('ol.ellipsoid.WGS84');
goog.require('ol.expr');
goog.require('ol.expr.Call');
goog.require('ol.expr.Char');
goog.require('ol.expr.Comparison');
goog.require('ol.expr.ComparisonOp');
goog.require('ol.expr.Expression');
goog.require('ol.expr.Identifier');
goog.require('ol.expr.Lexer');
goog.require('ol.expr.Literal');
goog.require('ol.expr.Logical');
goog.require('ol.expr.LogicalOp');
goog.require('ol.expr.Math');
goog.require('ol.expr.MathOp');
goog.require('ol.expr.Member');
goog.require('ol.expr.Not');
goog.require('ol.expr.Parser');
goog.require('ol.expr.Token');
goog.require('ol.expr.TokenType');
goog.require('ol.expr.UnexpectedToken');
goog.require('ol.expr.functions');
goog.require('ol.extent');
goog.require('ol.geom');
goog.require('ol.geom.AbstractCollection');
goog.require('ol.geom.Geometry');
goog.require('ol.geom.GeometryCollection');
goog.require('ol.geom.GeometryType');
goog.require('ol.geom.LineString');
goog.require('ol.geom.LinearRing');
goog.require('ol.geom.MultiLineString');
goog.require('ol.geom.MultiPoint');
goog.require('ol.geom.MultiPolygon');
goog.require('ol.geom.Point');
goog.require('ol.geom.Polygon');
goog.require('ol.geom.SharedVertices');
goog.require('ol.geom2');
goog.require('ol.geom2.LineString');
goog.require('ol.geom2.LineStringCollection');
goog.require('ol.geom2.Point');
goog.require('ol.geom2.PointCollection');
goog.require('ol.interaction');
goog.require('ol.interaction.ConditionType');
goog.require('ol.interaction.DoubleClickZoom');
goog.require('ol.interaction.Drag');
goog.require('ol.interaction.DragPan');
goog.require('ol.interaction.DragRotate');
goog.require('ol.interaction.DragRotateAndZoom');
goog.require('ol.interaction.DragZoom');
goog.require('ol.interaction.Interaction');
goog.require('ol.interaction.KeyboardPan');
goog.require('ol.interaction.KeyboardZoom');
goog.require('ol.interaction.MouseWheelZoom');
goog.require('ol.interaction.Select');
goog.require('ol.interaction.Touch');
goog.require('ol.interaction.TouchPan');
goog.require('ol.interaction.TouchRotate');
goog.require('ol.interaction.TouchZoom');
goog.require('ol.interaction.condition');
goog.require('ol.layer.Base');
goog.require('ol.layer.Group');
goog.require('ol.layer.Image');
goog.require('ol.layer.Layer');
goog.require('ol.layer.LayerProperty');
goog.require('ol.layer.LayerState');
goog.require('ol.layer.Tile');
goog.require('ol.layer.Vector');
goog.require('ol.layer.Vector2');
goog.require('ol.layer.VectorLayerEventType');
goog.require('ol.layer.VectorLayerRenderIntent');
goog.require('ol.math');
goog.require('ol.parser.AsyncObjectFeatureParser');
goog.require('ol.parser.AsyncStringFeatureParser');
goog.require('ol.parser.DomFeatureParser');
goog.require('ol.parser.GPX');
goog.require('ol.parser.GeoJSON');
goog.require('ol.parser.KML');
goog.require('ol.parser.ObjectFeatureParser');
goog.require('ol.parser.Parser');
goog.require('ol.parser.ReadFeaturesOptions');
goog.require('ol.parser.ReadFeaturesResult');
goog.require('ol.parser.StringFeatureParser');
goog.require('ol.parser.TopoJSON');
goog.require('ol.parser.WKT');
goog.require('ol.parser.XML');
goog.require('ol.parser.ogc.ExceptionReport');
goog.require('ol.parser.ogc.Filter');
goog.require('ol.parser.ogc.Filter_v1');
goog.require('ol.parser.ogc.Filter_v1_0_0');
goog.require('ol.parser.ogc.Filter_v1_1_0');
goog.require('ol.parser.ogc.GML');
goog.require('ol.parser.ogc.GML_v2');
goog.require('ol.parser.ogc.GML_v3');
goog.require('ol.parser.ogc.OWSCommon_v1');
goog.require('ol.parser.ogc.OWSCommon_v1_1_0');
goog.require('ol.parser.ogc.Versioned');
goog.require('ol.parser.ogc.WMSCapabilities');
goog.require('ol.parser.ogc.WMSCapabilities_v1');
goog.require('ol.parser.ogc.WMSCapabilities_v1_0_0');
goog.require('ol.parser.ogc.WMSCapabilities_v1_1');
goog.require('ol.parser.ogc.WMSCapabilities_v1_1_0');
goog.require('ol.parser.ogc.WMSCapabilities_v1_1_1');
goog.require('ol.parser.ogc.WMSCapabilities_v1_1_1_WMSC');
goog.require('ol.parser.ogc.WMSCapabilities_v1_3_0');
goog.require('ol.parser.ogc.WMTSCapabilities');
goog.require('ol.parser.ogc.WMTSCapabilities_v1_0_0');
goog.require('ol.parser.polyline');
goog.require('ol.proj');
goog.require('ol.proj.CH');
goog.require('ol.proj.EPSG2056');
goog.require('ol.proj.EPSG21781');
goog.require('ol.proj.EPSG3857');
goog.require('ol.proj.EPSG4326');
goog.require('ol.proj.Projection');
goog.require('ol.proj.ProjectionLike');
goog.require('ol.proj.Units');
goog.require('ol.proj.common');
goog.require('ol.renderer.Layer');
goog.require('ol.renderer.Map');
goog.require('ol.renderer.canvas');
goog.require('ol.renderer.canvas.ImageLayer');
goog.require('ol.renderer.canvas.Layer');
goog.require('ol.renderer.canvas.Map');
goog.require('ol.renderer.canvas.TileLayer');
goog.require('ol.renderer.canvas.VectorLayer');
goog.require('ol.renderer.canvas.VectorRenderer');
goog.require('ol.renderer.dom');
goog.require('ol.renderer.dom.ImageLayer');
goog.require('ol.renderer.dom.Layer');
goog.require('ol.renderer.dom.Map');
goog.require('ol.renderer.dom.TileLayer');
goog.require('ol.renderer.webgl');
goog.require('ol.renderer.webgl.ImageLayer');
goog.require('ol.renderer.webgl.Layer');
goog.require('ol.renderer.webgl.Map');
goog.require('ol.renderer.webgl.TileLayer');
goog.require('ol.renderer.webgl.VectorLayer2');
goog.require('ol.renderer.webgl.map.shader.Color');
goog.require('ol.renderer.webgl.map.shader.Default');
goog.require('ol.renderer.webgl.tilelayer.shader');
goog.require('ol.renderer.webgl.vectorlayer2.shader.LineStringCollection');
goog.require('ol.renderer.webgl.vectorlayer2.shader.PointCollection');
goog.require('ol.size');
goog.require('ol.source.BingMaps');
goog.require('ol.source.FeatureInfoSource');
goog.require('ol.source.Image');
goog.require('ol.source.ImageStatic');
goog.require('ol.source.ImageWMS');
goog.require('ol.source.MapQuestOSM');
goog.require('ol.source.MapQuestOpenAerial');
goog.require('ol.source.OSM');
goog.require('ol.source.Source');
goog.require('ol.source.Stamen');
goog.require('ol.source.Tile');
goog.require('ol.source.TileDebug');
goog.require('ol.source.TileImage');
goog.require('ol.source.TileJSON');
goog.require('ol.source.TileOptions');
goog.require('ol.source.TileWMS');
goog.require('ol.source.Vector');
goog.require('ol.source.Vector2');
goog.require('ol.source.WMSGetFeatureInfoMethod');
goog.require('ol.source.WMTS');
goog.require('ol.source.WMTSRequestEncoding');
goog.require('ol.source.XYZ');
goog.require('ol.source.wms');
goog.require('ol.sphere.NORMAL');
goog.require('ol.sphere.WGS84');
goog.require('ol.structs.Buffer');
goog.require('ol.structs.IntegerSet');
goog.require('ol.structs.LRUCache');
goog.require('ol.structs.PriorityQueue');
goog.require('ol.structs.RTree');
goog.require('ol.style');
goog.require('ol.style.Fill');
goog.require('ol.style.Icon');
goog.require('ol.style.IconLiteral');
goog.require('ol.style.LineLiteral');
goog.require('ol.style.Literal');
goog.require('ol.style.Point');
goog.require('ol.style.PointLiteral');
goog.require('ol.style.PolygonLiteral');
goog.require('ol.style.Rule');
goog.require('ol.style.Shape');
goog.require('ol.style.ShapeLiteral');
goog.require('ol.style.ShapeType');
goog.require('ol.style.Stroke');
goog.require('ol.style.StrokeDefaults');
goog.require('ol.style.Style');
goog.require('ol.style.Symbolizer');
goog.require('ol.style.Text');
goog.require('ol.style.TextLiteral');
goog.require('ol.tilegrid.TileGrid');
goog.require('ol.tilegrid.WMTS');
goog.require('ol.tilegrid.XYZ');
goog.require('ol.tilejson');
goog.require('ol.vec.Mat4');
goog.require('ol.webgl');
goog.require('ol.webgl.WebGLContextEventType');
goog.require('ol.webgl.shader');
