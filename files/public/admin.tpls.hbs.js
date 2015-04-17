Ember.TEMPLATES['components/we-activities'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sharebox'] || (depth0 && depth0['we-sharebox']),options={hash:{
    'groupId': ("groupId")
  },hashTypes:{'groupId': "ID"},hashContexts:{'groupId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sharebox", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div class=\"text-center\">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "loading-image", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n<div class=\"context-search\">\n  <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "filter", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"form-inline\" role=\"form\">\n  \n\n    <div class=\"form-group\">\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "select", {hash:{
    'name': ("searchSort"),
    'classNames': ("form-control input-sm"),
    'content': ("sortOptions"),
    'optionValuePath': ("content.value"),
    'optionLabelPath': ("content.label"),
    'value': ("sort")
  },hashTypes:{'name': "STRING",'classNames': "STRING",'content': "ID",'optionValuePath': "STRING",'optionLabelPath': "STRING",'value': "ID"},hashContexts:{'name': depth0,'classNames': depth0,'content': depth0,'optionValuePath': depth0,'optionLabelPath': depth0,'value': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"form-control input-sm btn-info\" type=\"submit\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "activities.search.submit", options) : helperMissing.call(depth0, "t", "activities.search.submit", options))));
  data.buffer.push("</button>\n    </div>\n    <div class=\"form-group\">\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetSearch", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"form-control input-sm\" type=\"button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "activities.search.reset", options) : helperMissing.call(depth0, "t", "activities.search.reset", options))));
  data.buffer.push("</button>\n    </div>\n  </form>\n</div>\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'activityIsLoading': ("isSearching")
  },hashTypes:{'activityIsLoading': "ID"},hashContexts:{'activityIsLoading': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "activity/list", "activity", options) : helperMissing.call(depth0, "render", "activity/list", "activity", options))));
  data.buffer.push("\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-timeline-loading'] || (depth0 && depth0['we-timeline-loading']),options={hash:{
    'loadingMore': ("loadingMore"),
    'haveMore': ("haveMore")
  },hashTypes:{'loadingMore': "ID",'haveMore': "ID"},hashContexts:{'loadingMore': depth0,'haveMore': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-timeline-loading", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "showSharebox", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['components/we-activity-group-create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "activity.relatedRecord.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program3(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "activity.relatedActor.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class=\"activity-text\">\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group", "activity.relatedRecord.id", options) : helperMissing.call(depth0, "link-to", "group", "activity.relatedRecord.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "created.by", options) : helperMissing.call(depth0, "t", "created.by", options))));
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "activity.relatedActor.id", options) : helperMissing.call(depth0, "link-to", "user", "activity.relatedActor.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-activity-group-update'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push(" ");
  stack1 = helpers._triageMustache.call(depth0, "activity.relatedRecord.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  return buffer;
  }

function program3(depth0,data) {
  
  var stack1;
  stack1 = helpers._triageMustache.call(depth0, "activity.relatedActor.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  }

  data.buffer.push("<div class=\"activity-text\">\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group", "activity.relatedRecord.id", options) : helperMissing.call(depth0, "link-to", "group", "activity.relatedRecord.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "updated.by", options) : helperMissing.call(depth0, "t", "updated.by", options))));
  data.buffer.push("\n");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "activity.relatedActor.id", options) : helperMissing.call(depth0, "link-to", "user", "activity.relatedActor.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-activity-item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.renderActivity || (depth0 && depth0.renderActivity),options={hash:{
    'activity': ("activity")
  },hashTypes:{'activity': "ID"},hashContexts:{'activity': depth0},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "activity.activityActionName", "activity.activityName", options) : helperMissing.call(depth0, "renderActivity", "activity.activityActionName", "activity.activityName", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-loading'] || (depth0 && depth0['we-loading']),options={hash:{
    'isLoading': (true)
  },hashTypes:{'isLoading': "BOOLEAN"},hashContexts:{'isLoading': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-loading", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isRecordLoaded", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-activity-post'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "post.teaser", "activity.relatedRecord", options) : helperMissing.call(depth0, "render", "post.teaser", "activity.relatedRecord", options))));
  
});Ember.TEMPLATES['components/we-auth-modal-login'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success navbar-login-buttom navbar-btn\">\n  <span class=\"glyphicon glyphicon-log-in\"></span> ");
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
  data.buffer.push("</button>\n  </div>\n</div>\n\n</form>\n    </div>\n  </div>\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-avatar-modal'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-image-crop'] || (depth0 && depth0['we-image-crop']),options={hash:{
    'src': ("salvedImage.urls.original"),
    'file': ("salvedImage"),
    'data': ("cropImageData")
  },hashTypes:{'src': "ID",'file': "ID",'data': "ID"},hashContexts:{'src': depth0,'file': depth0,'data': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image-crop", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"form-group\">\n        <br><br>\n          <div class=\"form-controll file-uploader\">\n            <div class=\"col-md-8\">\n              ");
  data.buffer.push(escapeExpression((helper = helpers['image-upload'] || (depth0 && depth0['image-upload']),options={hash:{
    'multiple': ("false"),
    'files': ("files")
  },hashTypes:{'multiple': "STRING",'files': "ID"},hashContexts:{'multiple': depth0,'files': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-upload", options))));
  data.buffer.push("\n            </div>\n          </div>\n        </div>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <button class=\"btn btn-primary\" type=\"buttom\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cropAndSave", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Salvar foto</button>\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <button class=\"btn btn-primary\" type=\"buttom\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "selectFile", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Selecionar imagem</button>\n    ");
  return buffer;
  }

  data.buffer.push("<!-- Modal avatarChangeModal -->\n<div class=\"modal\" id=\"avatarChangeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n\n<form id=\"avatar-upload\" class=\"form-upload-avatar\" name=\"uploadAvatarForm\" >\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n    <h4 class=\"modal-title\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change avatar", options) : helperMissing.call(depth0, "t", "Change avatar", options))));
  data.buffer.push("</h4>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\"><div class=\" col-lg-offset-2 col-lg-8\">\n      ");
  stack1 = helpers['if'].call(depth0, "imageSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div></div>\n  </div>\n  <div class=\"modal-footer\">\n    ");
  stack1 = helpers['if'].call(depth0, "imageSelected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("</button>\n  </div>\n</form>\n    </div>\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-block'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("we-block.hbs");
  
});Ember.TEMPLATES['components/we-carousel'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<!-- home-carousel -->\n<div id=\"home-carousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"7000\">\n\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#home-carousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#home-carousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#home-carousel\" data-slide-to=\"2\"></li>\n  </ol>\n\n  <!-- carousel-inner -->\n  <div class=\"carousel-inner\">\n\n    <!-- carousel-item-01 -->\n    <div class=\"item active\" style=\"background: url('/theme/assets/img/home-slide-01.jpg') center;\">\n      <a href=\"https://cursos.atencaobasica.org.br/sobre\"\n         style=\"position: absolute; width: 66%; height: 530px; top: 0; left: 18%; z-index: 999\">\n      </a>\n    </div>\n    <!-- /carousel-item-01 -->\n\n    <!-- carousel-item-02 -->\n    <div class=\"item\" style=\"background: url('/theme/assets/img/home-slide-02.jpg') center;\">\n      <a href=\"https://blog.atencaobasica.org.br/2014/12/01/novidades-da-comunidade\"\n      style=\"position: absolute; width: 66%; height: 530px; top: 0; left: 18%; z-index: 999\">\n      </a>\n    </div>\n    <!-- /carousel-item-02 -->\n\n    <!-- carousel-item-03 -->\n    <div class=\"item\" style=\"background: url('/theme/assets/img/home-slide-03.jpg') center;\">\n      <a href=\"https://blog.atencaobasica.org.br/2014/12/01/trocando-ideias-sobre-os-resultados-do-2o-ciclo-do-pmaq/\"\n      style=\"position: absolute; width: 66%; height: 530px; top: 0; left: 18%; z-index: 999\">\n      </a>\n    </div>\n    <!-- /carousel-item-03 -->\n\n  </div>\n  <!-- /carousel-inner -->\n\n  <!-- controls -->\n  <a class=\"left carousel-control\" href=\"#home-carousel\" role=\"button\" data-slide=\"prev\">\n    <i style=\"font-size: 3em;\" class=\"fa fa-angle-left\"></i>\n  </a>\n  <a class=\"right carousel-control\" href=\"#home-carousel\" role=\"button\" data-slide=\"next\">\n    <i style=\"font-size: 3em;\" class=\"fa fa-angle-right\"></i>\n  </a>\n  <!-- /controls -->\n</div>\n<!-- /home-carousel -->");
  
});Ember.TEMPLATES['components/we-comment-form'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"comment-form\">\n    <div class=\"user-avatar-area pull-left\">\n      <span class=\"creator-avatar avatar-small\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'user': ("currentUser"),
    'size': ("thumbnail")
  },hashTypes:{'user': "ID",'size': "STRING"},hashContexts:{'user': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("\n      </span>\n    </div>\n    <div class=\"comment-right\">\n     <div class=\"comment-body\">\n      ");
  stack1 = helpers['if'].call(depth0, "isOpenComentTextarea", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n     </div>\n    </div>\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"comment-textarea form-group\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-wysiwyg-editor'] || (depth0 && depth0['we-wysiwyg-editor']),options={hash:{
    'name': ("body"),
    'value': ("body"),
    'onChangeText': ("onChangeBodyText"),
    'onPasteText': ("onPasteBodyText"),
    'focus': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'onChangeText': "STRING",'onPasteText': "STRING",'focus': "STRING"},hashContexts:{'name': depth0,'value': depth0,'onChangeText': depth0,'onPasteText': depth0,'focus': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wysiwyg-editor", options))));
  data.buffer.push("\n        </div>\n        <div class=\"actions\">\n          <div class=\"btn-group btn-group-xs\">\n            <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send", options) : helperMissing.call(depth0, "t", "Send", options))));
  data.buffer.push("</button>\n            <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComentTextarea", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("</button>\n          </div>\n        </div>\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openComentTextarea", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"comment-placeholder\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Add comment", options) : helperMissing.call(depth0, "t", "Add comment", options))));
  data.buffer.push("</div>\n      ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <div>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'loginUrlBinding': ("auth.loginUrl"),
    'registerUrlBinding': ("auth.register")
  },hashTypes:{'loginUrlBinding': "ID",'registerUrlBinding': "ID"},hashContexts:{'loginUrlBinding': depth0,'registerUrlBinding': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comments.notAuthenticated", options) : helperMissing.call(depth0, "t", "comments.notAuthenticated", options))));
  data.buffer.push("</div>\n");
  return buffer;
  }

  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comment_create", options) : helperMissing.call(depth0, "can", "comment_create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-comments'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "hasMoreComments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"comments-header\">\n        <span class=\"comment-total\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'lengthBinding': ("comments.length"),
    'totalBinding': ("meta.count")
  },hashTypes:{'lengthBinding': "ID",'totalBinding': "ID"},hashContexts:{'lengthBinding': depth0,'totalBinding': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comments.list.length", options) : helperMissing.call(depth0, "t", "comments.list.length", options))));
  data.buffer.push("\n        </span> -\n        <a href=\"javascript:;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "loadAllComments", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comments.loadAll", options) : helperMissing.call(depth0, "t", "comments.loadAll", options))));
  data.buffer.push("</a>\n      </div>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"comment-total\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'lengthBinding': ("comments.length")
  },hashTypes:{'lengthBinding': "ID"},hashContexts:{'lengthBinding': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comments.list.length.all", options) : helperMissing.call(depth0, "t", "comments.list.length.all", options))));
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"comments\">\n  ");
  stack1 = helpers['if'].call(depth0, "comments", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comments/list", "comments", options) : helperMissing.call(depth0, "render", "comments/list", "comments", options))));
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-connection-status'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("statusImageUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  return buffer;
  
});Ember.TEMPLATES['components/we-content-editable'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveEditing", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelEditing", {hash:{
    'on': ("reset")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("formClassNames")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <button type=\"submit\" class=\"btn btn-sm btn-primary\">salvar</button>\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-sm btn-default\">Cancelar</button>\n  </form>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.html || (depth0 && depth0.html),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "value", options) : helperMissing.call(depth0, "html", "value", options))));
  data.buffer.push(" ");
  stack1 = helpers['if'].call(depth0, "canEdit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '';
  data.buffer.push("<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("editButtonClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" >editar</button>");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-editable-html'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <div class=\"form-group\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-wysiwyg-editor'] || (depth0 && depth0['we-wysiwyg-editor']),options={hash:{
    'name': ("name"),
    'value': ("value")
  },hashTypes:{'name': "ID",'value': "ID"},hashContexts:{'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wysiwyg-editor", options))));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.html || (depth0 && depth0.html),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "value", options) : helperMissing.call(depth0, "html", "value", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-editable-text'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("name"),
    'value': ("value"),
    'type': ("text"),
    'required': ("true"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "ID",'value': "ID",'type': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-field-url-alias'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-loading'] || (depth0 && depth0['we-loading']),options={hash:{
    'isLoading': ("isStarting")
  },hashTypes:{'isLoading': "ID"},hashContexts:{'isLoading': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-loading", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <form>\n      ");
  stack1 = helpers._triageMustache.call(depth0, "baseUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("url.url"),
    'type': ("text"),
    'required': ("true")
  },hashTypes:{'value': "ID",'type': "STRING",'required': "STRING"},hashContexts:{'value': depth0,'type': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success btn-sm\">Save</button>\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-sm\">Cancel</button>\n    </form>\n  ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "url.url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-sm\">Edit</button>\n  ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      url: ");
  stack1 = helpers._triageMustache.call(depth0, "baseUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "url.url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      url: ");
  stack1 = helpers._triageMustache.call(depth0, "baseUrl", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  stack1 = helpers._triageMustache.call(depth0, "modelName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("/");
  stack1 = helpers._triageMustache.call(depth0, "modelId", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isStarting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-group-list'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div class=\"col-md-12\">");
  data.buffer.push(escapeExpression((helper = helpers['we-loading'] || (depth0 && depth0['we-loading']),options={hash:{
    'isLoading': ("isLoading")
  },hashTypes:{'isLoading': "ID"},hashContexts:{'isLoading': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-loading", options))));
  data.buffer.push("</div>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"col-md-12\">\n      <h3>Encontrar Grupos</h3>\n    </div>\n    ");
  stack1 = helpers.each.call(depth0, "record", "in", "records", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"col-md-3\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group/teaser", "record", options) : helperMissing.call(depth0, "render", "group/teaser", "record", options))));
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"col-md-12\">\n        <p>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "groups.empty", options) : helperMissing.call(depth0, "t", "groups.empty", options))));
  data.buffer.push("</p>\n      </div>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"groups row\">\n  ");
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-group-members'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"widget-header\">\n    <h4>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n    <p>");
  stack1 = helpers._triageMustache.call(depth0, "subtitle", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n  </div>\n  <div class=\"widget-content\">\n    ");
  stack1 = helpers.each.call(depth0, "members", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"widget-footer clearfix\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group.members", "groupId", options) : helperMissing.call(depth0, "link-to", "group.members", "groupId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("member-link")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "memberId", options) : helperMissing.call(depth0, "link-to", "user", "memberId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'user': ("relatedRecord"),
    'size': ("thumbnail"),
    'classNames': ("img-circle"),
    'width': ("null")
  },hashTypes:{'user': "ID",'size': "STRING",'classNames': "STRING",'width': "ID"},hashContexts:{'user': depth0,'size': depth0,'classNames': depth0,'width': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n      Ver Todos\n    ");
  }

  stack1 = helpers['if'].call(depth0, "members", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-loading'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression;


  data.buffer.push("<img class=\"we-loading-image\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("src")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("> <span class=\"we-loading-text\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span>");
  return buffer;
  
});Ember.TEMPLATES['components/we-menu-item-text'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-menu'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <li>\n    ");
  stack1 = helpers['if'].call(depth0, "external", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </li>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("href")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'target': ("target")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-menu-item-text'] || (depth0 && depth0['we-menu-item-text']),options={hash:{
    'item': ("")
  },hashTypes:{'item': "ID"},hashContexts:{'item': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-menu-item-text", options))));
  data.buffer.push("\n      </a>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers['if'].call(depth0, "modelId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "model", "modelId", options) : helperMissing.call(depth0, "link-to", "model", "modelId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-menu-item-text'] || (depth0 && depth0['we-menu-item-text']),options={hash:{
    'item': ("")
  },hashTypes:{'item': "ID"},hashContexts:{'item': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-menu-item-text", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "isSubmenu", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <a href=\"javascript:;\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"fa arrow\"></span></a>\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-submenu'] || (depth0 && depth0['we-submenu']),options={hash:{
    'text': ("text"),
    'links': ("links")
  },hashTypes:{'text': "ID",'links': "ID"},hashContexts:{'text': depth0,'links': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-submenu", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "link-to", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" \n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-menu-item-text'] || (depth0 && depth0['we-menu-item-text']),options={hash:{
    'item': ("")
  },hashTypes:{'item': "ID"},hashContexts:{'item': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-menu-item-text", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "menu.links", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-pagination'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <li class=\"arrow prev enabled-arrow\">\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "stepBackward", -1, {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">&laquo;</button>\n      </li>\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      <li class=\"arrow prev disabled\">\n        <button class=\"btn btn-default disabled\">&laquo;</button>\n      </li>\n    ");
  }

function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers['if'].call(depth0, "item.ellipses", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  return buffer;
  }
function program6(depth0,data) {
  
  
  data.buffer.push("\n        <li class=\"page-number\">\n          <button disabled='disabled' type=\"button\" class=\"btn btn-default disabled\">...</button>\n        </li>\n      ");
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "item.current", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <li class=\"active page-number\">\n            <button class=\"btn btn-primary active\">");
  stack1 = helpers._triageMustache.call(depth0, "item.page", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n          </li>\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <li class=\"page-number\">\n            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "pageClicked", "item.page", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">");
  stack1 = helpers._triageMustache.call(depth0, "item.page", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</button>\n          </li>\n        ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <li class=\"arrow next enabled-arrow\">\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "stepForward", 1, {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">&raquo;</button>\n      </li>\n    ");
  return buffer;
  }

function program15(depth0,data) {
  
  
  data.buffer.push("\n      <li class=\"arrow next disabled\">\n        <button class=\"btn btn-default disabled\">&raquo;</button>\n      </li>\n    ");
  }

  data.buffer.push("<div class=\"section-story--pagination\">\n  <ul class=\"pagination pagination-lg\">\n    ");
  stack1 = helpers['if'].call(depth0, "canStepBackward", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers.each.call(depth0, "item", "in", "pageItems", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "canStepForward", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </ul>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-sharebox'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("shareboxClass")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <form role=\"form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-body\">\n        ");
  stack1 = helpers['if'].call(depth0, "post.isOpen", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(13, program13, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n  </form>\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <div class=\"form-group\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-wysiwyg-editor'] || (depth0 && depth0['we-wysiwyg-editor']),options={hash:{
    'name': ("body"),
    'linkedPage': ("newWembed"),
    'value': ("post.body"),
    'focus': (true),
    'style': ("small"),
    'onChangeText': ("onChangeBodyText"),
    'onPasteText': ("onPasteBodyText")
  },hashTypes:{'name': "STRING",'linkedPage': "ID",'value': "ID",'focus': "BOOLEAN",'style': "STRING",'onChangeText': "STRING",'onPasteText': "STRING"},hashContexts:{'name': depth0,'linkedPage': depth0,'value': depth0,'focus': depth0,'style': depth0,'onChangeText': depth0,'onPasteText': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wysiwyg-editor", options))));
  data.buffer.push("\n          </div>\n\n          ");
  stack1 = helpers['if'].call(depth0, "selectingAttachOption", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          <div class=\"form-group\">\n            ");
  stack1 = helpers['if'].call(depth0, "post.newWembed.url", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n\n          ");
  stack1 = helpers['if'].call(depth0, "shareImages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          <div class=\"form-group images-preview\">\n            <div class=\"row\">\n              ");
  stack1 = helpers.each.call(depth0, "files", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n              ");
  stack1 = helpers.each.call(depth0, "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n          </div>\n\n          <div class=\"footer\">\n            <div class=\"actions\">\n              <button type=\"submit\" class=\"btn btn-info\">\n                Salvar\n              </button>\n              <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">\n                <i class=\"fa fa-close\"></i>\n                Cancelar\n              </button>\n            </div>\n          </div>\n        ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n          <div class=\"form-group attach-options\">\n            <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openShareImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-info\" title=\"Imagem\">\n              <i class=\"fa fa-image\"></i>\n            </button>\n          </div>\n          ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers['we-wembed'] || (depth0 && depth0['we-wembed']),options={hash:{
    'url': ("post.newWembed.url"),
    'imageIndex': ("post.newWembed.imageIndex"),
    'isEditing': ("true")
  },hashTypes:{'url': "ID",'imageIndex': "ID",'isEditing': "STRING"},hashContexts:{'url': depth0,'imageIndex': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wembed", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            <div class=\"form-group\">\n              <div class=\"form-group row add-images\">\n                <label for=\"addImages\" class=\"col-sm-2 control-label\">Imagens:</label>\n                <div class=\"col-sm-10\">\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['image-upload'] || (depth0 && depth0['image-upload']),options={hash:{
    'files': ("filesNew")
  },hashTypes:{'files': "ID"},hashContexts:{'files': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-upload", options))));
  data.buffer.push("\n                </div>\n              </div>\n            </div>\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div class=\"col-xs-6 col-md-3\">\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['we-image-preview'] || (depth0 && depth0['we-image-preview']),options={hash:{
    'file': (""),
    'onRemove': ("onRemoveImage")
  },hashTypes:{'file': "ID",'onRemove': "STRING"},hashContexts:{'file': depth0,'onRemove': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image-preview", options))));
  data.buffer.push("\n                </div>\n              ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                <div class=\"col-xs-6 col-md-3\">\n                  ");
  data.buffer.push(escapeExpression((helper = helpers['we-image'] || (depth0 && depth0['we-image']),options={hash:{
    'file': (""),
    'click': ("onRemoveSalvedImage")
  },hashTypes:{'file': "ID",'click': "STRING"},hashContexts:{'file': depth0,'click': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image", options))));
  data.buffer.push("\n                </div>\n              ");
  return buffer;
  }

function program13(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <div ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openBox", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"post-placeholder form-control post-content\"> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "What is happening?", options) : helperMissing.call(depth0, "t", "What is happening?", options))));
  data.buffer.push("</div>\n        ");
  return buffer;
  }

  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "create_post", options) : helperMissing.call(depth0, "can", "create_post", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-socket-io'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  Reconectando em ");
  stack1 = helpers._triageMustache.call(depth0, "timeToReconnectInSeconds", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" segundos - <a href=\"#socketIoConnect\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "connect", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"connect\">tentar agora</a>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "isDisconnected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <a href=\"#socketIoConnect\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "connect", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"connect\">");
  stack1 = helpers._triageMustache.call(depth0, "ClickToConnectText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n  ");
  return buffer;
  }

  stack1 = helpers._triageMustache.call(depth0, "msgText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isReconecting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['components/we-submenu'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <li>\n    ");
  stack1 = helpers['if'].call(depth0, "external", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </li>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <a ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("href")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("  ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'target': ("target")
  },hashTypes:{'target': "ID"},hashContexts:{'target': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-menu-item-text'] || (depth0 && depth0['we-menu-item-text']),options={hash:{
    'item': ("")
  },hashTypes:{'item': "ID"},hashContexts:{'item': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-menu-item-text", options))));
  data.buffer.push("\n      </a>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers['if'].call(depth0, "modelId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "model", "modelId", options) : helperMissing.call(depth0, "link-to", "model", "modelId", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-menu-item-text'] || (depth0 && depth0['we-menu-item-text']),options={hash:{
    'item': ("")
  },hashTypes:{'item': "ID"},hashContexts:{'item': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-menu-item-text", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "isSubmenu", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <a href=\"javascript:;\">");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"fa arrow\"></span></a>\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-submenu'] || (depth0 && depth0['we-submenu']),options={hash:{
    'text': ("text"),
    'links': ("links")
  },hashTypes:{'text': "ID",'links': "ID"},hashContexts:{'text': depth0,'links': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-submenu", options))));
  data.buffer.push("\n        ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "model", options) : helperMissing.call(depth0, "link-to", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push(" \n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-menu-item-text'] || (depth0 && depth0['we-menu-item-text']),options={hash:{
    'item': ("")
  },hashTypes:{'item': "ID"},hashContexts:{'item': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-menu-item-text", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "links", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-sys-messages'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <div class=\"alert alert-");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" alert-dismissable\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-term-editable'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveEditing", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelEditing", {hash:{
    'on': ("reset")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n    ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <button type=\"submit\" class=\"btn btn-sm btn-primary\">salvar</button>\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-sm btn-default\">Cancelar</button>\n  </form>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-terms'] || (depth0 && depth0['we-terms']),options={hash:{
    'terms': ("value")
  },hashTypes:{'terms': "ID"},hashContexts:{'terms': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-terms", options))));
  data.buffer.push("\n  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openEditing", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-xs btn-primary\">editar</button>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-terms'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "_view.contentIndex", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <a>");
  stack1 = helpers._triageMustache.call(depth0, "term", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push(" , ");
  }

  stack1 = helpers.each.call(depth0, "term", "in", "terms", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/we-timeline-loading'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "loading.more", options) : helperMissing.call(depth0, "t", "loading.more", options))));
  data.buffer.push("... <img src=\"/public/plugin/we-core/files/images/loading.gif\">\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "haveMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <a href='javascript:;' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getMore", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "get.more", options) : helperMissing.call(depth0, "t", "get.more", options))));
  data.buffer.push("</a>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "no.more.content", options) : helperMissing.call(depth0, "t", "no.more.content", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"loading-more-content text-center\">\n  ");
  stack1 = helpers['if'].call(depth0, "loadingMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-user-contacts-block'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <h3>Membros Relacionados</h3>\n\n  <div class=\"content user-list\">\n    ");
  stack1 = helpers.each.call(depth0, "users", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "id", options) : helperMissing.call(depth0, "link-to", "user", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <span class=\"img-wrapper\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'user': (""),
    'size': ("thumbnail"),
    'classNames': ("img-circle")
  },hashTypes:{'user': "ID",'size': "STRING",'classNames': "STRING"},hashContexts:{'user': depth0,'size': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("\n        </span>\n        <h4 class=\"nome\">");
  data.buffer.push(escapeExpression((helper = helpers.substr || (depth0 && depth0.substr),options={hash:{
    'max': (10)
  },hashTypes:{'max': "INTEGER"},hashContexts:{'max': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "displayName", options) : helperMissing.call(depth0, "substr", "displayName", options))));
  data.buffer.push("</h4>\n      ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "users", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-user-membership-list'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class=\"col-md-12\">\n      <h3>");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h3>\n    </div>\n    ");
  stack1 = helpers['if'].call(depth0, "isLoading", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"col-md-12\">");
  data.buffer.push(escapeExpression((helper = helpers['we-loading'] || (depth0 && depth0['we-loading']),options={hash:{
    'isLoading': ("isLoading")
  },hashTypes:{'isLoading': "ID"},hashContexts:{'isLoading': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-loading", options))));
  data.buffer.push("</div>\n    ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers.each.call(depth0, "records", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(14, program14, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "group.name", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n          <div class=\"col-md-3\">\n            <div class=\"group group-teaser teaser panel panel-default text-center\">\n              <div class=\"panel-content\">\n                ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'title': ("group.name")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "group", "group.id", options) : helperMissing.call(depth0, "link-to", "group", "group.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n              </div>\n              <div class=\"panel-footer\">\n                <span><i class=\"glyphicon glyphicon-user\"></i>");
  stack1 = helpers._triageMustache.call(depth0, "group.data.meta.membersCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "group.members", options) : helperMissing.call(depth0, "t", "group.members", options))));
  data.buffer.push("</span> -\n                <span><i class=\"glyphicon glyphicon-file\"></i>");
  stack1 = helpers._triageMustache.call(depth0, "group.data.meta.contentsCount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "group.contents", options) : helperMissing.call(depth0, "t", "group.contents", options))));
  data.buffer.push("</span>\n              </div>\n            </div>\n          </div>\n        ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                  ");
  stack1 = helpers['if'].call(depth0, "group.logo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  ");
  data.buffer.push(escapeExpression((helper = helpers.substr || (depth0 && depth0.substr),options={hash:{
    'max': (25)
  },hashTypes:{'max': "INTEGER"},hashContexts:{'max': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "group.name", options) : helperMissing.call(depth0, "substr", "group.name", options))));
  data.buffer.push("\n                ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                    <img width=\"40px\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("group.logo.urls.thumbnail")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" />\n                  ");
  return buffer;
  }

function program10(depth0,data) {
  
  
  data.buffer.push("\n                    <img width=\"40px\" src=\"/public/plugin/we-core/files/images/logos/group.jpg\">\n                  ");
  }

function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <div class=\"col-md-3\">\n            <div class=\"group group-teaser teaser panel panel-default text-center\">\n              <div class=\"panel-content\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers['we-loading'] || (depth0 && depth0['we-loading']),options={hash:{
    'isLoading': (true)
  },hashTypes:{'isLoading': "BOOLEAN"},hashContexts:{'isLoading': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-loading", options))));
  data.buffer.push("\n              </div>\n            </div>\n          </div>\n        ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"col-md-12\">\n          <p>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "groups.empty", options) : helperMissing.call(depth0, "t", "groups.empty", options))));
  data.buffer.push("</p>\n        </div>\n      ");
  return buffer;
  }

  data.buffer.push("<div class=\"groups row\">\n  ");
  stack1 = helpers['if'].call(depth0, "memberId", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-wembed'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"site-embed-editing\">\n    <div class=\"wembed-actions clearfix\">\n      <a class=\"btn btn-danger wembed-delete-link pull-right\" href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteWembed", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n        <span class=\"glyphicon glyphicon-remove\"> </span>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "wembed.remove", options) : helperMissing.call(depth0, "t", "wembed.remove", options))));
  data.buffer.push("\n      </a>\n    </div>\n\n    <div class=\"site-embed\">\n\n      ");
  stack1 = helpers['if'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <h5 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h5>\n      <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </div>\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <div class=\"site-embed-image\">\n          ");
  stack1 = helpers['if'].call(depth0, "showImageSelector", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  stack1 = helpers['with'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("wembedImageActionClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n              ");
  stack1 = helpers.each.call(depth0, "wembed.images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            </div>\n          ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              <span class=\"text-center\">\n                <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "changeWembedImage", "_view.contentIndex", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "_view.contentIndex", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n              </span>\n              ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n          ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div class=\"site-embed\">\n  ");
  stack1 = helpers['if'].call(depth0, "isPlaying", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div class='site-embed-video-area'>\n      <iframe width=\"560\" height=\"315\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("videoEmbedSrc")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push("   frameborder=\"0\" autoplay=\"1\" allowfullscreen></iframe>\n    </div>\n    <h4 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n    <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n    <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n  ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <a class=\"embed-link\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "playVideo", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("wembed.url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['with'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <h4 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n      <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </a>\n  ");
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <div class=\"site-embed-image\">\n          <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("url")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n        </div>\n      ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <div class=\"site-embed\">\n    <a class=\"embed-link\" target=\"_blank\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'href': ("wembed.url")
  },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['with'].call(depth0, "image", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <h4 class=\"site-embed-title\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n      <p class=\"site-embed-description\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n      <div class=\"site-embed-domain\">");
  stack1 = helpers._triageMustache.call(depth0, "wembed.domain", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n    </a>\n  </div>\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isVideo", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isPage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['components/widget-actions'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("widget-actions.hbs\neditar | deletar");
  
});Ember.TEMPLATES['403'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "403.message", options) : helperMissing.call(depth0, "t", "403.message", options))));
  
});Ember.TEMPLATES['404'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "404.message", options) : helperMissing.call(depth0, "t", "404.message", options))));
  
});Ember.TEMPLATES['500'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "500.message", options) : helperMissing.call(depth0, "t", "500.message", options))));
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/navbar", options) : helperMissing.call(depth0, "partial", "partials/navbar", options))));
  data.buffer.push("\n    <div id=\"page-wrapper\">\n      <br>\n      ");
  stack1 = helpers._triageMustache.call(depth0, "bread-crumbs", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <br><br><br><br><br>\n\n      ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/footer", options) : helperMissing.call(depth0, "partial", "partials/footer", options))));
  data.buffer.push("\n    </div>\n    <hr>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"wrapper\" id=\"main\">\n  ");
  stack1 = helpers['if'].call(depth0, "auth.isAuthenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['auth/ChangePassword'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <aside class=\"form-signup\">\n      <h2 class=\"form-signin-heading\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change password", options) : helperMissing.call(depth0, "t", "Change password", options))));
  data.buffer.push("\n        <br>\n      </h2>\n\n      ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n      <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" name=\"changePasswordForm\" class=\"user-signup-form\" method=\"POST\">\n        <!-- input: oldpassword -->\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <label for=\"oldpassword\" class=\"input-group-addon\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.change-password.oldpassword", options) : helperMissing.call(depth0, "t", "auth.change-password.oldpassword", options))));
  data.buffer.push("</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("oldpassword"),
    'value': ("user.oldpassword"),
    'type': ("password"),
    'placeholderTranslation': ("auth.change-password.oldpassword"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n        </div>\n        <!-- /input: oldpassword -->\n\n        <!-- input: password -->\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <label for=\"password\" class=\"input-group-addon\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.change-password.newpassword", options) : helperMissing.call(depth0, "t", "auth.change-password.newpassword", options))));
  data.buffer.push("</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("password"),
    'value': ("user.password"),
    'type': ("password"),
    'placeholderTranslation': ("auth.change-password.newpassword"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n        </div>\n        <!-- /input: password -->\n\n        <!-- input: repeatpassword -->\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <label for=\"repeatpassword\" class=\"input-group-addon\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.change-password.repeatpassword", options) : helperMissing.call(depth0, "t", "auth.change-password.repeatpassword", options))));
  data.buffer.push("</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("repeatpassword"),
    'value': ("user.repeatpassword"),
    'type': ("password"),
    'placeholderTranslation': ("auth.change-password.repeatpassword"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n        </div>\n        <!-- /input: repeatpassword -->\n\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n\n        <div class=\"form-group\">\n          <div class=\"input-group\">\n            <button class=\"btn btn-lg btn-success \" type=\"submit\">\n              ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Save", options) : helperMissing.call(depth0, "t", "Save", options))));
  data.buffer.push("\n              <span class=\"glyphicon glyphicon-chevron-right\"> </span>\n            </button>\n          </div>\n        </div>\n\n      </form>\n\n    </aside>\n  </div>\n  <div class=\"panel-footer\">\n  </div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['auth/ForgotPassword'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n\n      verifique seu email ou sua caixa de spam\n\n    ");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n\n      <div class=\"input-group text-center\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("email"),
    'type': ("email"),
    'placeholder': ("emailPlaceholder"),
    'classNames': ("form-control input-lg"),
    'required': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING",'required': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <span class=\"input-group-btn\">\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "requestPasswordChange", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-lg btn-primary\" type=\"button\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send email", options) : helperMissing.call(depth0, "t", "Send email", options))));
  data.buffer.push("</button>\n        </span>\n      </div>\n\n    ");
  return buffer;
  }

  data.buffer.push("<h1>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Forgot Password form", options) : helperMissing.call(depth0, "t", "Forgot Password form", options))));
  data.buffer.push("</h1>\n<br>\n<div class=\"well\">\n  <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "requestPasswordChange", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" action=\"/auth/forgot-password\" method=\"post\" class=\"form\">\n    <h4>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Enter you e-mail address to request a password change.", options) : helperMissing.call(depth0, "t", "Enter you e-mail address to request a password change.", options))));
  data.buffer.push("</h4>\n    <br>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n    ");
  stack1 = helpers['if'].call(depth0, "requestSend", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  </form>\n\n</div>");
  return buffer;
  
});Ember.TEMPLATES['auth/Login'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"row\">\n  <div class=\"col-lg-4 col-lg-offset-4\">\n    <h1 class=\"page-header\">\n      <span class=\"glyphicon glyphicon-lock\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Login", options) : helperMissing.call(depth0, "t", "Login", options))));
  data.buffer.push("\n    </h1>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n    <form class=\"form center-block\" role=\"form\" name=\"loginForm\" method=\"post\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n      <!-- form-login -->\n      <div class=\"form-login\">\n        <div class=\"form-group\">\n          <label class=\"sr-only\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Email address", options) : helperMissing.call(depth0, "t", "Email address", options))));
  data.buffer.push("</label>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("controller.email"),
    'type': ("email"),
    'placeholderTranslation': ("auth.register.email.label"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n\n        <div class=\"form-group\">\n          <label class=\"sr-only\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Password", options) : helperMissing.call(depth0, "t", "Password", options))));
  data.buffer.push("</label>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("controller.password"),
    'type': ("password"),
    'placeholderTranslation': ("auth.register.password.label"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'classNames': "STRING"},hashContexts:{'value': depth0,'type': depth0,'placeholderTranslation': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n\n        <hr>\n\n        <div class=\"form-group\">\n          <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "login", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\" type=\"submit\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Sign in", options) : helperMissing.call(depth0, "t", "Sign in", options))));
  data.buffer.push("</button>\n\n          <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "goToForgotPaswordPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" class=\"link\" href=\"/auth/forgot-password\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Forgot password?", options) : helperMissing.call(depth0, "t", "Forgot password?", options))));
  data.buffer.push("\n          </a>\n        </div>\n\n      </div>\n    </form>\n    <!-- /form-login -->\n  </div>\n</div>\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['auth/NewPassword'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" name=\"changePasswordForm\" class=\"user-signup-form\" method=\"POST\">\n    <!-- input: password -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"password\" class=\"input-group-addon\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.change-password.newpassword", options) : helperMissing.call(depth0, "t", "auth.change-password.newpassword", options))));
  data.buffer.push("</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("password"),
    'value': ("user.password"),
    'type': ("password"),
    'placeholderTranslation': ("auth.change-password.newpassword"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <!-- /input: password -->\n    <!-- input: repeatpassword -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"repeatpassword\" class=\"input-group-addon\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.change-password.repeatpassword", options) : helperMissing.call(depth0, "t", "auth.change-password.repeatpassword", options))));
  data.buffer.push("</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("repeatpassword"),
    'value': ("user.repeatpassword"),
    'type': ("password"),
    'placeholderTranslation': ("auth.change-password.repeatpassword"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <!-- /input: repeatpassword -->\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <button class=\"btn btn-lg btn-success \" type=\"submit\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Save", options) : helperMissing.call(depth0, "t", "Save", options))));
  data.buffer.push("\n          <span class=\"glyphicon glyphicon-chevron-right\"> </span>\n        </button>\n      </div>\n    </div>\n  </form>\n");
  return buffer;
  }

  data.buffer.push("<h1>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.reset-password.title", options) : helperMissing.call(depth0, "t", "auth.reset-password.title", options))));
  data.buffer.push("</h1>\n<br>\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n<br>\n\n<div class=\"well\">\n");
  stack1 = helpers.unless.call(depth0, "requestSend", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['auth/ResetPasswordToken'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/home-about-site", options) : helperMissing.call(depth0, "partial", "partials/home-about-site", options))));
  data.buffer.push("\n  </div>\n  <div class=\"panel-body\">\n\n<aside class=\"form-signup\">\n  <h2 class=\"form-signin-heading\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Create account", options) : helperMissing.call(depth0, "t", "Create account", options))));
  data.buffer.push("\n    <br>\n  </h2>\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n  <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" name=\"createAccountForm\" class=\"user-signup-form\" method=\"POST\">\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"name\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("username"),
    'value': ("user.username"),
    'type': ("text"),
    'placeholder': ("usernamePlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"email\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-envelope\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("user.email"),
    'type': ("email"),
    'placeholder': ("emailPlaceholder"),
    'classNames': ("form-control input-lg"),
    'required': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'classNames': "STRING",'required': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n      <div class=\"message\" data-ng-repeat=\"message in user.email.messages\">\n        <div class=\"message.type\">");
  stack1 = helpers._triageMustache.call(depth0, "message.message", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"password\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-lock\"> </span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("password"),
    'value': ("user.password"),
    'type': ("password"),
    'placeholder': ("passwordPlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n        <label for=\"confirm-password\" class=\"sr-only input-group-btn\">\n\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("confirmPassword"),
    'value': ("user.confirmPassword"),
    'type': ("password"),
    'placeholder': ("confirmPasswordPlaceholder"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholder': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholder': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"language\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-globe\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Language", options) : helperMissing.call(depth0, "t", "Language", options))));
  data.buffer.push("\n        </label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "Ember.Select", {hash:{
    'name': ("language"),
    'value': ("user.language"),
    'content': ("defaultlanguages"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "STRING",'value': "ID",'content': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'content': depth0,'classNames': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n      </div>\n    </div>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <button class=\"btn btn-lg btn-success \" type=\"submit\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Sign up", options) : helperMissing.call(depth0, "t", "Sign up", options))));
  data.buffer.push("\n          <span class=\"glyphicon glyphicon-chevron-right\"> </span>\n        </button>\n      </div>\n    </div>\n\n    <div class=\"input-group\">\n      <div class=\"agree-terms\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "By clicking Sign Up, you agree to: We dont are responsible for anything that may happens to your data in this test system", options) : helperMissing.call(depth0, "t", "By clicking Sign Up, you agree to: We dont are responsible for anything that may happens to your data in this test system", options))));
  data.buffer.push("\n      </div>\n    </div>\n\n  </form>\n\n\n</aside>\n\n  </div>\n\n  <div class=\"panel-footer\">\n\n  </div>\n\n\n</div>\n\n");
  return buffer;
  }

  data.buffer.push("<h1>Oi! Teste Token.</h1>\n\n");
  stack1 = helpers['if'].call(depth0, "isVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['comment/item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers._triageMustache.call(depth0, "creator.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"comment-textarea form-group\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-wysiwyg-editor'] || (depth0 && depth0['we-wysiwyg-editor']),options={hash:{
    'name': ("body"),
    'value': ("body")
  },hashTypes:{'name': "STRING",'value': "ID"},hashContexts:{'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wysiwyg-editor", options))));
  data.buffer.push("\n        </div>\n        <div class=\"actions\">\n          <div class=\"btn-group btn-group-xs\">\n            <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "sendComment", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send", options) : helperMissing.call(depth0, "t", "Send", options))));
  data.buffer.push("</button>\n            <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "closeComentTextarea", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("</button>\n          </div>\n        </div>\n      ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.html || (depth0 && depth0.html),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "body", options) : helperMissing.call(depth0, "html", "body", options))));
  data.buffer.push("</div>\n      ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      <div class=\"actions\">\n        ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "comment_update", "comment", "model", options) : helperMissing.call(depth0, "can", "comment_update", "comment", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "comment_destroy", "comment", "model", options) : helperMissing.call(depth0, "can", "comment_destroy", "comment", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <button type=\"button\" class=\"btn btn-xs btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <span class=\"glyphicon glyphicon-edit text-primary\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Edit", options) : helperMissing.call(depth0, "t", "Edit", options))));
  data.buffer.push("\n          </button>\n        ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <button class=\"btn btn-xs btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteComment", "content", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">\n            <span class=\"glyphicon glyphicon-remove text-danger\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Delete", options) : helperMissing.call(depth0, "t", "Delete", options))));
  data.buffer.push("\n          </button>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"comment clearfix\">\n  <div class=\"user-avatar-area comment-left\">\n    <span class=\"creator-avatar\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'width': ("25px"),
    'heigth': ("25px"),
    'user': ("creator"),
    'size': ("thumbnail")
  },hashTypes:{'width': "STRING",'heigth': "STRING",'user': "ID",'size': "STRING"},hashContexts:{'width': depth0,'heigth': depth0,'user': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("\n    </span>\n  </div>\n  <div class=\"comment-right\">\n    <div class=\"comment-header\">\n        <span class=\"comment-username\">\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "creator.id", options) : helperMissing.call(depth0, "link-to", "user", "creator.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </span>\n        <span class=\"createdAt comment-date\">");
  data.buffer.push(escapeExpression((helper = helpers['format-date'] || (depth0 && depth0['format-date']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "createdAt", options) : helperMissing.call(depth0, "format-date", "createdAt", options))));
  data.buffer.push("</span>\n    </div>\n    <div class=\"comment-body\">\n      ");
  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n\n    ");
  stack1 = helpers.unless.call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['comments/list'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "comment/item", "", options) : helperMissing.call(depth0, "render", "comment/item", "", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div>");
  stack1 = (helper = helpers.t || (depth0 && depth0.t),options={hash:{
    'loginUrlBinding': ("auth.loginUrl"),
    'registerUrlBinding': ("auth.register")
  },hashTypes:{'loginUrlBinding': "ID",'registerUrlBinding': "ID"},hashContexts:{'loginUrlBinding': depth0,'registerUrlBinding': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comments.empty", options) : helperMissing.call(depth0, "t", "comments.empty", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['components/bread-crumbs'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "_view.contentIndex", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("crumb.isCurrent:current:")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['if'].call(depth0, "crumb.linkable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "crumb.path", options) : helperMissing.call(depth0, "link-to", "crumb.path", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "crumb.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "crumb.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <li ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":first crumb.isCurrent:current:")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers['if'].call(depth0, "crumb.linkable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "crumb", "in", "breadCrumbs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/bs-modal'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "view.body", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    ");
  stack1 = helpers['if'].call(depth0, "body", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-account-modal'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"create-link\">\n          <div class=\"text-center\">\n            <br>\n            <p>Gere um novo link para o usuário resetar a senha!</p>\n            <br>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"input-group\">\n                <div class=\"input-group-btn\">\n                  <button type=\"button\" class=\"btn btn-primary generate-reset-link\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "generateResetLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Gerar Link</button>\n\n                </div>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("linkToReset"),
    'placeholder': ("Link para resetar senha..."),
    'class': ("form-control"),
    'disabled': ("disabled")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING",'class': "STRING",'disabled': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0,'class': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("                  \n              </div><!-- /input-group -->\n            </div><!-- /.col-lg-12 -->            \n          </div>\n        </div>\n        ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"set-new-password\">\n          <div class=\"text-center\">\n            <br>\n            <p>Define uma nova senha para o usuário</p>\n            <br>\n          </div>\n          <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n              <label for=\"new-password\" class=\"col-sm-5 control-label\">Nova Senha</label>\n              <div class=\"col-sm-5\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("newPassword"),
    'placeholder': ("Defina uma nova senha"),
    'id': ("new-password"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"confirm-new-password\" class=\"col-sm-5 control-label\">Repetir Senha</label>\n              <div class=\"col-sm-5\">\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("password"),
    'value': ("confirmNewPassword"),
    'placeholder': ("Confirme a nova senha"),
    'id': ("confirm-new-password"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'value': "ID",'placeholder': "STRING",'id': "STRING",'class': "STRING"},hashContexts:{'type': depth0,'value': depth0,'placeholder': depth0,'id': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("              \n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-sm-offset-5 col-sm-3\">\n                <button type=\"button\" class=\"btn btn-primary set-new-password-button\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("invalidPassword")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "setNewPassword", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Definir Nova Senha</button>\n              </div>\n            </div>\n          </form>          \n        </div>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"alert alert-success\" role=\"alert\"><strong>Nova senha</strong> definida com sucesso!</div>\n        ");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("\n          <div class=\"alert alert-danger alert-dismissible we-account-modal-error\" role=\"alert\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>            \n          </div>\n        ");
  }

  data.buffer.push("<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      <h4 class=\"modal-title\">Gerenciar Senha</h4>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"btn-group btn-group-justified\" role=\"group\" aria-label=\"...\">\n        <div class=\"btn-group\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tabLink", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Gerar Link</button>\n        </div>\n        <div class=\"btn-group\" role=\"group\">\n          <button type=\"button\" class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "tabPassword", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Definir Nova Senha</button>\n        </div>\n      </div>\n      <div class=\"container-fluid\">\n        ");
  stack1 = helpers['if'].call(depth0, "toogle", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "success", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  stack1 = helpers['if'].call(depth0, "error", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\n    </div>\n  </div><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->");
  return buffer;
  
});Ember.TEMPLATES['components/we-admin-menu'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "name", options) : helperMissing.call(depth0, "link-to", "name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </li>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <li>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "model", "model", options) : helperMissing.call(depth0, "link-to", "model", "model", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </li>\n      ");
  return buffer;
  }
function program5(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

  data.buffer.push("<ul class=\"nav in\" id=\"side-menu\">\n  ");
  stack1 = helpers.each.call(depth0, "links", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <li>\n    <a href=\"#\">Tabelas<span class=\"fa arrow\"></span></a>\n    <ul class=\"nav nav-second-level collapse\" aria-expanded=\"false\" style=\"height: 0px;\">\n      ");
  stack1 = helpers.each.call(depth0, "modelLinks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </ul>\n  </li>\n</ul>\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-connection-status'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("statusImageUrl")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-editable-html'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  <div class=\"form-group\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-wysiwyg-editor'] || (depth0 && depth0['we-wysiwyg-editor']),options={hash:{
    'name': ("name"),
    'value': ("value")
  },hashTypes:{'name': "ID",'value': "ID"},hashContexts:{'name': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-wysiwyg-editor", options))));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "value", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-editable-text'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("name"),
    'value': ("value"),
    'type': ("text"),
    'required': ("true"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "ID",'value': "ID",'type': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers._triageMustache.call(depth0, "value", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isEditing", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-oauth-search'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      <div class=\"row\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-hover table-striped\">\n            <thead>\n              <tr>\n                <th>idInProvider</th>\n                <th>username</th>\n                <th>email</th>\n                <th>active<span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Usuário ativo no oAuth?\"></span></th>\n                <th>wejs<span class=\"glyphicon glyphicon-question-sign\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Usuário existente no WeJs?\"></span></th> \n                <th>ações<img class=\"activate-loading\" src=\"/core/images/reconnecting.gif\"></th>\n              </tr>\n              <style type=\"text/css\" media=\"screen\">\n                .activate-loading{\n                  display: none; \n                  width: 14px; \n                  margin-left: 10px;\n                }\n              </style>\n            </thead>\n            <tbody>\n                <tr>\n                  <td>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "user.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  </td>\n                  <td>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "user.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  </td>\n                  <td>\n                    <a ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "updateEmail", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  stack1 = helpers._triageMustache.call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n                  </td>\n                  <td>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "user.active", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  </td>\n                  <td>\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "notInCdp", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                  </td>                \n                  <td>\n                  <button type=\"button\" class=\"btn btn-success activate-account\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'disabled': ("user.active")
  },hashTypes:{'disabled': "ID"},hashContexts:{'disabled': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "activateAccount", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Ativar </button>  \n                  </td>\n                </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      ");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      <div class=\"row\">\n        <p class=\"text-center\">Usuário não encontrado!</p>\n      </div>\n      ");
  }

  data.buffer.push("<div class=\"modal-dialog\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n      <h4 class=\"modal-title\">Buscar usuários oAuth - Provider (CPF)</h4>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <form class=\"cpf-search-form\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n          <div class=\"form-group\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'value': ("cpf"),
    'class': ("form-control"),
    'placeholder': ("Cpf..."),
    'name': ("cpf"),
    'id': ("cpf")
  },hashTypes:{'type': "STRING",'value': "ID",'class': "STRING",'placeholder': "STRING",'name': "STRING",'id': "STRING"},hashContexts:{'type': depth0,'value': depth0,'class': depth0,'placeholder': depth0,'name': depth0,'id': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n          </div>\n        </form>\n      </div>\n      <br>      \n      ");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  stack1 = helpers['if'].call(depth0, "msgNotFound", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div> \n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Fechar</button>\n      <button type=\"button\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': (":btn :btn-primary :search isValid::disabled")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "search", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Procurar</button>\n    </div>\n  </div><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->");
  return buffer;
  
});Ember.TEMPLATES['components/we-role-permission-checkbox'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n  <img width=\"22px\" src=\"/core/images/loading.gif\">\n");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'checked': ("hasPermission")
  },hashTypes:{'type': "STRING",'checked': "ID"},hashContexts:{'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "isSaving", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-socket-io'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  Reconectando em ");
  stack1 = helpers._triageMustache.call(depth0, "timeToReconnectInSeconds", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" segundos - <a href=\"#socketIoConnect\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "connect", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"connect\">tentar agora</a>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "isDisconnected", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <a href=\"#socketIoConnect\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "connect", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"connect\">");
  stack1 = helpers._triageMustache.call(depth0, "ClickToConnectText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n  ");
  return buffer;
  }

  stack1 = helpers._triageMustache.call(depth0, "msgText", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  stack1 = helpers['if'].call(depth0, "isReconecting", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['components/we-sys-messages'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n  <div class=\"alert alert-");
  data.buffer.push(escapeExpression(helpers.unbound.call(depth0, "status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(" alert-dismissable\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n    ");
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "message", {hash:{
    'unescaped': ("true")
  },hashTypes:{'unescaped': "STRING"},hashContexts:{'unescaped': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n  </div>\n");
  return buffer;
  }

  stack1 = helpers.each.call(depth0, "messages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['components/we-timeline-loading'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Loading more", options) : helperMissing.call(depth0, "t", "Loading more", options))));
  data.buffer.push("... <img src=\"/core/images/loading.gif\">\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "haveMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <a href='#' ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "getMore", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Get More", options) : helperMissing.call(depth0, "t", "Get More", options))));
  data.buffer.push("</a>\n    ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "No more content", options) : helperMissing.call(depth0, "t", "No more content", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"loading-more-content text-center\">\n  ");
  stack1 = helpers['if'].call(depth0, "loadingMore", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['components/we-title'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <h1 class=\"page-header\">");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n  </div>\n  <!-- /.col-lg-12 -->\n</div>\n\n");
  return buffer;
  
});Ember.TEMPLATES['forbidden'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("FORBIDEN!");
  
});Ember.TEMPLATES['home'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row\"><div class=\"col-md-12\">\n  <div class=\"sharebox-area masonry-brick  content-block\">\n\n  </div>\n</div></div>");
  
});Ember.TEMPLATES['layout'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n	<div class=\"add-region-form\">\n		<form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createAndAddRegion", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n		<h4>Create region</h4>\n\n			<div class=\"form-group\">\n				<div class=\"input-group\">\n				  <label class=\"input-group-addon\">Name</label>\n				  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("name"),
    'value': ("newRegion.name"),
    'classNames': ("form-control")
  },hashTypes:{'name': "STRING",'value': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n				</div>\n			</div>\n\n			<div class=\"form-group\">\n				<div class=\"input-group\">\n				  <label class=\"input-group-addon\">Columns</label>\n	        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "select", {hash:{
    'name': ("columns"),
    'classNames': ("form-control"),
    'value': ("newRegion.columns"),
    'content': ("columns")
  },hashTypes:{'name': "STRING",'classNames': "STRING",'value': "ID",'content': "ID"},hashContexts:{'name': depth0,'classNames': depth0,'value': depth0,'content': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n				</div>\n			</div>\n\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <label class=\"input-group-addon\">Order</label>\n          ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("order"),
    'type': ("number"),
    'value': ("newRegion.order"),
    'classNames': ("form-control")
  },hashTypes:{'name': "STRING",'type': "STRING",'value': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'type': depth0,'value': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        </div>\n      </div>\n\n			<div class=\"form-group\">\n				<button class=\"btn btn-primary\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createAndAddRegion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "create", options) : helperMissing.call(depth0, "t", "create", options))));
  data.buffer.push("</button>\n				<button class=\"btn btn-default\" type=\"reset\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelCreateRegion", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("</button>\n			<div>\n		</form>\n	</div>\n");
  return buffer;
  }

  data.buffer.push("<h2>");
  stack1 = helpers._triageMustache.call(depth0, "record.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h2>\n\n<div class=\"layout-actions row\">\n	<div class=\"col-md-12\">\n		<button class=\"btn btn-primary\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showCreateRegionForm", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add region</button>\n	</div>\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "isVisibleCreateRegionForm", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<br>\n\n<h3>Regions in this layout</h3>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{
    'controller': ("regions.list")
  },hashTypes:{'controller': "STRING"},hashContexts:{'controller': depth0},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "regions.list-edit", "record.regions", options) : helperMissing.call(depth0, "render", "regions.list-edit", "record.regions", options))));
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['layouts/create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createRecord", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n	<div class=\"form-group\">\n		<div class=\"input-group\">\n		  <label class=\"input-group-addon\">Name</label>\n		  ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("name"),
    'value': ("record.name"),
    'classNames': ("form-control")
  },hashTypes:{'name': "STRING",'value': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n		</div> \n	</div>\n\n	<div class=\"form-group\">\n		<div class=\"input-group\">\n			<button class=\"btn btn-primary\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "create", options) : helperMissing.call(depth0, "t", "create", options))));
  data.buffer.push("</button>\n		</div>\n	<div>\n</form>");
  return buffer;
  
});Ember.TEMPLATES['layouts/default'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("12345");
  
});Ember.TEMPLATES['layouts/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <tbody>\n    <tr>\n      <td>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "layout", "id", options) : helperMissing.call(depth0, "link-to", "layout", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </td>\n\n      <td>\n        ");
  stack1 = helpers._triageMustache.call(depth0, "regions.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </td>\n\n      <td>\n        ");
  stack1 = helpers.each.call(depth0, "regions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </td>\n\n    </tr>\n  </tbody>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          ");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(",\n        ");
  return buffer;
  }

  data.buffer.push("\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>\n        Name\n      </th>\n      <th>\n        Regions length\n      </th>\n      <th>\n        Regions names\n      </th>\n    </tr>\n  </thead>\n");
  stack1 = helpers.each.call(depth0, "records", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</table>");
  return buffer;
  
});Ember.TEMPLATES['layouts/twoColumns'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("222 <div class=\"row\">\n\n  <div class=\"col-md-12\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "highlighted", options) : helperMissing.call(depth0, "outlet", "highlighted", options))));
  data.buffer.push("\n    <div data-ui-view=\"highlighted\"></div>\n  </div>\n\n\n  <div class=\"col-sm-8\">\n    <div data-ui-view>\n      ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>");
  stack1 = helpers._triageMustache.call(depth0, "we-messenger", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <div class=\"col-sm-4\">\n\n     ");
  data.buffer.push(escapeExpression((helper = helpers.outlet || (depth0 && depth0.outlet),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "mainLeft", options) : helperMissing.call(depth0, "outlet", "mainLeft", options))));
  data.buffer.push("\n    <we-news></we-news>\n  </div>\n\n</div>222");
  return buffer;
  
});Ember.TEMPLATES['menu'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("menu");
  
});Ember.TEMPLATES['model'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <th>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n        ");
  return buffer;
  }

