import { Navigation, MapPin, Clock, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

export default function PartnerRoute() {
  const stops = [
    { id: 1, customer: 'Rajesh Kumar', address: '42, HSR Layout, Bangalore', time: '6:30 AM', phone: '+91 98765 43210', status: 'completed' },
    { id: 2, customer: 'Priya Sharma', address: '15, Koramangala 5th Block, Bangalore', time: '6:45 AM', phone: '+91 98765 43211', status: 'completed' },
    { id: 3, customer: 'Amit Patel', address: '88, Whitefield Main Road, Bangalore', time: '7:00 AM', phone: '+91 98765 43212', status: 'current' },
    { id: 4, customer: 'Sneha Reddy', address: '23, Indiranagar 2nd Stage, Bangalore', time: '7:15 AM', phone: '+91 98765 43213', status: 'pending' },
    { id: 5, customer: 'Vikram Shah', address: '56, Jayanagar 4th Block, Bangalore', time: '7:30 AM', phone: '+91 98765 43214', status: 'pending' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2>Delivery Route</h2>
        <p className="text-muted-foreground">Optimized route for today's deliveries</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Route Map</CardTitle>
              <Button variant="outline" size="sm">
                <Navigation className="w-4 h-4 mr-2" />
                Start Navigation
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Placeholder for map */}
            <div className="w-full h-[500px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h4 className="text-muted-foreground mb-2">Interactive Map</h4>
                <p className="text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                  Map showing optimized delivery route<br />
                  with real-time navigation
                </p>
                <Button className="mt-4 bg-primary hover:bg-primary/90">
                  Open Maps
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Route Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Route Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Total Stops</span>
                <span style={{ fontSize: '1.5rem', fontWeight: 600 }}>5</span>
              </div>
              <Separator className="my-2" />
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">Completed</span>
                <span className="text-green-600">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Remaining</span>
                <span className="text-orange-600">3</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Total Distance</span>
                <span>18.5 km</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Est. Time</span>
                <span>45 mins</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Start Time</span>
                <span>6:30 AM</span>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90">
              Update Status
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Delivery Stops */}
      <Card>
        <CardHeader>
          <CardTitle>Delivery Stops</CardTitle>
          <CardDescription>Complete deliveries in order for optimal route</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {stops.map((stop, index) => (
            <div key={stop.id}>
              <div className="flex items-start gap-4">
                {/* Step Indicator */}
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    stop.status === 'completed' 
                      ? 'bg-green-500 text-white' 
                      : stop.status === 'current'
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  {index < stops.length - 1 && (
                    <div className={`w-0.5 h-16 ${
                      stop.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>

                {/* Stop Details */}
                <div className={`flex-1 p-4 rounded-xl border-2 ${
                  stop.status === 'current' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-gray-200 bg-white'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="mb-1">{stop.customer}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground mb-1" style={{ fontSize: '0.875rem' }}>
                        <MapPin className="w-4 h-4" />
                        {stop.address}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground" style={{ fontSize: '0.875rem' }}>
                        <Clock className="w-4 h-4" />
                        {stop.time}
                      </div>
                    </div>
                    {stop.status === 'completed' ? (
                      <Badge className="bg-green-100 text-green-700">Delivered</Badge>
                    ) : stop.status === 'current' ? (
                      <Badge className="bg-primary">In Progress</Badge>
                    ) : (
                      <Badge variant="secondary">Pending</Badge>
                    )}
                  </div>

                  {stop.status !== 'completed' && (
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                      {stop.status === 'current' && (
                        <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                          Mark Delivered
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
