var getincidentdetails = Class.create();
getincidentdetails.prototype = {
   initialize: function() {
   },
   getdetails: function (number) {
   try {
           var inc = [];
           var gr = new GlideRecord('incident');
				gr.addQuery('number',number);
				gr.query();
				if (gr.next())
				{
				   inc.push({
					   'Number' : gr.number + '',
					   'State' : gr.state.getDisplayValue() + '',
					   'Short Description': gr.short_description + '',
					   'Assignment Group': gr.assignment_group.getDisplayValue()
					});
					return inc;
					}
		} catch (e)
		{
				gs.error('error=',e);
		}
    },
    type: 'getincidentdetails'
	};