function program3(depth0,data,depth1) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <tr>\n          <td>\n          ");
  stack1 = helpers._triageMustache.call(depth0, "record.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n        ");
  stack1 = helpers.each.call(depth0, "attribute", "in", "attributes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.programWithDepth(4, program4, data, depth0),contexts:[depth0,depth0,depth1],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </tr>\n      ");
  return buffer;
  }
function program4(depth0,data,depth1) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <td>\n            ");
  data.buffer.push(escapeExpression((helper = helpers['sub-atribute'] || (depth1 && depth1['sub-atribute']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth1,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "record", "attribute", options) : helperMissing.call(depth0, "sub-atribute", "record", "attribute", options))));
  data.buffer.push("\n          </td>\n        ");
  return buffer;
  }

  data.buffer.push("<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover table-striped\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        ");
  stack1 = helpers.each.call(depth0, "attributes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </tr>\n    </thead>\n\n    <tbody>\n      ");
  stack1 = helpers.each.call(depth0, "record", "in", "records", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.programWithDepth(3, program3, data, depth0),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tbody>\n  </table>\n</div>\n\n");
  return buffer;
  
});Ember.TEMPLATES['model/records'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      <tr>\n          <td>/index.html</td>\n          <td>1265</td>\n          <td>32.3%</td>\n          <td>$321.33</td>\n      </tr>\n    ");
  }

  data.buffer.push("<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover table-striped\">\n    <tbody>\n    ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </tbody>\n</table>\n</div>\n\n");
  return buffer;
  
});Ember.TEMPLATES['models'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['page/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page.form", "model", options) : helperMissing.call(depth0, "render", "page.form", "model", options))));
  
});Ember.TEMPLATES['page/form'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers['image-upload'] || (depth0 && depth0['image-upload']),options={hash:{
    'classNames': ("form-control header-inputs"),
    'files': ("selectedImage")
  },hashTypes:{'classNames': "STRING",'files': "ID"},hashContexts:{'classNames': depth0,'files': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-upload", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetSelectedImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "reset", options) : helperMissing.call(depth0, "t", "reset", options))));
  data.buffer.push("</button>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <button class=\"btn btn-primary\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "save", options) : helperMissing.call(depth0, "t", "save", options))));
  data.buffer.push("</button>\n      ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <button class=\"btn btn-primary\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "create", options) : helperMissing.call(depth0, "t", "create", options))));
  data.buffer.push("</button>\n      ");
  return buffer;
  }

  data.buffer.push("<form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createRecord", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      <label class=\"input-group-addon\">Title</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("title"),
    'value': ("record.title"),
    'classNames': ("form-control")
  },hashTypes:{'name': "STRING",'value': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.about.label", options) : helperMissing.call(depth0, "t", "page.form.about.label", options))));
  data.buffer.push("</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-editor'] || (depth0 && depth0['we-editor']),options={hash:{
    'value': ("record.about"),
    'style': ("small"),
    'classNames': ("header-inputs")
  },hashTypes:{'value': "ID",'style': "STRING",'classNames': "STRING"},hashContexts:{'value': depth0,'style': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editor", options))));
  data.buffer.push("\n  </div>\n\n  <div class=\"form-group\">\n    <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.body.label", options) : helperMissing.call(depth0, "t", "page.form.body.label", options))));
  data.buffer.push("</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-editor'] || (depth0 && depth0['we-editor']),options={hash:{
    'value': ("record.body"),
    'classNames': ("header-inputs")
  },hashTypes:{'value': "ID",'classNames': "STRING"},hashContexts:{'value': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editor", options))));
  data.buffer.push("\n  </div>\n\n  <hr>\n\n  <div class=\"form-group\">\n    <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.featuredImage.label", options) : helperMissing.call(depth0, "t", "page.form.featuredImage.label", options))));
  data.buffer.push("</label>\n    ");
  stack1 = helpers.unless.call(depth0, "inputReset", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "selectedImage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <hr>\n\n  <div class=\"form-group\">\n    <div class=\"post-edit-category\">\n      <label for=\"category\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.category.label", options) : helperMissing.call(depth0, "t", "page.form.category.label", options))));
  data.buffer.push("</label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers['we-category-field'] || (depth0 && depth0['we-category-field']),options={hash:{
    'value': ("record.categories"),
    'newTagMark': (" (nova)"),
    'maximumSelectionSize': ("4"),
    'modelName': ("Page"),
    'field': ("categories")
  },hashTypes:{'value': "ID",'newTagMark': "STRING",'maximumSelectionSize': "STRING",'modelName': "STRING",'field': "STRING"},hashContexts:{'value': depth0,'newTagMark': depth0,'maximumSelectionSize': depth0,'modelName': depth0,'field': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-category-field", options))));
  data.buffer.push("\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"tag\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.tag.label", options) : helperMissing.call(depth0, "t", "page.form.tag.label", options))));
  data.buffer.push("</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-tag-field'] || (depth0 && depth0['we-tag-field']),options={hash:{
    'value': ("record.tags"),
    'newTagMark': (" (nova)"),
    'maximumSelectionSize': ("5"),
    'modelName': ("Page"),
    'field': ("tags")
  },hashTypes:{'value': "ID",'newTagMark': "STRING",'maximumSelectionSize': "STRING",'modelName': "STRING",'field': "STRING"},hashContexts:{'value': depth0,'newTagMark': depth0,'maximumSelectionSize': depth0,'modelName': depth0,'field': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-tag-field", options))));
  data.buffer.push("\n  </div>\n\n  <hr>\n\n  <div class=\"checkbox\">\n    <label>\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("published"),
    'type': ("checkbox"),
    'checked': ("record.published")
  },hashTypes:{'name': "STRING",'type': "STRING",'checked': "ID"},hashContexts:{'name': depth0,'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.published.label", options) : helperMissing.call(depth0, "t", "page.form.published.label", options))));
  data.buffer.push("\n    </label>\n  </div>\n\n  <hr>\n\n  <div class=\"form-group\">\n    <div class=\"input-group\">\n      ");
  stack1 = helpers['if'].call(depth0, "record.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  <div>\n</form>");
  return buffer;
  
});Ember.TEMPLATES['page/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("edit");
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"record-category\">\n        <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.category.label", options) : helperMissing.call(depth0, "t", "page.form.category.label", options))));
  data.buffer.push("</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-terms'] || (depth0 && depth0['we-terms']),options={hash:{
    'terms': ("record.categories")
  },hashTypes:{'terms': "ID"},hashContexts:{'terms': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-terms", options))));
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <div class=\"record-tag\">\n        <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.tag.label", options) : helperMissing.call(depth0, "t", "page.form.tag.label", options))));
  data.buffer.push("</label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers['we-terms'] || (depth0 && depth0['we-terms']),options={hash:{
    'terms': ("record.tags")
  },hashTypes:{'terms': "ID"},hashContexts:{'terms': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-terms", options))));
  data.buffer.push("\n      </div>\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary btn-sm")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page.edit", "record.id", options) : helperMissing.call(depth0, "link-to", "page.edit", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  return buffer;
  }
