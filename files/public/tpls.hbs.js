Ember.TEMPLATES['wejsdoc'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"bs-docs-header\">\n  <div class=\"container\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "project.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n  </div>\n</div>\n\n<div class=\"container bs-docs-container\">\n  <div class=\"row\">\n    <div class=\"col-md-9\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    <div class=\"col-md-3\">\n      ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "project.menu", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['wejsdoc/dpage'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "project.html", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  
});Ember.TEMPLATES['wejsdoc/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "project.html", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  
});Ember.TEMPLATES['wejsdocs'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-messenger-public-box'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <span><img src=\"/core/images/loading.gif\"></span>\n      ");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'controller': ("MessengerMessages")
  },hashTypes:{'controller': "STRING"},hashContexts:{'controller': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/messages-public-room", "messages", options) : helperMissing.call(depth0, "render", "messenger/messages-public-room", "messages", options))));
  data.buffer.push("\n\n        <div class=\"footer\">\n          <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendMessage", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n            <div class=\"input-group\">\n\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("messageNew"),
    'value': ("messageNew"),
    'type': ("text"),
    'placeholder': ("messagePlaceholder"),
    'classNames': ("input-xs")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n              <span class=\"input-group-btn\">\n                <button  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-xs btn-primary\" type=\"submit\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send", options) : helperMissing.call(depth0, "t", "Send", options))));
  data.buffer.push("</button>\n              </span>\n            </div>\n          </form>\n        </div>\n\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"public-room-container\">\n<div class=\"messenger-column\">\n  <div class=\"messenger-chat-area\">\n    <div class=\"contact-chat\">\n      <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"header\">\n        <span class=\"contact-name\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Public", options) : helperMissing.call(depth0, "t", "Public", options))));
  data.buffer.push("</span>\n      </div>\n      <div class=\"actions\">\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"remove btn btn-danger btn-xs pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </div>\n      \n      ");
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  stack1 = helpers['if'].call(depth0, "isListOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-messenger'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"messenger\">\n          <div class=\"header\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Messenger", options) : helperMissing.call(depth0, "t", "Messenger", options))));
  data.buffer.push("\n          <button type=\"button\" class=\"remove btn btn-default btn-xs pull-right\">\n            <span class=\"glyphicon glyphicon-wrench\"></span>\n          </button>\n          </div>\n          <ul class=\"nav nav-list friendlist contact-list\">\n            ");
  stack1 = helpers.each.call(depth0, "filteredContacts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </ul>\n          <ul class=\"nav nav-list rooms-list contact-list\">\n            <li class=\"global-room\">\n              <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openPublicBox", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Public room", options) : helperMissing.call(depth0, "t", "Public room", options))));
  data.buffer.push("\n              </a>\n            </li>\n          </ul>\n          <div class=\"search-area\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("srcCriteria"),
    'placeholder': ("Procure ...")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n        </div>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/contact", "", options) : helperMissing.call(depth0, "render", "messenger/contact", "", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"messenger-off\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          <span class=\"ui-icon ui-icon-person\"></span>\n          <span class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Messenger", options) : helperMissing.call(depth0, "t", "Messenger", options))));
  data.buffer.push("</span>\n          <button type=\"button\" class=\"remove btn btn-default btn-xs pull-right\">\n            <span class=\"glyphicon glyphicon-wrench\"></span>\n          </button>\n        </div>\n      ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/box", "", options) : helperMissing.call(depth0, "render", "messenger/box", "", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"messenger-area-wrapper\">\n  <div class=\"messenger-column\">\n    <div class=\"messenger-area\">\n      ");
  stack1 = helpers['if'].call(depth0, "isListOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n\n  ");
  stack1 = helpers.each.call(depth0, "openContacts", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-messenger-public-box'] || (depth0 && depth0['we-messenger-public-box']),options={hash:{
    'store': ("store")
  },hashTypes:{'store': "ID"},hashContexts:{'store': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-messenger-public-box", options))));
  data.buffer.push("\n\n</div>");
  return buffer;
  
});Ember.TEMPLATES['messenger/box'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n          <span class=\"messenger-status\"><img width='17px' src=\"/core/images/connected.png\"></span>\n        ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n          <span class=\"messenger-status\"><img width='17px' src=\"/core/images/disconnected.png\"></span>\n        ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div>\n          ");
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'id': ("boxId")
  },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/messages", "messages", options) : helperMissing.call(depth0, "render", "messenger/messages", "messages", options))));
  data.buffer.push("\n\n          ");
  stack1 = helpers['if'].call(depth0, "isWriting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <div class=\"footer\">\n            <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendMessage", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" method=\"post\">\n              <div class=\"input-group\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("messageNew"),
    'value': ("messageNew"),
    'type': ("text"),
    'placeholder': ("messagePlaceholder"),
    'classNames': ("input-xs")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n                <span class=\"input-group-btn\">\n                  <button  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendMessage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-xs btn-primary\" type=\"submit\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send", options) : helperMissing.call(depth0, "t", "Send", options))));
  data.buffer.push("</button>\n                </span>\n              </div>\n            </form>\n          </div>\n        </div>\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n            <span><img src=\"/core/images/loading.gif\"></span>\n          ");
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"contact is-writing\">\n              \n              ");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'user': ("")
  },hashTypes:{'user': "ID"},hashContexts:{'user': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("\n              <span class=\"small is-writing-text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "messenger.contact.writing", options) : helperMissing.call(depth0, "t", "messenger.contact.writing", options))));
  data.buffer.push("</span>\n            </div>\n          ");
  return buffer;
  }

  data.buffer.push("<div class=\"messenger-column\">\n  <div class=\"messenger-chat-area\">\n    <div class=\"contact-chat\" tabindex=\"0\">\n      <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"header\">\n        ");
  stack1 = helpers['if'].call(depth0, "isOnline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        \n        <span class=\"contact-name\">");
  stack1 = helpers._triageMustache.call(depth0, "displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n      </div>\n      <div class=\"actions\">\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeList", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"remove btn btn-danger btn-xs pull-right\">\n          <span class=\"glyphicon glyphicon-remove\"></span>\n        </button>\n      </div>\n\n      <div class=\"action-bar\">\n\n      </div>\n\n      ");
  stack1 = helpers['if'].call(depth0, "isListOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['messenger/contact'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      <span class=\"contact-status\"><img src=\"/core/images/connected.png\"></span>\n    ");
  }

  data.buffer.push("<li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("contactClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "startTalk", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" >\n    \n    <span class=\"avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'user': ("")
  },hashTypes:{'user': "ID"},hashContexts:{'user': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("</span>\n    ");
  stack1 = helpers['if'].call(depth0, "isOnline", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </a>\n</li>");
  return buffer;
  
});Ember.TEMPLATES['messenger/message-room'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("messageClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\n  \n  <span class=\"avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'user': ("fromId")
  },hashTypes:{'user': "ID"},hashContexts:{'user': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("</span>\n  <small>");
  stack1 = helpers._triageMustache.call(depth0, "fromId.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</small>\n  <span class=\"message\">");
  stack1 = helpers._triageMustache.call(depth0, "content.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n  <div class=\"message-footer\">\n    <span class=\"createdAt\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "createdAt", options) : helperMissing.call(depth0, "format-date", "createdAt", options))));
  data.buffer.push("\n    </span>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['messenger/message'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        <i title=\"read\" class=\"glyphicon glyphicon-ok-circle text-success\"> </i>\n      ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n        <i title=\"unread\" class=\"glyphicon glyphicon-question-sign\"> </i>\n      ");
  }

  data.buffer.push("<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("messageClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\n  \n  <span class=\"avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'user': ("fromId")
  },hashTypes:{'user': "ID"},hashContexts:{'user': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("</span>\n  <span class=\"message\">");
  stack1 = helpers._triageMustache.call(depth0, "content.content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n  <div class=\"message-footer\">\n    <span class=\"createdAt\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "createdAt", options) : helperMissing.call(depth0, "format-date", "createdAt", options))));
  data.buffer.push("\n    </span>\n    <span class=\"small read-status\">\n      ");
  stack1 = helpers['if'].call(depth0, "read", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </span>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['messenger/messages-public-room'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'controller': ("MessengerMessage")
  },hashTypes:{'controller': "STRING"},hashContexts:{'controller': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/message-room", "", options) : helperMissing.call(depth0, "render", "messenger/message-room", "", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div scrollto=\"bottom\" id=\"messengerBox-public\" class=\"messages\">\n  ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['messenger/messages-room'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/message-room", "", options) : helperMissing.call(depth0, "render", "messenger/message-room", "", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['messenger/messages'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "messenger/message", "", options) : helperMissing.call(depth0, "render", "messenger/message", "", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/navbar", options) : helperMissing.call(depth0, "partial", "partials/navbar", options))));
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<!-- Footer -->\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/footer", options) : helperMissing.call(depth0, "partial", "partials/footer", options))));
  data.buffer.push("\n\n\n\n");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar-modal'] || (depth0 && depth0['we-avatar-modal']),options={hash:{
    'store': ("store")
  },hashTypes:{'store': "ID"},hashContexts:{'store': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar-modal", options))));
  data.buffer.push("\n\n");
  return buffer;
  
});Ember.TEMPLATES['home'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        Install We.js\n      ");
  }

  data.buffer.push("<!-- Page Header -->\n<main class=\"bs-docs-masthead\" role=\"main\">\n  <div class=\"container\">\n    <h1>We.js</h1>\n    <br><br>\n    <p class=\"lead\">A node.js framework for real time applications, sites or blogs!</p>\n    <p class=\"lead\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-outline-inverse btn-lg")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data},helper ? helper.call(depth0, "page", 1, options) : helperMissing.call(depth0, "link-to", "page", 1, options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n  </div>\n</main>\n\n<div class=\"bs-docs-featurette\">\n  <div class=\"container\">\n    <h2 class=\"bs-docs-featurette-title\">We.js makes building web applications simpler and faster.</h2>\n    <p class=\"lead\">We.js core has many built-in features but you can create plugins to extend server and client resources.</p>\n\n    <hr class=\"half-rule\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <a href=\"https://github.com/wejs?query=plugin\" target=\"_blank\">\n          <img alt=\"Generators\" src=\"/public/theme/we-theme-site-wejs/images/plugins.png\">\n        </a>\n        <h3>Plugins</h3>\n        <p>We.js core has many features but you can create plugins for extend server and client resources.</p>\n      </div>\n      <div class=\"col-sm-4\">\n        <a href=\"https://github.com/wejs?query=theme\" target=\"_blank\">\n          <img src=\"/public/theme/we-theme-site-wejs/images/themes.png\">\n        </a>\n        <h3>Themes</h3>\n        <p>Be free to create beautiful themes for your own projects. Themes have the power to extend default plugin templates</p>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <a href=\"https://github.com/wejs/generator-wejs\" target=\"_blank\">\n          <img alt=\"Generators\" src=\"/public/theme/we-theme-site-wejs/images/generators.png\">\n        </a>\n        <h3>Generators</h3>\n        <p>Generate one functional project structure in seconds with <a alt=\"We.js plugins\" href=\"https://github.com/wejs/generator-wejs\">we.js generator</a>.</p>\n      </div>\n    </div>\n\n    <hr class=\"half-rule\">\n\n    <h2 id=\"features\">Features</h2>\n\n    <hr class=\"half-rule\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <span class=\"glyphicon glyphicon-user bs-docs-booticon-lg bs-docs-booticon-outline\"></span>\n        <h3>User</h3>\n        <p>Login, regiter, change password profile, and user management.</p>\n      </div>\n      <div class=\"col-sm-3\">\n        <span class=\"glyphicon glyphicon glyphicon-comment bs-docs-booticon-lg bs-docs-booticon-outline\"></span>\n        <h3>Comment</h3>\n        <p>Comment upon any model defined.</p>\n      </div>\n      <div class=\"col-sm-3\">\n        <span class=\"glyphicon glyphicon-picture bs-docs-booticon-lg bs-docs-booticon-outline\"></span>\n        <h3>Image</h3>\n        <p>Upload, resize and load images in multiple styles.</p>\n      </div>\n      <div>\n        <span class=\"glyphicon glyphicon-list-alt bs-docs-booticon-lg bs-docs-booticon-outline\"></span>\n        <h3>Page</h3>\n        <p>Write html texts with suport to tags, categories and images.</p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-sm-3\">\n        <span class=\"glyphicon glyphicon-tag bs-docs-booticon-lg bs-docs-booticon-outline\"></span>\n        <h3>Terms and Tags</h3>\n        <p>Configurable term field for any model with suport to vocabulary.</p>\n      </div>\n      <div class=\"col-sm-3\">\n        <span class=\"glyphicon glyphicon-globe bs-docs-booticon-lg bs-docs-booticon-outline\"></span>\n        <h3>Group</h3>\n        <p>Groups are a fabulous way to share content and conversation, either privately or with the world.</p>\n      </div>\n      <div class=\"col-sm-3\">\n        <span class=\"glyphicon glyphicon-share-alt bs-docs-booticon-lg bs-docs-booticon-outline\"></span>\n        <h3>Post</h3>\n        <p>Use the sharebox to share texts, videos, images and wembeds to groups and users.</p>\n      </div>\n      <div class=\"col-sm-3\">\n        <span class=\"glyphicon glyphicon-cog bs-docs-booticon-lg bs-docs-booticon-outline\"></span>\n        <h3>Administrative interface</h3>\n        <p>Clean interface to manage your project resources.</p>\n      </div>\n    </div>\n\n    <hr class=\"half-rule\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-10 col-sm-offset-1\">\n        <h2>Real time features like we.js chat box:</h2>\n        <br><br>\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-chat-box'] || (depth0 && depth0['we-chat-box']),options={hash:{
    'roomId': ("1")
  },hashTypes:{'roomId': "STRING"},hashContexts:{'roomId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-chat-box", options))));
  data.buffer.push("\n      </div>\n    </div>\n\n    <hr class=\"half-rule\">\n\n    <p class=\"lead\">We.js and related modules is open source. It's hosted, developed, and maintained on GitHub.</p>\n    <a href=\"https://github.com/wejs/we\" class=\"btn btn-outline btn-lg\">View the GitHub project</a>\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/footer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <li>\n        <a target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("socialLinks.twitter")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n          <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i>\n          </span>\n        </a>\n      </li>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <li>\n        <a target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("socialLinks.facebook")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n          <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i>\n          </span>\n        </a>\n      </li>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <li>\n        <a target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("socialLinks.github")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n          <span class=\"fa-stack fa-lg\">\n            <i class=\"fa fa-circle fa-stack-2x\"></i>\n            <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i>\n          </span>\n        </a>\n      </li>\n    ");
  return buffer;
  }

  data.buffer.push("<footer class=\"bs-docs-footer\" role=\"contentinfo\">\n  <div class=\"container\">\n    <div class=\"bs-docs-social\">\n      <ul class=\"bs-docs-social-buttons\">\n        <li>\n          <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=wejs&amp;repo=we&amp;type=watch&amp;count=true\" width=\"100\" height=\"20\" title=\"Star on GitHub\"></iframe>\n        </li>\n        <li>\n          <iframe class=\"github-btn\" src=\"http://ghbtns.com/github-btn.html?user=wejs&amp;repo=we&amp;type=fork&amp;count=true\" width=\"102\" height=\"20\" title=\"Fork on GitHub\"></iframe>\n        </li>\n        <li class=\"follow-btn\">\n          <iframe id=\"twitter-widget-1\" scrolling=\"no\" frameborder=\"0\" allowtransparency=\"true\" src=\"http://platform.twitter.com/widgets/follow_button.a5bbbb7216610af1306d56b0f28a67d7.en.html#_=1424192283453&amp;dnt=false&amp;id=twitter-widget-1&amp;lang=en&amp;screen_name=we_js&amp;show_count=true&amp;show_screen_name=true&amp;size=m\" class=\"twitter-follow-button twitter-follow-button\" title=\"Twitter Follow Button\" data-twttr-rendered=\"true\" style=\"width: 240px; height: 20px;\"></iframe>\n        </li>\n      </ul>\n    </div>\n\n\n    <p>Built with a lot of work and love by <a href=\"https://twitter.com/mdo\" target=\"_blank\">@albertosouza</a>.</p>\n    <p>Maintained by the <a href=\"https://github.com/orgs/wejs/people\">core team</a>.</p>\n    <p>Code licensed under MIT.</p>\n    <p>Theme from <a href=\"http://bootswatch.com/sandstone/\">bootswatch</a> and bootstrap docs</p>\n    <br>\n\n    <ul class=\"list-inline text-center\">\n    ");
  stack1 = helpers['if'].call(depth0, "socialLinks.twitter", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "socialLinks.facebook", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "socialLinks.github", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n    <p class=\"copyright text-muted\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'appNameBinding': ("configs.client.publicVars.appName")
  },hashTypes:{'appNameBinding': "STRING"},hashContexts:{'appNameBinding': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "app.copyright", options) : helperMissing.call(depth0, "t", "app.copyright", options))));
  data.buffer.push("\n      - <a href=\"http://wejs.org\">We.js powered!</a>\n    </p>\n  </div>\n</footer>");
  return buffer;
  
});Ember.TEMPLATES['partials/header'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<!-- Page Header -->\n<!-- Set your background image for this header on the line below. -->\n<header class=\"intro-header\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("blogBgImageStyle")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n        <div class=\"site-heading\">\n          <h1>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n          <hr class=\"small\">\n          <span class=\"subheading\">");
  stack1 = helpers._triageMustache.call(depth0, "subTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>");
  return buffer;
  
});Ember.TEMPLATES['partials/navbar'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <img class=\"img-responsive navbar-logo\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("configs.appLogo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "configs.appName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = helpers['if'].call(depth0, "userOauthServer", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <li>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': (" navbar-login-buttom navbar-btn")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authRegister", options) : helperMissing.call(depth0, "link-to", "authRegister", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <li>\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("navbar-login-buttom navbar-btn")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authLogin", options) : helperMissing.call(depth0, "link-to", "authLogin", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </li>\n          ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <i class=\"glyphicon glyphicon-log-in\"></i>\n                 ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Login", options) : helperMissing.call(depth0, "t", "Login", options))));
  data.buffer.push("\n              ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-auth-modal-login'] || (depth0 && depth0['we-auth-modal-login']),options={hash:{
    'tagName': ("li")
  },hashTypes:{'tagName': "STRING"},hashContexts:{'tagName': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-auth-modal-login", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <i class=\"glyphicon glyphicon-plus\"></i>\n              <i class=\"glyphicon glyphicon-user\"></i>\n               ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Register", options) : helperMissing.call(depth0, "t", "Register", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<div class=\"navbar navbar-default\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("navbar-brand")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "home", options) : helperMissing.call(depth0, "link-to", "home", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['we-menu'] || (depth0 && depth0['we-menu']),options={hash:{
    'menuName': ("main"),
    'classNames': ("nav navbar-nav")
  },hashTypes:{'menuName': "STRING",'classNames': "STRING"},hashContexts:{'menuName': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-menu", options))));
  data.buffer.push("\n\n      ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'controller': ("UserMenu")
  },hashTypes:{'controller': "STRING"},hashContexts:{'controller': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user/usermenu", "currentUser", options) : helperMissing.call(depth0, "render", "user/usermenu", "currentUser", options))));
  data.buffer.push("\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        </li>\n        ");
  stack1 = helpers.unless.call(depth0, "isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </ul>\n\n    </div>\n  </div>\n</div>\n\n\n<!-- Navigation -->\n");
  return buffer;
  
});Ember.TEMPLATES['partials/sidebar'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"col-md-3\" role=\"complementary\">\n  <nav class=\"bs-docs-sidebar hidden-print hidden-xs hidden-sm affix-top\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-menu'] || (depth0 && depth0['we-menu']),options={hash:{
    'menuName': ("sidebar"),
    'classNames': ("nav bs-docs-sidenav")
  },hashTypes:{'menuName': "STRING",'classNames': "STRING"},hashContexts:{'menuName': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-menu", options))));
  data.buffer.push("\n  </nav>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['auth/RegisterForm'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<!-- Page Header -->\n<div class=\"bs-docs-header\" id=\"content\">\n  <div class=\"container\">\n    <h1>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Create account", options) : helperMissing.call(depth0, "t", "Create account", options))));
  data.buffer.push("</h1>\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "subTitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  </div>\n</div>\n\n<!-- Main Content -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n      <div class=\"form-signup\">\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n        <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" name=\"createAccountForm\" class=\"user-signup-form\" method=\"POST\">\n          <h4>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.register.description", options) : helperMissing.call(depth0, "t", "auth.register.description", options))));
  data.buffer.push("</h4>\n          <!-- input: username -->\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <label for=\"name\" class=\"input-group-addon\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n              </label>\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("username"),
    'value': ("user.username"),
    'type': ("text"),
    'placeholderTranslation': ("auth.register.username.label"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n          </div>\n          <!-- /input: username -->\n\n          <!-- input: email -->\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <label for=\"email\" class=\"input-group-addon\">\n                <span class=\"glyphicon glyphicon-envelope\"></span>\n              </label>\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("user.email"),
    'type': ("email"),
    'placeholderTranslation': ("auth.register.email.label"),
    'classNames': ("form-control input-lg"),
    'required': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'classNames': "STRING",'required': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n          </div>\n          <!-- /input: email -->\n\n\n          <!-- input: confirm email -->\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <label for=\"confirmEmail\" class=\"input-group-addon\">\n                <span class=\"glyphicon glyphicon-envelope\"></span>\n              </label>\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("confirmEmail"),
    'value': ("user.confirmEmail"),
    'type': ("email"),
    'placeholderTranslation': ("auth.register.confirmEmail.label"),
    'classNames': ("form-control input-lg"),
    'required': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'classNames': "STRING",'required': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n          </div>\n          <!-- input: confirm-email -->\n\n          <!-- input: password -->\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <label for=\"password\" class=\"input-group-addon\">\n                <span class=\"glyphicon glyphicon-lock\"> </span>\n              </label>\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("password"),
    'value': ("user.password"),
    'type': ("password"),
    'placeholderTranslation': ("auth.register.password.label"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n              <!-- input: confirm-password -->\n              <label for=\"confirm-password\" class=\"sr-only input-group-btn\">\n\n              </label>\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("confirmPassword"),
    'value': ("user.confirmPassword"),
    'type': ("password"),
    'placeholderTranslation': ("auth.register.confirmPassword.label"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n              <!-- /input: confirm-password -->\n            </div>\n          </div>\n          <!-- /input: password -->\n          <hr>\n          <h4>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.register.optionalInformations", options) : helperMissing.call(depth0, "t", "auth.register.optionalInformations", options))));
  data.buffer.push("</h4>\n          <!-- input: displayName -->\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <label for=\"displayName\" class=\"input-group-addon\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n              </label>\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("displayName"),
    'value': ("user.displayName"),
    'type': ("text"),
    'placeholderTranslation': ("auth.register.displayName.label"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n            </div>\n          </div>\n          <!-- /input: displayName -->\n\n          <hr>\n\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <label for=\"language\" class=\"input-group-addon\">\n                <span class=\"glyphicon glyphicon-globe\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.register.language.label", options) : helperMissing.call(depth0, "t", "auth.register.language.label", options))));
  data.buffer.push("\n              </label> ");
  data.buffer.push(escapeExpression(helpers.log.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "select", {hash:{
    'name': ("language"),
    'value': ("user.language"),
    'content': ("defaultlanguages"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "STRING",'value': "ID",'content': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'content': depth0,'classNames': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n            </div>\n          </div>\n\n          <hr>\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n          <div class=\"form-group\">\n            <div class=\"input-group\">\n              <button name=\"registerUser\" class=\"btn btn-lg btn-success\" type=\"submit\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Sign up", options) : helperMissing.call(depth0, "t", "Sign up", options))));
  data.buffer.push("\n                <span class=\"glyphicon glyphicon-chevron-right\"> </span>\n              </button>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n\n    </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-auth-modal-login'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn navbar-login-buttom navbar-btn\">\n  <span class=\"glyphicon glyphicon-log-in\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Login", options) : helperMissing.call(depth0, "t", "Login", options))));
  data.buffer.push("\n</a>\n\n<!-- Modal -->\n<div class=\"modal\" id=\"AuthLoginModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n<form class=\"form center-block\" role=\"form\" name=\"loginForm\" method=\"post\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n\n<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Login Form", options) : helperMissing.call(depth0, "t", "Login Form", options))));
  data.buffer.push("\n</div>\n\n<div class=\"modal-body\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n  <!-- form-login -->\n  <div class=\"form-login\">\n      <div class=\"form-group\">\n        <label class=\"sr-only\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Email address", options) : helperMissing.call(depth0, "t", "Email address", options))));
  data.buffer.push("</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("controller.email"),
    'type': ("email"),
    'placeholder': ("controller.emailPlaceholder"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"sr-only\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Password", options) : helperMissing.call(depth0, "t", "Password", options))));
  data.buffer.push("</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("controller.password"),
    'type': ("password"),
    'placeholder': ("controller.passwordPlaceholder"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n\n    <p class=\"login-form-links\">\n      <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goToForgotPaswordPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"link\" href=\"/auth/forgot-password\">\n        <span class=\"glyphicon glyphicon-question-sign\"></span>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Forgot password?", options) : helperMissing.call(depth0, "t", "Forgot password?", options))));
  data.buffer.push("\n      </a>\n      |\n      <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goToRegisterPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"link\" href=\"/auth/reset-password\">\n        <span class=\"glyphicon glyphicon-log-in\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Register", options) : helperMissing.call(depth0, "t", "Register", options))));
  data.buffer.push("\n      </a>\n    </p>\n\n  </div>\n  <!-- /form-login -->\n\n</div>\n\n<div class=\"modal-footer\">\n\n<div class=\"row\">\n  <div class=\" col-sm-6\">\n    <button id=\"loginButton\" class=\"pull-left btn btn-primary\" type=\"submit\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Sign in", options) : helperMissing.call(depth0, "t", "Sign in", options))));
  data.buffer.push("</button>\n  </div>\n</div>\n\n</form>\n\n\n    </div>\n  </div>\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['page'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"bs-docs-header\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("headerImage")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <div class=\"container\">\n    <h1>");
  stack1 = helpers._triageMustache.call(depth0, "record.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    <h5 class=\"subheading\">");
  data.buffer.push(escapeExpression((helper = helpers.html || (depth0 && depth0.html),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "record.about", options) : helperMissing.call(depth0, "html", "record.about", options))));
  data.buffer.push("</h5>\n  </div>\n</div>\n\n<div class=\"container bs-docs-container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['user'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"user-admin-actions-area well\">\n    <div class=\"actions\">\n      <span class=\"actions-title\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options))));
  data.buffer.push(": </span>\n      ");
  stack1 = helpers['if'].call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-xs btn-success\">\n          <span class=\"glyphicon glyphicon-saved\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Save", options) : helperMissing.call(depth0, "t", "Save", options))));
  data.buffer.push("\n        </button>\n\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-xs btn-default\">\n          <span class=\"glyphicon glyphicon-unchecked\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("\n        </button>\n\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-xs btn-primary\">\n          <span class=\"glyphicon glyphicon-edit\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Edit", options) : helperMissing.call(depth0, "t", "Edit", options))));
  data.buffer.push("\n        </button>\n      ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <button class=\"btn btn-primary btn-block btn-change-user-avatar\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAvatarChangeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change avatar", options) : helperMissing.call(depth0, "t", "Change avatar", options))));
  data.buffer.push("\n            </button>\n          ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div class=\"form-group\">\n              ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "select", {hash:{
    'name': ("language"),
    'value': ("user.language"),
    'content': ("defaultlanguages"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "STRING",'value': "ID",'content': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'content': depth0,'classNames': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n            </div>\n          ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"language-area text-center\">");
  stack1 = helpers._triageMustache.call(depth0, "user.language", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n          ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <span class=\"social\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers['we-contact-button'] || (depth0 && depth0['we-contact-button']),options={hash:{
    'user': ("user")
  },hashTypes:{'user': "ID"},hashContexts:{'user': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-contact-button", options))));
  data.buffer.push("\n                ");
  data.buffer.push(escapeExpression((helper = helpers['we-follow'] || (depth0 && depth0['we-follow']),options={hash:{
    'model': ("user"),
    'modelId': ("user.id"),
    'flagText': ("Seguir"),
    'unFlagText': ("Seguindo")
  },hashTypes:{'model': "STRING",'modelId': "ID",'flagText': "STRING",'unFlagText': "STRING"},hashContexts:{'model': depth0,'modelId': depth0,'flagText': depth0,'unFlagText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-follow", options))));
  data.buffer.push("\n              </span>\n            ");
  return buffer;
  }

  data.buffer.push("<!-- Page Header -->\n<header class=\"intro-header no-bg\"></header>\n<!-- Main Content -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "user_update", "user", "user", options) : helperMissing.call(depth0, "can", "user_update", "user", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"user-full\">\n  <div class=\"panel panel-default\">\n    <div class=\"header panel-body\">\n      <div class=\"user-area-data row\">\n        <div class=\"user-area-data-left col-md-2\" >\n          <span class=\"avatar-large\">");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'user': ("user"),
    'size': ("medium")
  },hashTypes:{'user': "ID",'size': "STRING"},hashContexts:{'user': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("</span>\n\n          ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "update_user", "user", "user", options) : helperMissing.call(depth0, "can", "update_user", "user", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          <br>\n\n          <div class=\"user-username text-center\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-editable-text'] || (depth0 && depth0['we-editable-text']),options={hash:{
    'tagName': ("strong"),
    'name': ("username"),
    'value': ("user.username"),
    'isEditing': ("edit")
  },hashTypes:{'tagName': "STRING",'name': "STRING",'value': "ID",'isEditing': "ID"},hashContexts:{'tagName': depth0,'name': depth0,'value': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editable-text", options))));
  data.buffer.push("\n          </div>\n          ");
  stack1 = helpers['if'].call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"user-area-data-rigth col-md-10\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-editable-text'] || (depth0 && depth0['we-editable-text']),options={hash:{
    'tagName': ("h1"),
    'name': ("displayName"),
    'value': ("user.displayName"),
    'isEditing': ("edit")
  },hashTypes:{'tagName': "STRING",'name': "STRING",'value': "ID",'isEditing': "ID"},hashContexts:{'tagName': depth0,'name': depth0,'value': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editable-text", options))));
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-editable-html'] || (depth0 && depth0['we-editable-html']),options={hash:{
    'name': ("biography"),
    'value': ("user.biography"),
    'isEditing': ("edit")
  },hashTypes:{'name': "STRING",'value': "ID",'isEditing': "ID"},hashContexts:{'name': depth0,'value': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editable-html", options))));
  data.buffer.push("\n          <div class=\"actions\">\n            ");
  stack1 = helpers['if'].call(depth0, "showSocialActions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <div class=\"footer\">\n  </div>\n</div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['user/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});Ember.TEMPLATES['user/usermenu'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<ul class=\"nav navbar-nav navbar-right\">\n  <li>\n    <a href=\"javascript:;\" class=\"dropdown-toggle user-menu-link\" data-toggle=\"dropdown\">\n      <span class=\"user-name \" >");
  stack1 = helpers._triageMustache.call(depth0, "currentUser.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><b class=\"caret\"></b>\n    </a>\n    <ul class=\"dropdown-menu\">\n      <li>\n        <a href=\"javascript:;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAvatarChangeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change avatar", options) : helperMissing.call(depth0, "t", "Change avatar", options))));
  data.buffer.push("\n        </a>\n      </li>\n      <li class=\"divider\"></li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "currentUser.id", options) : helperMissing.call(depth0, "link-to", "user", "currentUser.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li class=\"divider\"></li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authChangePassword", options) : helperMissing.call(depth0, "link-to", "authChangePassword", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li class=\"divider\"></li>\n\n      <li>\n        <a href=\"/admin\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "menu.link.manage", options) : helperMissing.call(depth0, "t", "menu.link.manage", options))));
  data.buffer.push("\n        </a>\n      </li>\n      <li class=\"divider\"></li>\n\n      <li>\n        <a href=\"/auth/logout\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logOut", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Exit", options) : helperMissing.call(depth0, "t", "Exit", options))));
  data.buffer.push("</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "View / edit profile", options) : helperMissing.call(depth0, "t", "View / edit profile", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change password", options) : helperMissing.call(depth0, "t", "Change password", options))));
  }

  stack1 = helpers['if'].call(depth0, "currentUser.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});