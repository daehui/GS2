Ext.define('GS2.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype: 'contactform',
	
	requires: [
	       'Ext.form.FieldSet',
	       'Ext.field.Email'
	],
	
	config: {
		title: 'Contact',
		iconCls: 'user',
		url:'contact.jsp',
		
		items:[
		     {
		    	 xtype: 'fieldset',
		    	 title: 'Contact Us',
		    	 instructions: '(email is not required)',
		    	 
			    	 items: [
				      {
				    	  xtype: 'textfield',
				    	  name: 'name',
				    	  label: 'Name'
				      },
				      {
				    	  xtype: 'emailfield',
				    	  name: 'email',
				    	  label: 'Email'
				      },
				      {
				    	  xtype: 'textareafield',
				    	  name: 'message',
				    	  label: 'Message'
				      }
				 ]
		     },
		     {
		    	 xtype: 'button',
		    	 text: 'Send',
		    	 ui: 'confirm',
		    	 
		    	 handler: function() {
		    		 this.up('contactform').submit();
		    		 /*Ext.Msg.alert("친구 추가", "친구 추가를 완료했습니다.", Ext.EmptyFn);*/
		    	 }
		     },
		     {
		    	 xtype: 'button',
		    	 text: 'Cancel',
		    	 ui: 'cancel',
		    	 
		    	 handler: function() {
		    		/* Ext.Msg.alert("취소", "취소하셨습니다.", Ext.EmptyFn);*/
		    	 }
		     }
		]
	}
});