function program8(depth0,data) {
  
  
  data.buffer.push("\n      Edit\n    ");
  }

function program10(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n    <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRecord", "record.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-default btn-sm\">\n      Delete\n    </button>\n  ");
  return buffer;
  }

  data.buffer.push("<h2>\n  Title: ");
  stack1 = helpers._triageMustache.call(depth0, "record.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page.edit", "record.id", options) : helperMissing.call(depth0, "link-to", "page.edit", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</h2>\n\n<div>\n\n  <div class=\"page-body\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.html || (depth0 && depth0.html),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "record.body", options) : helperMissing.call(depth0, "html", "record.body", options))));
  data.buffer.push("\n  </div>\n  <br>\n\n  <div class=\"record-terms\">\n    ");
  stack1 = helpers['if'].call(depth0, "record.categories", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "record.tags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <hr>\n\n  ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "page_update", "page", "record", options) : helperMissing.call(depth0, "can", "page_update", "page", "record", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "page_delete", "page", "record", options) : helperMissing.call(depth0, "can", "page_delete", "page", "record", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <hr>\n  <div class=\"comment-area\">\n    <a data-link-area=\"comments\" id=\"anchor-comments\"></a>\n    <h3 class=\"comment-title\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comments.title", options) : helperMissing.call(depth0, "t", "comments.title", options))));
  data.buffer.push("</h3>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-comments'] || (depth0 && depth0['we-comments']),options={hash:{
    'commentedModelName': ("page"),
    'commentedModelId': ("record.id")
  },hashTypes:{'commentedModelName': "STRING",'commentedModelId': "ID"},hashContexts:{'commentedModelName': depth0,'commentedModelId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-comments", options))));
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-comment-form'] || (depth0 && depth0['we-comment-form']),options={hash:{
    'commentedModelName': ("page"),
    'commentedModelId': ("record.id")
  },hashTypes:{'commentedModelName': "STRING",'commentedModelId': "ID"},hashContexts:{'commentedModelName': depth0,'commentedModelId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-comment-form", options))));
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['page/regions'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("regionClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers.each.call(depth0, "widgets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "openAddModalWidget", "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(">Add widget</button>\n    </div>\n  ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" -\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n        no widgets\n      ");
  }

  data.buffer.push("<div class=\"layout-regions row\">\n  ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['pages/create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page.form", "model", options) : helperMissing.call(depth0, "render", "page.form", "model", options))));
  
});Ember.TEMPLATES['pages/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <span class=\"text-primary glyphicon glyphicon-plus\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.create", options) : helperMissing.call(depth0, "t", "page.create", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr>\n          <td>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page", "record.id", options) : helperMissing.call(depth0, "link-to", "page", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page", "record.id", options) : helperMissing.call(depth0, "link-to", "page", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n           ");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "record.createdAt", options) : helperMissing.call(depth0, "date", "record.createdAt", options))));
  data.buffer.push("\n          </td>\n        </tr>\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers._triageMustache.call(depth0, "record.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers._triageMustache.call(depth0, "record.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "pages.empty", options) : helperMissing.call(depth0, "t", "pages.empty", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

  data.buffer.push("<h1 class=\"page-header\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "pages.title", options) : helperMissing.call(depth0, "t", "pages.title", options))));
  data.buffer.push("</h1>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "pages.create", options) : helperMissing.call(depth0, "link-to", "pages.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n<br>\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover table-striped\">\n    <thead>\n      <tr>\n        <th>id</th>\n        <th>Title</th>\n      <th>Created at</th>\n      </tr>\n    </thead>\n    <tbody>\n      ");
  stack1 = helpers.each.call(depth0, "record", "in", "records", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tbody>\n  </table>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['partials/footer'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<hr>\n  <h5 class=\"text-center\">\n    <a href=\"https://github.com/wejs/we\" target=\"ext\">We.js</a>\n  </h5>\n<hr>\n");
  
});Ember.TEMPLATES['partials/home-about-site'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<section role=\"section\" id=\"section-start\" class=\"section-start\">\n  <div>\n    <!-- welcome -->\n    <aside class=\"welcome\">\n      <h1 class=\"title\">We.js</h1>\n      <h3 class=\"text\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Real time social network with node.js", options) : helperMissing.call(depth0, "t", "Real time social network with node.js", options))));
  data.buffer.push("</h3>\n      <p><a href=\"https://github.com/wejs/we\"><span class=\"glyphicon glyphicon-link\"></span> https://github.com/wejs/we</a></p>\n    </aside>\n  </div>\n</section>");
  return buffer;
  
});Ember.TEMPLATES['partials/home-not-authenticated'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"jumbotron\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/home-about-site", options) : helperMissing.call(depth0, "partial", "partials/home-about-site", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/navbar'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"/admin\">\n        <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("configs.appLogo")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(" width=\"25px\" />\n        ");
  stack1 = helpers._triageMustache.call(depth0, "configs.appName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" | Admin</a>\n    </div>\n\n		<ul class=\"nav navbar-top-links navbar-right\">\n		  <li class=\"dropdown\">\n		    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\"><i class=\"fa fa-user\"></i> ");
  stack1 = helpers._triageMustache.call(depth0, "currentUser.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <b class=\"caret\"></b></a>\n		    <ul class=\"dropdown-menu\">\n		      <li>\n		          <a href=\"/\"><i class=\"fa fa-fw fa-desktop\"></i> Home / app</a>\n		      </li>\n		      <li class=\"divider\"></li>\n		      <li>\n		          <a href=\"/auth/logout\"><i class=\"fa fa-sign-out fa-fw\"></i> Log Out</a>\n		      </li>\n		    </ul>\n		  </li>\n		</ul>\n\n    <!-- /.navbar-top-links -->\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/sidebar", options) : helperMissing.call(depth0, "partial", "partials/sidebar", options))));
  data.buffer.push("\n</nav>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/sidebar'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n\n<div class=\"navbar-default sidebar\" role=\"navigation\">\n	<div class=\"sidebar-nav navbar-collapse\">\n		");
  data.buffer.push(escapeExpression((helper = helpers['we-menu'] || (depth0 && depth0['we-menu']),options={hash:{
    'menuName': ("admin"),
    'classNames': ("nav-colapsable"),
    'enableMetisMenu': (true)
  },hashTypes:{'menuName': "STRING",'classNames': "STRING",'enableMetisMenu': "BOOLEAN"},hashContexts:{'menuName': depth0,'classNames': depth0,'enableMetisMenu': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-menu", options))));
  data.buffer.push("\n	</div>\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['partials/toolbar'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      Editar\n      ");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n      Voltar\n    ");
  }

  data.buffer.push("<div class='row'>\n  <div class='col-md-12'>\n    <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user.edit", "record.id", options) : helperMissing.call(depth0, "link-to", "user.edit", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <button type=\"button\" class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#we-account-modal\">Gerenciar Senha</button>\n    </div>  \n\n  	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "user.index", options) : helperMissing.call(depth0, "link-to", "user.index", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['partials/vocabulary-create-form'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("\n<form role=\"form\">\n\n  <div class=\"form-group\">\n    <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabulary.field.name.label", options) : helperMissing.call(depth0, "t", "vocabulary.field.name.label", options))));
  data.buffer.push("</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("name"),
    'value': ("model.vocabulary.name"),
    'type': ("text"),
    'placeholderTranslation': ("vocabulary.field.name.placeholder"),
    'required': ("true"),
    'classNames': ("form-control")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n    <p class=\"help-block\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabulary.field.name.description", options) : helperMissing.call(depth0, "t", "vocabulary.field.name.description", options))));
  data.buffer.push("</p>\n  </div>\n\n\n\n  <div class=\"form-group\">\n    <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabulary.field.description.label", options) : helperMissing.call(depth0, "t", "vocabulary.field.description.label", options))));
  data.buffer.push("</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'name': ("description"),
    'value': ("model.vocabulary.description"),
    'classNames': ("form-control"),
    'rows': (6)
  },hashTypes:{'name': "STRING",'value': "ID",'classNames': "STRING",'rows': "INTEGER"},hashContexts:{'name': depth0,'value': depth0,'classNames': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n    <p class=\"help-block\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabulary.field.description.description", options) : helperMissing.call(depth0, "t", "vocabulary.field.description.description", options))));
  data.buffer.push("</p>\n  </div>\n\n  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "create", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"submit\" class=\"btn btn-primary\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "create", options) : helperMissing.call(depth0, "t", "create", options))));
  data.buffer.push("</button>\n\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabularies", options) : helperMissing.call(depth0, "link-to", "vocabularies", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</form>");
  return buffer;
  
});Ember.TEMPLATES['permissions/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.create.role", options) : helperMissing.call(depth0, "t", "admin.create.role", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n  <table class=\"table table-striped table-bordered\">\n    <thead>\n      <tr>\n        <th>Permission</th>\n\n        ");
  stack1 = helpers.each.call(depth0, "roles", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        <th>administrator</th>\n      </tr>\n    </thead>\n    <tbody>\n      ");
  stack1 = helpers.each.call(depth0, "permission", "in", "records", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tbody>\n  </table>\n");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <th>");
  stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n        ");
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        <tr>\n          <th scope=\"row\">");
  stack1 = helpers._triageMustache.call(depth0, "permission.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n          ");
  stack1 = helpers.each.call(depth0, "role", "in", "roles", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          <td>\n            <input type=\"checkbox\" disabled=\"true\" checked=\"true\">\n          </td>\n        </tr>\n      ");
  return buffer;
  }
