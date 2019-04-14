
<!--- GlideAggregate example using addTrend function (counts incidents opened by year): --->

var incident = new GlideAggregate('incident');
incident.addAggregate('COUNT');
incident.addTrend('opened_at', 'Year');
incident.query();
while(incident.next()) {
 gs.print("For the month of " + incident.getValue('timeref') + " we have this many incidents: " + incident.getAggregate('COUNT'));
} 
