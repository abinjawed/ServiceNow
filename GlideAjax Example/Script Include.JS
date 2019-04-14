var GetEmailAddress = Class.create();
// Extend the global.AbstractAjaxProcessor class
GetEmailAddress.prototype = Object.extendsObject(global.AbstractAjaxProcessor,{
    // Define the getEmail function.  
    // Create a GlideRecord for the User table.
    // Use the sysparm_userID passed from the client side to retrieve a record from the User table.
    // Return the email address for the requested record
    getEmail: function() {
        var userRecord = new GlideRecord("sys_user");
        userRecord.get(this.getParameter('sysparm_userID'));
        return userRecord.email + '';
    },
    type: 'GetEmailAddress'
});