function program7(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-role-permission-checkbox'] || (depth0 && depth0['we-role-permission-checkbox']),options={hash:{
    'role': ("role"),
    'permission': ("permission")
  },hashTypes:{'role': "ID",'permission': "ID"},hashContexts:{'role': depth0,'permission': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-role-permission-checkbox", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program9(depth0,data) {
  
  
  data.buffer.push("\n  <span class=\"glyphicon glyphicon-refresh\"></span> ...\n");
  }

  data.buffer.push("<h2>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.permissions.title", options) : helperMissing.call(depth0, "t", "admin.permissions.title", options))));
  data.buffer.push("</h2>\n\n<div class=\"actions\">\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "roles.create", options) : helperMissing.call(depth0, "link-to", "roles.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <a href=\"/api/v1/fetchActionPermissions?redirect=/admin#/permissions\" class=\"btn\">\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.permissions.fetchAll", options) : helperMissing.call(depth0, "t", "admin.permissions.fetchAll", options))));
  data.buffer.push("\n  </a>\n</div>\n<br>\n");
  stack1 = helpers['if'].call(depth0, "records.isFulfilled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['region'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"region col-md-12\">\n	<div class=\"widget-content-example\"></div>\n</div>");
  
});Ember.TEMPLATES['regions/create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  return buffer;
  
});Ember.TEMPLATES['regions/list-edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    <div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("regionClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      <div class=\"widget-content-example\">\n        <h5>Edit region</h5>\n        <div class=\"edit-region-form\">\n          <form ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveRecord", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <label class=\"input-group-addon\">Name</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("name"),
    'value': ("model.name"),
    'classNames': ("form-control")
  },hashTypes:{'name': "STRING",'value': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <label class=\"input-group-addon\">Columns</label>\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "select", {hash:{
    'name': ("columns"),
    'classNames': ("form-control"),
    'value': ("model.columns"),
    'content': ("columnsOptions")
  },hashTypes:{'name': "STRING",'classNames': "STRING",'value': "ID",'content': "ID"},hashContexts:{'name': depth0,'classNames': depth0,'value': depth0,'content': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <label class=\"input-group-addon\">Order</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("order"),
    'type': ("number"),
    'value': ("model.order"),
    'classNames': ("form-control")
  },hashTypes:{'name': "STRING",'type': "STRING",'value': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'type': depth0,'value': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <button class=\"btn btn-default\" type=\"submit\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Save", options) : helperMissing.call(depth0, "t", "Save", options))));
  data.buffer.push("</button>\n            <div>\n          </form>\n        </div>\n      </div>\n    </div>\n  ");
  return buffer;
  }

  data.buffer.push("<div class=\"layout-regions row\">\n  ");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['regions/list'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n		<div ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'class': ("regionClass")
  },hashTypes:{'class': "ID"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n      ");
  stack1 = helpers.each.call(depth0, "widgets", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      <button class=\"btn btn-default\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "addWidget", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Add widget</button>\n\n		</div>\n	");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n        ");
  stack1 = helpers._triageMustache.call(depth0, "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" -\n\n      ");
  return buffer;
  }

function program4(depth0,data) {
  
  
  data.buffer.push("\n        no widgets\n\n      ");
  }

  data.buffer.push("<div class=\"layout-regions row\">\n	");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['term/form'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<form role=\"form\">\n  <div class=\"form-group\">\n    <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "term.field.text.label", options) : helperMissing.call(depth0, "t", "term.field.text.label", options))));
  data.buffer.push("</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("text"),
    'value': ("record.text"),
    'type': ("text"),
    'placeholderTranslation': ("term.field.text.placeholder"),
    'required': ("true"),
    'classNames': ("form-control")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n    <p class=\"help-block\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "term.field.text.help", options) : helperMissing.call(depth0, "t", "term.field.text.help", options))));
  data.buffer.push("</p>\n  </div>\n\n  <div class=\"form-group\">\n    <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "term.field.description.label", options) : helperMissing.call(depth0, "t", "term.field.description.label", options))));
  data.buffer.push("</label>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
    'name': ("description"),
    'value': ("record.description"),
    'classNames': ("form-control"),
    'rows': (6)
  },hashTypes:{'name': "STRING",'value': "ID",'classNames': "STRING",'rows': "INTEGER"},hashContexts:{'name': depth0,'value': depth0,'classNames': depth0,'rows': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
  data.buffer.push("\n\n    <p class=\"help-block\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "term.field.description.help", options) : helperMissing.call(depth0, "t", "term.field.description.help", options))));
  data.buffer.push("</p>\n  </div>\n\n  <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "createRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"submit\" class=\"btn btn-primary\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Create", options) : helperMissing.call(depth0, "t", "Create", options))));
  data.buffer.push("</button>\n\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "vocabulary", "vocabulary.id", options) : helperMissing.call(depth0, "link-to", "vocabulary", "vocabulary.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</form>");
  return buffer;
  
});Ember.TEMPLATES['user/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  data.buffer.push("\n      Cancelar\n    	");
  }

  data.buffer.push("<form class=\"form-horizontal\">\n  <div class=\"form-group\">\n    <label class=\"col-sm-2 control-label\">Username</label>\n    <div class=\"col-sm-10\">\n			");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("username"),
    'value': ("record.username"),
    'required': ("true"),
    'classNames': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-2 control-label\">Biography</label>\n    <div class=\"col-sm-10\">\n    	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("biography"),
    'value': ("record.biography"),
    'required': ("true"),
    'classNames': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("      \n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-10\">\n    	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("email"),
    'value': ("record.email"),
    'required': ("true"),
    'classNames': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("      \n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-2 control-label\">DisplayName</label>\n    <div class=\"col-sm-10\">\n    	");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("text"),
    'name': ("displayName"),
    'value': ("record.displayName"),
    'required': ("true"),
    'classNames': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'value': "ID",'required': "STRING",'classNames': "STRING"},hashContexts:{'type': depth0,'name': depth0,'value': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("      \n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"col-sm-2 control-label\">Active</label>\n    <div class=\"col-sm-10\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'type': ("checkbox"),
    'name': ("active"),
    'checked': ("record.active"),
    'class': ("form-control")
  },hashTypes:{'type': "STRING",'name': "STRING",'checked': "ID",'class': "STRING"},hashContexts:{'type': depth0,'name': depth0,'checked': depth0,'class': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n    </div>\n  </div>\n	<div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"button\" class=\"btn btn-success save-success\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(">Salvar</button>\n			");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'class': ("btn btn-default")
  },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user.view", "record.id", options) : helperMissing.call(depth0, "link-to", "user.view", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>  \n</form>");
  return buffer;
  
});Ember.TEMPLATES['user/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover table-striped\">\n    <thead>\n      <tr>\n        <th>id</th>\n        <th>idInProvider</th>\n        <th>username</th>\n        <th>email</th>\n        <th>active</th>\n        <th>isAdmin</th>\n      </tr>\n    </thead>\n\n    <tbody>\n        <tr>\n          <td>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user.view", "user.id", options) : helperMissing.call(depth0, "link-to", "user.view", "user.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n          ");
  stack1 = helpers._triageMustache.call(depth0, "user.idInProvider", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user.view", "user.id", options) : helperMissing.call(depth0, "link-to", "user.view", "user.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "user.email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "user.active", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "user.isAdmin", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>                    \n        </tr>\n    </tbody>\n  </table>\n</div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers._triageMustache.call(depth0, "user.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            ");
  stack1 = helpers._triageMustache.call(depth0, "user.username", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          ");
  return buffer;
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n<div class=\"container-fluid\">\n  <h2 class=\"text-center\">Selecione um usuário!</h2>\n</div>\n");
  }

  data.buffer.push(escapeExpression((helper = helpers['we-title'] || (depth0 && depth0['we-title']),options={hash:{
    'title': ("Usuários")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-title", options))));
  data.buffer.push("\n\n<div class=\"container-fluid\">\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-user-search'] || (depth0 && depth0['we-user-search']),options={hash:{
    'weUserSearchSelected': ("weUserSearchSelected"),
    'weUserSearchClass': ("weUserSearch"),
    'weSearchField': ("email"),
    'delegate': ("controller"),
    'addEmail': ("true")
  },hashTypes:{'weUserSearchSelected': "STRING",'weUserSearchClass': "STRING",'weSearchField': "STRING",'delegate': "ID",'addEmail': "STRING"},hashContexts:{'weUserSearchSelected': depth0,'weUserSearchClass': depth0,'weSearchField': depth0,'delegate': depth0,'addEmail': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-user-search", options))));
  data.buffer.push("\n  <small class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#we-oauth-search\">Buscar CPF</small>\n</div>\n\n<br>\n");
  stack1 = helpers['if'].call(depth0, "user", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(6, program6, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers['we-oauth-search'] || (depth0 && depth0['we-oauth-search']),options={hash:{
    'weOauthSearchSelected': ("weOauthSearchSelected"),
    'store': ("controller.store")
  },hashTypes:{'weOauthSearchSelected': "STRING",'store': "ID"},hashContexts:{'weOauthSearchSelected': depth0,'store': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-oauth-search", options))));
  data.buffer.push("\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['user/view'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr>\n          <th>");
  stack1 = helpers._triageMustache.call(depth0, "attribute", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n          <td>");
  data.buffer.push(escapeExpression((helper = helpers['sub-atribute'] || (depth0 && depth0['sub-atribute']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["ID","ID"],data:data},helper ? helper.call(depth0, "record", "attribute", options) : helperMissing.call(depth0, "sub-atribute", "record", "attribute", options))));
  data.buffer.push("</td>\n        </tr>        \n      ");
  return buffer;
  }

  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/toolbar", options) : helperMissing.call(depth0, "partial", "partials/toolbar", options))));
  data.buffer.push("\n<br>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover table-striped\">\n    <tbody>\n      ");
  stack1 = helpers.each.call(depth0, "attribute", "in", "attributes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("    \n    </tbody>\n  </table>\n</div>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/toolbar", options) : helperMissing.call(depth0, "partial", "partials/toolbar", options))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers['we-account-modal'] || (depth0 && depth0['we-account-modal']),options={hash:{
    'user': ("record")
  },hashTypes:{'user': "ID"},hashContexts:{'user': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-account-modal", options))));
  return buffer;
  
});Ember.TEMPLATES['vocabularies'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <span class=\"text-primary glyphicon glyphicon-plus\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabulary.button.create", options) : helperMissing.call(depth0, "t", "vocabulary.button.create", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n          <th>");
  stack1 = helpers._triageMustache.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</th>\n        ");
  return buffer;
  }

function program5(depth0,data) {
  
  
  data.buffer.push("\n             Termos livres\n          ");
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr>\n          <td>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "vocabulary", "record.id", options) : helperMissing.call(depth0, "link-to", "vocabulary", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "vocabulary", "record.id", options) : helperMissing.call(depth0, "link-to", "vocabulary", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "record.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "record.createdAt", options) : helperMissing.call(depth0, "date", "record.createdAt", options))));
  data.buffer.push("\n          </td>\n          <td>\n            ");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "record.updatedAt", options) : helperMissing.call(depth0, "date", "record.updatedAt", options))));
  data.buffer.push("\n          </td>\n        </tr>\n      ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers._triageMustache.call(depth0, "record.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers._triageMustache.call(depth0, "record.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }

  data.buffer.push("<h2>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "admin.vocabularies.title", options) : helperMissing.call(depth0, "t", "admin.vocabularies.title", options))));
  data.buffer.push("</h2>\n\n<div class='row'>\n  <div class='col-md-12'>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabulary.create", options) : helperMissing.call(depth0, "link-to", "vocabulary.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n</div>\n<br>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover table-striped\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        ");
  stack1 = helpers.each.call(depth0, "attributes", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr>\n        <td>0</td>\n        <td>\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "vocabulary", "0", options) : helperMissing.call(depth0, "link-to", "vocabulary", "0", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </td>\n        <td>Termos sem um vocabulário</td>\n        <td></td><td></td>\n      </tr>\n        ");
  stack1 = helpers.each.call(depth0, "record", "in", "vocabularies", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tbody>\n  </table>\n</div>\n\n");
  return buffer;
  
});Ember.TEMPLATES['vocabulary'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-title'] || (depth0 && depth0['we-title']),options={hash:{
    'title': ("vocabulary.name")
  },hashTypes:{'title': "ID"},hashContexts:{'title': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-title", options))));
  data.buffer.push("\n  <p class=\"lead\">");
  stack1 = helpers._triageMustache.call(depth0, "vocabulary.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</p>\n\n  <hr/>\n\n  <h2>Termos no vocabulário</h2>\n");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-title'] || (depth0 && depth0['we-title']),options={hash:{
    'title': ("Termos sem vocabulário")
  },hashTypes:{'title': "STRING"},hashContexts:{'title': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-title", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <span class=\"text-primary glyphicon glyphicon-plus\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "term.create", options) : helperMissing.call(depth0, "t", "term.create", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <tr>\n          <td>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "record.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  stack1 = (helper = helpers['we-content-editable'] || (depth0 && depth0['we-content-editable']),options={hash:{
    'record': ("record"),
    'value': ("record.text"),
    'attribute': ("text")
  },hashTypes:{'record': "ID",'value': "ID",'attribute': "STRING"},hashContexts:{'record': depth0,'value': depth0,'attribute': depth0},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-content-editable", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  stack1 = helpers._triageMustache.call(depth0, "record.description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n          <td>\n            ");
  stack1 = (helper = helpers['we-btn-record-delete'] || (depth0 && depth0['we-btn-record-delete']),options={hash:{
    'record': ("record"),
    'confirmTextTranslation': ("term.delete.confirm"),
    'classNames': ("btn btn-sm btn-default")
  },hashTypes:{'record': "ID",'confirmTextTranslation': "STRING",'classNames': "STRING"},hashContexts:{'record': depth0,'confirmTextTranslation': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(10, program10, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-btn-record-delete", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </td>\n        </tr>\n      ");
  return buffer;
  }
function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers['focus-input'] || (depth0 && depth0['focus-input']),options={hash:{
    'value': ("record.text"),
    'classNames': ("form-control"),
    'type': ("text")
  },hashTypes:{'value': "ID",'classNames': "STRING",'type': "STRING"},hashContexts:{'value': depth0,'classNames': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "focus-input", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <span class=\"text-danger glyphicon glyphicon-remove\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Delete", options) : helperMissing.call(depth0, "t", "Delete", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <tr>\n          <td colspan=\"6\">\n            <div class=\"jumbotron\">\n              <p class=\"text-center\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabulary.terms.empty", options) : helperMissing.call(depth0, "t", "vocabulary.terms.empty", options))));
  data.buffer.push("</p>\n            </div>\n          </td>\n        </tr>\n      ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "vocabulary.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n\n<div class='row'>\n  <div class='col-md-12'>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-default")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabulary.createTerm", options) : helperMissing.call(depth0, "link-to", "vocabulary.createTerm", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <hr>\n  <div class='col-md-12'>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n  <hr>\n</div>\n<br>\n\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-hover table-striped\">\n    <thead>\n      <tr>\n        <th>Id</th>\n        <th>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "text", options) : helperMissing.call(depth0, "t", "text", options))));
  data.buffer.push("</th>\n        <th>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "description", options) : helperMissing.call(depth0, "t", "description", options))));
  data.buffer.push("</th>\n        <th>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Actions", options) : helperMissing.call(depth0, "t", "Actions", options))));
  data.buffer.push("</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      ");
  stack1 = helpers.each.call(depth0, "record", "in", "terms", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </tbody>\n  </table>\n</div>\n\n");
  return buffer;
  
});Ember.TEMPLATES['vocabulary/create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<h1 class=\"page-header\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "vocabulary.button.create", options) : helperMissing.call(depth0, "t", "vocabulary.button.create", options))));
  data.buffer.push("</h1>\n\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/vocabulary-create-form", options) : helperMissing.call(depth0, "partial", "partials/vocabulary-create-form", options))));
  return buffer;
  
});Ember.TEMPLATES['vocabulary/createTerm'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "term.form", "model", options) : helperMissing.call(depth0, "render", "term.form", "model", options))));
  
});