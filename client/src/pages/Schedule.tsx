import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import './Schedule.css';

export default function Schedule() {
  const [isLoading, setIsLoading] = useState(true);

  // Schedule data for different days - Updated with correct information from brochure
  const scheduleData = {
    day1: {
      date: "October 9, 2025",
      title: "Opening Day - Esports Begins",
      events: [
        {
          time: "09:00 AM",
          title: "Festival Inauguration",
          description: "Welcome ceremony and festival kickoff",
          venue: "Samvaad (9th Floor)",
          type: "General",
          duration: "1 hour"
        },
        {
          time: "10:00 AM",
          title: "CRCE Esports - BGMI Registration",
          description: "Battlegrounds Mobile India player registration and briefing",
          venue: "Computer Lab",
          type: "Esports",
          duration: "1 hour"
        },
        {
          time: "11:00 AM",
          title: "CRCE Esports - BGMI Qualifiers",
          description: "Battlegrounds Mobile India tournament begins with 400+ players",
          venue: "Computer Lab",
          type: "Esports",
          duration: "6 hours"
        }
      ]
    },
    day2: {
      date: "October 10, 2025",
      title: "RoboRift 2.0 Championship Day",
      events: [
        {
          time: "09:00 AM",
          title: "RoboRift 2.0 - Team Registration",
          description: "120+ teams register for the intercollegiate robot fighting championship",
          venue: "Robotics Lab",
          type: "Robotics",
          duration: "1 hour"
        },
        {
          time: "10:00 AM",
          title: "RoboRift 2.0 - Robot Inspection",
          description: "Technical inspection and safety checks for all competing robots",
          venue: "Robotics Lab",
          type: "Robotics",
          duration: "1 hour"
        },
        {
          time: "11:00 AM",
          title: "RoboRift 2.0 - Preliminary Rounds",
          description: "Intercollegiate robot fighting competition begins",
          venue: "Robotics Lab",
          type: "Robotics",
          duration: "4 hours"
        },
        {
          time: "03:00 PM",
          title: "RoboRift 2.0 - Finals",
          description: "Championship round of robot fighting - the ultimate showdown",
          venue: "Robotics Lab",
          type: "Robotics",
          duration: "2 hours"
        }
      ]
    },
    day3: {
      date: "October 11, 2025",
      title: "Esports Finals Day",
      events: [
        {
          time: "09:00 AM",
          title: "CRCE Esports - BGMI Finals",
          description: "Battlegrounds Mobile India championship match",
          venue: "Computer Lab",
          type: "Esports",
          duration: "3 hours"
        },
        {
          time: "12:00 PM",
          title: "CRCE Esports - Valorant Finals",
          description: "Valorant championship match - the ultimate gaming showdown",
          venue: "Computer Lab",
          type: "Esports",
          duration: "3 hours"
        }
      ]
    },
    day4: {
      date: "October 12, 2025",
      title: "Synergy Hackathon Finals & Awards",
      events: [
        {
          time: "09:00 AM",
          title: "Synergy Hackathon - Problem Statement Release",
          description: "Hardware & Simulation hackathon kickoff with 100+ participants",
          venue: "Computer Lab",
          type: "Hackathon",
          duration: "1 hour"
        },
        {
          time: "10:00 AM",
          title: "Synergy Hackathon - Development Phase",
          description: "Teams begin working on innovative hardware solutions",
          venue: "Computer Lab",
          type: "Hackathon",
          duration: "6 hours"
        },
        {
          time: "04:00 PM",
          title: "Synergy Hackathon - Presentations",
          description: "Teams present their innovative hardware and simulation solutions",
          venue: "Main Auditorium",
          type: "Hackathon",
          duration: "2 hours"
        },
        {
          time: "06:00 PM",
          title: "Synergy Hackathon - Judging",
          description: "Expert panel evaluates all submissions and selects winners",
          venue: "Main Auditorium",
          type: "Hackathon",
          duration: "1 hour"
        },
        {
          time: "07:00 PM",
          title: "Awards Ceremony",
          description: "Prize distribution for all competitions with ₹70K+ prize pool",
          venue: "Samvaad (9th Floor)",
          type: "General",
          duration: "1 hour"
        }
      ]
    }
  };

  const getEventTypeColor = (type: string) => {
    const colors = {
      'General': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Esports': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Hackathon': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Robotics': 'bg-red-500/20 text-red-400 border-red-500/30'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  const getEventTypeIcon = (type: string) => {
    const icons = {
      'General': 'fas fa-calendar',
      'Esports': 'fas fa-gamepad',
      'Hackathon': 'fas fa-microchip',
      'Robotics': 'fas fa-robot'
    };
    return icons[type as keyof typeof icons] || 'fas fa-calendar';
  };

  const downloadSchedule = () => {
    window.open('https://drive.google.com/file/d/1b5EGo9VlXD4zJNBo1lm3jZamyVQi-Nai/view?usp=drive_link', '_blank');
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg">Loading Schedule...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
            Event Schedule
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-200">
            Track every moment of Crescendo 2025 - from RoboRift battles to Synergy innovations
          </p>
        </div>

        {/* Download Schedule Button */}
        <div className="text-center mb-12">
          <Button
            onClick={downloadSchedule}
            className="download-button bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 px-8 text-lg rounded-full shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
          >
            <i className="fas fa-download mr-2" />
            Download Full Schedule
          </Button>
        </div>

        {/* Schedule Tabs */}
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 bg-card/50 backdrop-blur-sm border border-border">
            <TabsTrigger value="day1" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Day 1
            </TabsTrigger>
            <TabsTrigger value="day2" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Day 2
            </TabsTrigger>
            <TabsTrigger value="day3" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Day 3
            </TabsTrigger>
            <TabsTrigger value="day4" className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground">
              Day 4
            </TabsTrigger>
          </TabsList>

          {Object.entries(scheduleData).map(([dayKey, dayData]) => (
            <TabsContent key={dayKey} value={dayKey} className="space-y-6">
              <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:shadow-accent/10 transition-all duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="font-cinzel text-3xl text-foreground">
                    {dayData.title}
                  </CardTitle>
                  <p className="text-xl text-accent font-semibold">
                    {dayData.date}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dayData.events.map((event, index) => (
                    <div
                      key={index}
                      className="schedule-item group relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card/80 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 hover:scale-[1.02]"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                            <i className={`${getEventTypeIcon(event.type)} text-accent text-xl`} />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-cinzel text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                              {event.title}
                            </h3>
                            <Badge className={`event-badge ${getEventTypeColor(event.type)} border`}>
                              {event.type}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-3 group-hover:text-foreground transition-colors duration-300">
                            {event.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <i className="fas fa-clock text-accent" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <i className="fas fa-map-marker-alt text-accent" />
                              <span>{event.venue}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <i className="fas fa-hourglass-half text-accent" />
                              <span>{event.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Key Highlights */}
        <div className="mt-16">
          <Card className="bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <CardHeader>
              <CardTitle className="font-cinzel text-2xl text-center text-foreground">
                Schedule Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group schedule-highlight">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500/30 transition-colors duration-300">
                    <i className="fas fa-robot text-red-400 text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-2 text-foreground">RoboRift 2.0</h3>
                  <p className="text-muted-foreground text-sm">
                    October 10th - 120+ teams in intercollegiate robot fighting championship
                  </p>
                </div>
                
                <div className="text-center group schedule-highlight">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <i className="fas fa-microchip text-purple-400 text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-2 text-foreground">Synergy Hackathon</h3>
                  <p className="text-muted-foreground text-sm">
                    October 12 - 100+ participants in Hardware & Simulation innovation
                  </p>
                </div>
                
                <div className="text-center group schedule-highlight">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors duration-300">
                    <i className="fas fa-gamepad text-green-400 text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-2 text-foreground">CRCE Esports</h3>
                  <p className="text-muted-foreground text-sm">
                    October 9-11 - 400+ players in BGMI and Valorant championships
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
