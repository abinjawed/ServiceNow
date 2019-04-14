<!--- Execute Method orderBy --->

var incidentGR = new GlideRecord('incident');
incidentGR.orderBy('short_description');
incidentGR.query();
while(incidentGR.next()) {
 gs.print(incidentGR.number + ' ; ' + incidentGR.short_description);
}


<! -- by default, the orderBy method is ascending. If we wish to arrange the list of incidents as descending, we use the orderByDesc --->

var incidentGR = new GlideRecord('incident');
incidentGR.orderByDesc('short_description');
incidentGR.query();
while(incidentGR.next()) {
 gs.print(incidentGR.number + ' ; ' + incidentGR.short_description);
}

<!-- the setLimit method allows us to set a limit for a query. For example, if we only want 5 problem records to appear, then it will only list 5 problem records to be listed -->

var problemGR = new GlideRecord('problem');
problemGR.setLimit(5);
problemGR.query();
while(problemGR.next()) {
 gs.print(problemGR.number);
}

<!-- we can also combine 2 methods together -->

var problemGR = new GlideRecord('problem');
problemGR.orderBy('short_description');
problemGR.setLimit(5);
problemGR.query();
while(problemGR.next()) {
 gs.print(problemGR.short_description);
}
