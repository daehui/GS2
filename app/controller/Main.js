Ext.define('GS2.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            
        },
        control: {
            'blog list' : {
            	itemtap: 'showPost'
            }
        }
    },
    
    /*e, e0pts 은 없어도 무방.*/
    showPost: function(list, index, target, record, e, e0pts) {
    	console.log(record.get('title'));
    }
});