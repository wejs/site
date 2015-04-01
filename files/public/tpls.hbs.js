Ember.TEMPLATES['403'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
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
  
});Ember.TEMPLATES['auth/RegisterForm'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    <h2 class=\"form-signin-heading\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Create account", options) : helperMissing.call(depth0, "t", "Create account", options))));
  data.buffer.push("\n      <br>\n    </h2>\n  </div>\n  <div class=\"panel-body\">\n\n<aside class=\"form-signup\">\n\n  ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n  <form  ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "submit", {hash:{
    'on': ("submit")
  },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" name=\"createAccountForm\" class=\"user-signup-form\" method=\"POST\">\n    <h4>Informações nescessárias para criação da conta:</h4>\n    <!-- input: username -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"name\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("username"),
    'value': ("user.username"),
    'type': ("text"),
    'placeholderTranslation': ("auth.register.username.label"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <!-- /input: username -->\n\n    <!-- input: email -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"email\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-envelope\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("email"),
    'value': ("user.email"),
    'type': ("email"),
    'placeholderTranslation': ("auth.register.email.label"),
    'classNames': ("form-control input-lg"),
    'required': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'classNames': "STRING",'required': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <!-- /input: email -->\n\n\n    <!-- input: confirm email -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"confirmEmail\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-envelope\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("confirmEmail"),
    'value': ("user.confirmEmail"),
    'type': ("email"),
    'placeholderTranslation': ("auth.register.confirmEmail.label"),
    'classNames': ("form-control input-lg"),
    'required': ("true")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'classNames': "STRING",'required': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'classNames': depth0,'required': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <!-- input: confirm-email -->\n\n    <!-- input: password -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"password\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-lock\"> </span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("password"),
    'value': ("user.password"),
    'type': ("password"),
    'placeholderTranslation': ("auth.register.password.label"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n\n        <!-- input: confirm-password -->\n        <label for=\"confirm-password\" class=\"sr-only input-group-btn\">\n\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("confirmPassword"),
    'value': ("user.confirmPassword"),
    'type': ("password"),
    'placeholderTranslation': ("auth.register.confirmPassword.label"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n        <!-- /input: confirm-password -->\n      </div>\n    </div>\n    <!-- /input: password -->\n    <hr>\n    <h4>Informações opcionais:</h4>\n    <!-- input: displayName -->\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"displayName\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n        </label>\n        ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("displayName"),
    'value': ("user.displayName"),
    'type': ("text"),
    'placeholderTranslation': ("auth.register.displayName.label"),
    'required': ("true"),
    'classNames': ("form-control input-lg")
  },hashTypes:{'name': "STRING",'value': "ID",'type': "STRING",'placeholderTranslation': "STRING",'required': "STRING",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'type': depth0,'placeholderTranslation': depth0,'required': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n      </div>\n    </div>\n    <!-- /input: displayName -->\n\n    <hr>\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <label for=\"language\" class=\"input-group-addon\">\n          <span class=\"glyphicon glyphicon-globe\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "auth.register.language.label", options) : helperMissing.call(depth0, "t", "auth.register.language.label", options))));
  data.buffer.push("\n        </label>\n        ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "select", {hash:{
    'name': ("language"),
    'value': ("user.language"),
    'content': ("defaultlanguages"),
    'classNames': ("form-control input-md")
  },hashTypes:{'name': "STRING",'value': "ID",'content': "ID",'classNames': "STRING"},hashContexts:{'name': depth0,'value': depth0,'content': depth0,'classNames': depth0},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push("\n      </div>\n    </div>\n\n    <hr>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-sys-messages'] || (depth0 && depth0['we-sys-messages']),options={hash:{
    'messages': ("messages")
  },hashTypes:{'messages': "ID"},hashContexts:{'messages': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-sys-messages", options))));
  data.buffer.push("\n\n    <div class=\"form-group\">\n      <div class=\"input-group\">\n        <button name=\"registerUser\" class=\"btn btn-lg btn-success\" type=\"submit\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Sign up", options) : helperMissing.call(depth0, "t", "Sign up", options))));
  data.buffer.push("\n          <span class=\"glyphicon glyphicon-chevron-right\"> </span>\n        </button>\n      </div>\n    </div>\n\n  </form>\n\n</aside>\n\n  </div>\n\n  <div class=\"panel-footer\">\n\n  </div>\n\n</div>\n");
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
  
});Ember.TEMPLATES['avatar/image'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', escapeExpression=this.escapeExpression;


  data.buffer.push("<img width=\"35\" height=\"35\" class=\"avatar\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("avatarUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">");
  return buffer;
  
});Ember.TEMPLATES['avatar/linkImage'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<a href=\"\">\n  <img width=\"35\" height=\"35\" class=\"avatar\" ");
  data.buffer.push(escapeExpression((helper = helpers.bindAttr || (depth0 && depth0.bindAttr),options={hash:{
    'src': ("avatarUrl")
  },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "bindAttr", options))));
  data.buffer.push(">\n</a>");
  return buffer;
  
});Ember.TEMPLATES['block-form'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<form>	\n	<div>\n		<h4>editar bloco ");
  stack1 = helpers._triageMustache.call(depth0, "model.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h4>\n	</div>\n\n	<div class=\"form-group\">\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.name")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	</div>\n\n	<div class=\"form-group\">\n		");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'value': ("model.class")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	</div>	\n</form>");
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
  
});Ember.TEMPLATES['components/list'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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

  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
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
  var stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  ");
  stack1 = helpers['if'].call(depth0, "_view.contentIndex", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <a>");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "term/item", "", options) : helperMissing.call(depth0, "render", "term/item", "", options))));
  data.buffer.push("</a>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push(" , ");
  }

  stack1 = helpers.each.call(depth0, "terms", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
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
  data.buffer.push("\n</div>\n");
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
  
});Ember.TEMPLATES['components/widget-actions'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("widget-actions.hbs\neditar | deletar");
  
});Ember.TEMPLATES['image/UploadPreview'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<img class=\"image-preview\">\noi");
  
});Ember.TEMPLATES['image/crop'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  data.buffer.push("<div class=\"row\"><div class=\"col-md-12\">\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancelCrop", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Cancel</button>\n<button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveCrop", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Save</button>\n</div></div>\n<br>\n<div class=\"row\"><div class=\"col-md-12\">\n\n");
  data.buffer.push(escapeExpression((helper = helpers['we-image-crop'] || (depth0 && depth0['we-image-crop']),options={hash:{
    'src': ("image.urls.original"),
    'file': ("image"),
    'data': ("cropImageData")
  },hashTypes:{'src': "ID",'file': "ID",'data': "ID"},hashContexts:{'src': depth0,'file': depth0,'data': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-image-crop", options))));
  data.buffer.push("\n\n</div></div>");
  return buffer;
  
});Ember.TEMPLATES['image/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"col-md-12\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "image.crop", "image.name", options) : helperMissing.call(depth0, "link-to", "image.crop", "image.name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  
  data.buffer.push("\n      Redimencionar\n    ");
  }

  data.buffer.push("<div class=\"row\">\n\n<div class=\"col-md-12\">\n");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Send by", options) : helperMissing.call(depth0, "t", "Send by", options))));
  data.buffer.push(" ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.UserNameView", {hash:{
    'user': ("creator")
  },hashTypes:{'user': "ID"},hashContexts:{'user': depth0},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n</div>\n<div class=\"col-md-12\">\n  <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("image.urls.large")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n</div>\n\n");
  stack1 = helpers['if'].call(depth0, "isCreator", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n</div>");
  return buffer;
  
});Ember.TEMPLATES['image/item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['layout'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n \n	");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push("\n\n");
  return buffer;
  }

  data.buffer.push("\n\n");
  stack1 = helpers.each.call(depth0, "view.regions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
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
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers['image-upload'] || (depth0 && depth0['image-upload']),options={hash:{
    'classNames': ("form-control header-inputs"),
    'files': ("selectedImage")
  },hashTypes:{'classNames': "STRING",'files': "ID"},hashContexts:{'classNames': depth0,'files': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "image-upload", options))));
  data.buffer.push("\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "resetSelectedImage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "reset", options) : helperMissing.call(depth0, "t", "reset", options))));
  data.buffer.push("</button>\n            ");
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n            <div class=\"form-group\">\n              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success\">Save</button>\n              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveAndPublishRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Save and publish</button>\n              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Cancel</button>\n            </div>\n          ");
  return buffer;
  }

  data.buffer.push("<!-- Page Header -->\n<!-- Set your background image for this header on the line below. -->\n<header class=\"intro-header\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("headerImage")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n        <div class=\"post-heading\">\n          <h1>");
  data.buffer.push(escapeExpression((helper = helpers['focus-input'] || (depth0 && depth0['focus-input']),options={hash:{
    'value': ("record.title"),
    'placeholder': ("Write the title here"),
    'classNames': ("form-control input-lg header-inputs")
  },hashTypes:{'value': "ID",'placeholder': "STRING",'classNames': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "focus-input", options))));
  data.buffer.push("</h1>\n          <h2 class=\"subheading\">\n            <label for=\"about\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.about.label", options) : helperMissing.call(depth0, "t", "page.form.about.label", options))));
  data.buffer.push("</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-editor'] || (depth0 && depth0['we-editor']),options={hash:{
    'value': ("record.about"),
    'style': ("small"),
    'classNames': ("header-inputs")
  },hashTypes:{'value': "ID",'style': "STRING",'classNames': "STRING"},hashContexts:{'value': depth0,'style': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editor", options))));
  data.buffer.push("\n          </h2>\n          <div class=\"record-featuredImage\">\n            ");
  stack1 = helpers.unless.call(depth0, "inputReset", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "selectedImage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- Post Content -->\n<page>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n        <form>\n          <div class=\"form-group\">\n            <div class=\"post-edit-body\">\n              <label for=\"body\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.body.label", options) : helperMissing.call(depth0, "t", "page.form.body.label", options))));
  data.buffer.push("</label>\n              ");
  data.buffer.push(escapeExpression((helper = helpers['we-editor'] || (depth0 && depth0['we-editor']),options={hash:{
    'value': ("record.body")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editor", options))));
  data.buffer.push("\n            </div>\n          </div>\n\n          <hr>\n\n          <div class=\"form-group\">\n            <div class=\"post-edit-category\">\n              <label for=\"category\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.category.label", options) : helperMissing.call(depth0, "t", "page.form.category.label", options))));
  data.buffer.push("</label>\n              ");
  data.buffer.push(escapeExpression((helper = helpers['we-category-field'] || (depth0 && depth0['we-category-field']),options={hash:{
    'value': ("record.category"),
    'newTagMark': (" (nova)"),
    'maximumSelectionSize': ("4")
  },hashTypes:{'value': "ID",'newTagMark': "STRING",'maximumSelectionSize': "STRING"},hashContexts:{'value': depth0,'newTagMark': depth0,'maximumSelectionSize': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-category-field", options))));
  data.buffer.push("\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"tag\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.tag.label", options) : helperMissing.call(depth0, "t", "page.form.tag.label", options))));
  data.buffer.push("</label>\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-tag-field'] || (depth0 && depth0['we-tag-field']),options={hash:{
    'value': ("record.tag"),
    'newTagMark': (" (nova)"),
    'maximumSelectionSize': ("5")
  },hashTypes:{'value': "ID",'newTagMark': "STRING",'maximumSelectionSize': "STRING"},hashContexts:{'value': depth0,'newTagMark': depth0,'maximumSelectionSize': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-tag-field", options))));
  data.buffer.push("\n          </div>\n\n          <hr>\n\n          <div class=\"checkbox\">\n            <label>\n              ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("published"),
    'type': ("checkbox"),
    'checked': ("record.published")
  },hashTypes:{'name': "STRING",'type': "STRING",'checked': "ID"},hashContexts:{'name': depth0,'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n              ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.published.label", options) : helperMissing.call(depth0, "t", "page.form.published.label", options))));
  data.buffer.push("\n            </label>\n          </div>\n\n          <hr>\n\n          ");
  stack1 = helpers['if'].call(depth0, "record.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n        </form>\n      </div>\n\n    </div>\n  </div>\n</page>\n");
  return buffer;
  
});Ember.TEMPLATES['page/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n              ");
  stack1 = helpers._triageMustache.call(depth0, "record.creator.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n            ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "page_update", "page", "record", options) : helperMissing.call(depth0, "can", "page_update", "page", "record", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "page_delete", "page", "record", options) : helperMissing.call(depth0, "can", "page_delete", "page", "record", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n          ");
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n              ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page.edit", "record.id", options) : helperMissing.call(depth0, "link-to", "page.edit", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  return buffer;
  }
function program5(depth0,data) {
  
  
  data.buffer.push("\n                Edit\n              ");
  }

function program7(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n              <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRecord", "record.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">\n                Delete\n              </button>\n            ");
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <div class=\"record-category\">\n                <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.category.label", options) : helperMissing.call(depth0, "t", "page.form.category.label", options))));
  data.buffer.push("</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers['we-terms'] || (depth0 && depth0['we-terms']),options={hash:{
    'terms': ("record.category")
  },hashTypes:{'terms': "ID"},hashContexts:{'terms': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-terms", options))));
  data.buffer.push("\n              </div>\n            ");
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <div class=\"record-tag\">\n                <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.form.tag.label", options) : helperMissing.call(depth0, "t", "page.form.tag.label", options))));
  data.buffer.push("</label>\n                ");
  data.buffer.push(escapeExpression((helper = helpers['we-terms'] || (depth0 && depth0['we-terms']),options={hash:{
    'terms': ("record.tag")
  },hashTypes:{'terms': "ID"},hashContexts:{'terms': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-terms", options))));
  data.buffer.push("\n              </div>\n            ");
  return buffer;
  }

  data.buffer.push("<!-- Page Header -->\n<!-- Set your background image for this header on the line below. -->\n<header class=\"intro-header\" ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'style': ("blogBgImageStyle")
  },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n        <div class=\"post-heading\">\n          <h1>");
  stack1 = helpers._triageMustache.call(depth0, "record.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n          <h2 class=\"subheading\">");
  data.buffer.push(escapeExpression((helper = helpers.html || (depth0 && depth0.html),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "record.about", options) : helperMissing.call(depth0, "html", "record.about", options))));
  data.buffer.push("</h2>\n          <span class=\"meta\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.created.by", options) : helperMissing.call(depth0, "t", "page.created.by", options))));
  data.buffer.push("\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "record.creator.id", options) : helperMissing.call(depth0, "link-to", "user", "record.creator.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n             - ");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "record.createdAt", options) : helperMissing.call(depth0, "date", "record.createdAt", options))));
  data.buffer.push("\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n  <!-- Post Content -->\n  <page>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n          ");
  stack1 = helpers['if'].call(depth0, "record.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n          <div class=\"page-body\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers.html || (depth0 && depth0.html),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "record.body", options) : helperMissing.call(depth0, "html", "record.body", options))));
  data.buffer.push("\n          </div>\n\n          \n          <div class=\"record-terms\">\n            ");
  stack1 = helpers['if'].call(depth0, "record.category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n            ");
  stack1 = helpers['if'].call(depth0, "record.tag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n          \n\n        </div>\n\n        <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n          <hr>\n          <div class=\"comment-area\">\n            <a data-link-area=\"comments\" id=\"anchor-comments\"></a>\n            <h3 class=\"comment-title\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comments.title", options) : helperMissing.call(depth0, "t", "comments.title", options))));
  data.buffer.push("</h3>\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-comments'] || (depth0 && depth0['we-comments']),options={hash:{
    'commentedModelName': ("page"),
    'commentedModelId': ("record.id")
  },hashTypes:{'commentedModelName': "STRING",'commentedModelId': "ID"},hashContexts:{'commentedModelName': depth0,'commentedModelId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-comments", options))));
  data.buffer.push("\n\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-comment-form'] || (depth0 && depth0['we-comment-form']),options={hash:{
    'commentedModelName': ("page"),
    'commentedModelId': ("record.id")
  },hashTypes:{'commentedModelName': "STRING",'commentedModelId': "ID"},hashContexts:{'commentedModelName': depth0,'commentedModelId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-comment-form", options))));
  data.buffer.push("\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </page>\n");
  return buffer;
  
});Ember.TEMPLATES['page/teaser'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n    <h2 class=\"post-title\">\n        ");
  stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </h2>\n    <h3 class=\"post-subtitle\">\n        ");
  data.buffer.push(escapeExpression((helper = helpers.html || (depth0 && depth0.html),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "about", options) : helperMissing.call(depth0, "html", "about", options))));
  data.buffer.push("\n    </h3>\n  ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n      ");
  stack1 = helpers._triageMustache.call(depth0, "creator.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</a>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"post-preview\">\n  ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "page", "id", options) : helperMissing.call(depth0, "link-to", "page", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  <p class=\"post-meta\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "page.created.by", options) : helperMissing.call(depth0, "t", "page.created.by", options))));
  data.buffer.push("\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "creator.id", options) : helperMissing.call(depth0, "link-to", "user", "creator.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    - ");
  data.buffer.push(escapeExpression((helper = helpers.date || (depth0 && depth0.date),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "createdAt", options) : helperMissing.call(depth0, "date", "createdAt", options))));
  data.buffer.push("\n  </p>\n</div>\n<hr>");
  return buffer;
  
});Ember.TEMPLATES['pages/create'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "article.form", "model", options) : helperMissing.call(depth0, "render", "article.form", "model", options))));
  
});Ember.TEMPLATES['pages/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"articles-actions\">\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "articles.create", options) : helperMissing.call(depth0, "link-to", "articles.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article.create", options) : helperMissing.call(depth0, "t", "article.create", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <div class=\"articles-pagination\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-pagination'] || (depth0 && depth0['we-pagination']),options={hash:{
    'currentPage': ("currentPage"),
    'totalPages': ("totalPages"),
    'maxPagesToDisplay': ("maxPagesToDisplay")
  },hashTypes:{'currentPage': "ID",'totalPages': "ID",'maxPagesToDisplay': "ID"},hashContexts:{'currentPage': depth0,'totalPages': depth0,'maxPagesToDisplay': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-pagination", options))));
  data.buffer.push("\n          </div>\n        ");
  return buffer;
  }

  data.buffer.push("<!-- Page Header -->\n<header class=\"intro-header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1\">\n        <div class=\"site-heading\">\n          <h1>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "articles.title", options) : helperMissing.call(depth0, "t", "articles.title", options))));
  data.buffer.push("</h1>\n          <hr class=\"small\">\n          <span class=\"subheading\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "articles.subTitle", options) : helperMissing.call(depth0, "t", "articles.subTitle", options))));
  data.buffer.push("</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- Main Content -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article_create", options) : helperMissing.call(depth0, "can", "article_create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "articles.list", "records", options) : helperMissing.call(depth0, "render", "articles.list", "records", options))));
  data.buffer.push("\n\n      <div class=\"records-footer\">\n        ");
  stack1 = helpers['if'].call(depth0, "records.isFulfilled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n     \n    </div>\n\n    ");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/sidebar", options) : helperMissing.call(depth0, "partial", "partials/sidebar", options))));
  data.buffer.push("\n  </div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['pages/list'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n  ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "article.teaser", "", options) : helperMissing.call(depth0, "render", "article.teaser", "", options))));
  data.buffer.push("\n");
  return buffer;
  }

function program3(depth0,data) {
  
  
  data.buffer.push("\n  <div class=\"post-preview\">\n    <h3 class=\"post-subtitle text-center\">\n      No articles found.\n    </h3>\n  </div>\n");
  }

  data.buffer.push("<a id=\"anchor-articles-list\"></a>\n");
  stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[],types:[],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  return buffer;
  
});Ember.TEMPLATES['term/item'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "text", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
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
  data.buffer.push("\n        </button>\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" type=\"button\" class=\"btn btn-xs btn-default\">\n          <span class=\"glyphicon glyphicon-unchecked\"></span> ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Cancel", options) : helperMissing.call(depth0, "t", "Cancel", options))));
  data.buffer.push("\n        </button>\n      ");
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

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"language-area text-center\">");
  stack1 = helpers._triageMustache.call(depth0, "user.language", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n          ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <span class=\"social\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ContactButtomView", {hash:{
    'contactStatus': ("contactStatus")
  },hashTypes:{'contactStatus': "ID"},hashContexts:{'contactStatus': depth0},contexts:[depth0],types:["ID"],data:data})));
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

function program12(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Activity", options) : helperMissing.call(depth0, "t", "Activity", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Contacts", options) : helperMissing.call(depth0, "t", "Contacts", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Images", options) : helperMissing.call(depth0, "t", "Images", options))));
  data.buffer.push("\n      ");
  return buffer;
  }

  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "user_update", "user", "user", options) : helperMissing.call(depth0, "can", "user_update", "user", "user", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<div class=\"user-full\">\n  <div class=\"panel panel-default\">\n    <div class=\"header panel-body\">\n      <div class=\"user-area-data row\">\n        <div class=\"user-area-data-left col-md-2\" >\n          <span class=\"avatar-large\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("user.id"),
    'size': ("responsive")
  },hashTypes:{'userId': "ID",'size': "STRING"},hashContexts:{'userId': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n          ");
  stack1 = helpers['if'].call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n        <div class=\"user-area-data-rigth col-md-10\">\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-editable-text'] || (depth0 && depth0['we-editable-text']),options={hash:{
    'tagName': ("h1"),
    'name': ("displayName"),
    'value': ("user.displayName"),
    'isEditing': ("edit")
  },hashTypes:{'tagName': "STRING",'name': "STRING",'value': "ID",'isEditing': "ID"},hashContexts:{'tagName': depth0,'name': depth0,'value': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editable-text", options))));
  data.buffer.push("\n\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-editable-html'] || (depth0 && depth0['we-editable-html']),options={hash:{
    'name': ("biography"),
    'value': ("user.biography"),
    'isEditing': ("edit")
  },hashTypes:{'name': "STRING",'value': "ID",'isEditing': "ID"},hashContexts:{'name': depth0,'value': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editable-html", options))));
  data.buffer.push("\n\n          <div class=\"actions\">\n            ");
  stack1 = helpers['if'].call(depth0, "showSocialActions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"user-profile-menu-area text-center\">\n    <ul class=\"user-profile-menu nav nav-pills\">\n      <li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "user.id", options) : helperMissing.call(depth0, "link-to", "user", "user.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user.contacts", "user.id", options) : helperMissing.call(depth0, "link-to", "user.contacts", "user.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li>\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user.images", "user.id", options) : helperMissing.call(depth0, "link-to", "user.images", "user.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n    </ul>\n  </div>\n\n  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n  <div class=\"footer\"></div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['user/contacts'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"row pending\">\n  <div class=\"col-md-12\">\n      pending contacts here\n  </div>\n</div>\n<div class=\"row contacts\">\n  <div class=\"col-md-12\">\n     contacts\n  </div>\n</div>");
  
});Ember.TEMPLATES['user/edit'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("edit.hbs");
  
});Ember.TEMPLATES['user/images'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <div class=\"col-md-3\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "image", "name", options) : helperMissing.call(depth0, "link-to", "image", "name", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n      <img ");
  data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
    'src': ("urls.thumbnail")
  },hashTypes:{'src': "ID"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
  data.buffer.push(">\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"row\">\n");
  stack1 = helpers.each.call(depth0, "images", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['user/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div class=\"user-activities\">\n  <h3>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Activity", options) : helperMissing.call(depth0, "t", "Activity", options))));
  data.buffer.push("</h3>\n ");
  data.buffer.push(escapeExpression((helper = helpers['we-activities'] || (depth0 && depth0['we-activities']),options={hash:{
    'user': ("user"),
    'showSharebox': (false)
  },hashTypes:{'user': "ID",'showSharebox': "BOOLEAN"},hashContexts:{'user': depth0,'showSharebox': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-activities", options))));
  data.buffer.push("\n</div>\n");
  return buffer;
  
});Ember.TEMPLATES['user/teaser'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers.substr || (depth0 && depth0.substr),options={hash:{
    'max': (15)
  },hashTypes:{'max': "INTEGER"},hashContexts:{'max': depth0},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "displayName", options) : helperMissing.call(depth0, "substr", "displayName", options))));
  data.buffer.push("\n    ");
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <span class=\"avatar-large\">");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("id"),
    'size': ("medium")
  },hashTypes:{'userId': "ID",'size': "STRING"},hashContexts:{'userId': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n    ");
  return buffer;
  }

  data.buffer.push("<div class=\"col-md-3\">\n<div class=\"user user-teaser teaser panel panel-default text-center\">\n  <div class=\"header panel-heading\">\n    <h3>\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "id", options) : helperMissing.call(depth0, "link-to", "user", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </h3>\n  </div>\n  <div class=\"content panel-body\">\n    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "id", options) : helperMissing.call(depth0, "link-to", "user", "id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n  <div class=\"footer panel-footer\">\n\n  </div>\n</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['user/usermenu'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n<ul class=\"nav navbar-nav navbar-right\">\n  <li>\n    ");
  stack1 = helpers._triageMustache.call(depth0, "we-connection-status", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <a href=\"javascript:;\" class=\"dropdown-toggle user-menu-link\" data-toggle=\"dropdown\">\n      <span class=\"avatar-small\">");
  data.buffer.push(escapeExpression((helper = helpers['user-avatar'] || (depth0 && depth0['user-avatar']),options={hash:{
    'user': ("currentUser"),
    'size': ("thumbnail")
  },hashTypes:{'user': "ID",'size': "STRING"},hashContexts:{'user': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "user-avatar", options))));
  data.buffer.push("</span>\n      <span class=\"user-name \" >");
  stack1 = helpers._triageMustache.call(depth0, "currentUser.displayName", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</span><b class=\"caret\"></b>\n    </a>\n    <ul class=\"dropdown-menu\">\n      <li>\n        <a href=\"javascript:;\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "showAvatarChangeModal", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" >\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change avatar", options) : helperMissing.call(depth0, "t", "Change avatar", options))));
  data.buffer.push("\n        </a>\n      </li>\n      <li class=\"divider\"></li>\n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user", "currentUser.id", options) : helperMissing.call(depth0, "link-to", "user", "currentUser.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li class=\"divider\"></li>      \n      <li>\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "authChangePassword", options) : helperMissing.call(depth0, "link-to", "authChangePassword", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </li>\n      <li class=\"divider\"></li>\n      ");
  stack1 = helpers['if'].call(depth0, "adminMenu", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <li>\n        <a href=\"/auth/logout\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "logOut", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Exit", options) : helperMissing.call(depth0, "t", "Exit", options))));
  data.buffer.push("</a>\n      </li>\n    </ul>\n  </li>\n</ul>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "View / edit profile", options) : helperMissing.call(depth0, "t", "View / edit profile", options))));
  }

function program4(depth0,data) {
  
  var helper, options;
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Change password", options) : helperMissing.call(depth0, "t", "Change password", options))));
  }

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <li>\n          <a href=\"/admin\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "menu.link.manage", options) : helperMissing.call(depth0, "t", "menu.link.manage", options))));
  data.buffer.push("</a>\n        </li>\n        <li class=\"divider\"></li>      \n      ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "currentUser.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['users'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var stack1;


  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});Ember.TEMPLATES['users/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n    ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "user/teaser", "", options) : helperMissing.call(depth0, "render", "user/teaser", "", options))));
  data.buffer.push("\n  ");
  return buffer;
  }

  data.buffer.push("<div id=\"dynamic-grid-container\" class=\"users row\">\n  <div class=\"col-md-12\"><h2>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "Users", options) : helperMissing.call(depth0, "t", "Users", options))));
  data.buffer.push("</h2></div>\n  ");
  stack1 = helpers.each.call(depth0, "controller", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n</div>");
  return buffer;
  
});Ember.TEMPLATES['widget-wrapper'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '';


  data.buffer.push("widget-wrapper.hbs\n\n\n");
  return buffer;
  
});Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/navbar", options) : helperMissing.call(depth0, "partial", "partials/navbar", options))));
  data.buffer.push("\n\n");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n<!-- Footer -->\n");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/footer", options) : helperMissing.call(depth0, "partial", "partials/footer", options))));
  data.buffer.push("\n\n");
  data.buffer.push(escapeExpression((helper = helpers['we-avatar-modal'] || (depth0 && depth0['we-avatar-modal']),options={hash:{
    'store': ("store")
  },hashTypes:{'store': "ID"},hashContexts:{'store': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar-modal", options))));
  return buffer;
  
});Ember.TEMPLATES['home'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("\n        Install We.js\n      ");
  }

  data.buffer.push("<!-- Page Header -->\n<main class=\"bs-docs-masthead\" role=\"main\">\n  <div class=\"container\">\n\n    <img alt=\"We.js logo\" src=\"/public/theme/we-theme-site-wejs/images/we-logo-inverse.png\">\n\n    <p class=\"lead\">We.js is a node.js framework for real time applications, sites or blogs!</p>\n    <p class=\"lead\">\n      ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-outline-inverse btn-lg")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0],types:["STRING","INTEGER"],data:data},helper ? helper.call(depth0, "page", 1, options) : helperMissing.call(depth0, "link-to", "page", 1, options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </p>\n  </div>\n</main>\n\n<div class=\"bs-docs-featurette\">\n  <div class=\"container\">\n    <h2 class=\"bs-docs-featurette-title\">We.js makes building web applications simpler, faster and require less code</h2>\n    <p class=\"lead\">Is distributed in small modules that together form a system as a blog or an application.</p>\n\n    <hr class=\"half-rule\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-4\">\n        <h3>Plugins</h3>\n        <p>Extends we.js projects with new client and server side features, see avaible plugins in <a alt=\"We.js plugins\" href=\"https://github.com/wejs?query=plugin\">link</a></p>\n      </div>\n      <div class=\"col-sm-4\">\n        <h3>Themes</h3>\n        <p>Beautiful themes for create awesome application. Themes has power to extend default plugin templates</p>\n      </div>\n\n      <div class=\"col-sm-4\">\n        <h3>Generators</h3>\n        <p>Generate one functional project structure in seconds with <a alt=\"We.js plugins\" href=\"https://github.com/wejs/generator-wejs\">we.js generator</a>.</p>\n      </div>\n\n    </div>\n\n    <hr class=\"half-rule\">\n\n    <p class=\"lead\">We.js and related modules is open source. It's hosted, developed, and maintained on GitHub.</p>\n    <a href=\"https://github.com/wejs/we\" class=\"btn btn-outline btn-lg\">View the GitHub project</a>\n  </div>\n</div>\n");
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
  
});Ember.TEMPLATES['article/form'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
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
  
  var buffer = '';
  data.buffer.push("\n	    <div class=\"form-group\">\n	      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-success\">Save</button>\n	      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "saveAndPublishRecord", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-primary\">Save and publish</button>\n	      <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "cancel", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">Cancel</button>\n	    </div>\n	  ");
  return buffer;
  }

  data.buffer.push("<article>\n  <h1>");
  data.buffer.push(escapeExpression((helper = helpers['focus-input'] || (depth0 && depth0['focus-input']),options={hash:{
    'value': ("record.title"),
    'placeholder': ("Write the title here"),
    'classNames': ("form-control input-lg header-inputs")
  },hashTypes:{'value': "ID",'placeholder': "STRING",'classNames': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "focus-input", options))));
  data.buffer.push("</h1>\n  <h2 class=\"subheading\">\n    <label for=\"about\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article.form.about.label", options) : helperMissing.call(depth0, "t", "article.form.about.label", options))));
  data.buffer.push("</label>\n    ");
  data.buffer.push(escapeExpression((helper = helpers['we-editor'] || (depth0 && depth0['we-editor']),options={hash:{
    'value': ("record.about"),
    'style': ("small"),
    'classNames': ("header-inputs")
  },hashTypes:{'value': "ID",'style': "STRING",'classNames': "STRING"},hashContexts:{'value': depth0,'style': depth0,'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editor", options))));
  data.buffer.push("\n  </h2>\n  <div class=\"record-featuredImage\">\n    ");
  stack1 = helpers.unless.call(depth0, "inputReset", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  stack1 = helpers['if'].call(depth0, "selectedImage", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n  </div>\n\n	<form>\n	  <div class=\"form-group\">\n	    <div class=\"post-edit-body\">\n	      <label for=\"body\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article.form.body.label", options) : helperMissing.call(depth0, "t", "article.form.body.label", options))));
  data.buffer.push("</label>\n	      ");
  data.buffer.push(escapeExpression((helper = helpers['we-editor'] || (depth0 && depth0['we-editor']),options={hash:{
    'value': ("record.body")
  },hashTypes:{'value': "ID"},hashContexts:{'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editor", options))));
  data.buffer.push("\n	    </div>\n	  </div>\n\n	  <hr>\n\n	  <div class=\"form-group\">\n	    <div class=\"post-edit-category\">\n	      <label for=\"category\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article.form.category.label", options) : helperMissing.call(depth0, "t", "article.form.category.label", options))));
  data.buffer.push("</label>\n	      ");
  data.buffer.push(escapeExpression((helper = helpers['we-category-field'] || (depth0 && depth0['we-category-field']),options={hash:{
    'value': ("record.category"),
    'newTagMark': (" (nova)"),
    'maximumSelectionSize': ("4")
  },hashTypes:{'value': "ID",'newTagMark': "STRING",'maximumSelectionSize': "STRING"},hashContexts:{'value': depth0,'newTagMark': depth0,'maximumSelectionSize': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-category-field", options))));
  data.buffer.push("\n	    </div>\n	  </div>\n\n	  <div class=\"form-group\">\n	    <label for=\"tag\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article.form.tag.label", options) : helperMissing.call(depth0, "t", "article.form.tag.label", options))));
  data.buffer.push("</label>\n	    ");
  data.buffer.push(escapeExpression((helper = helpers['we-tag-field'] || (depth0 && depth0['we-tag-field']),options={hash:{
    'value': ("record.tag"),
    'newTagMark': (" (nova)"),
    'maximumSelectionSize': ("5")
  },hashTypes:{'value': "ID",'newTagMark': "STRING",'maximumSelectionSize': "STRING"},hashContexts:{'value': depth0,'newTagMark': depth0,'maximumSelectionSize': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-tag-field", options))));
  data.buffer.push("\n	  </div>\n\n	  <hr>\n\n	  <div class=\"checkbox\">\n	    <label>\n	      ");
  data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
    'name': ("published"),
    'type': ("checkbox"),
    'checked': ("record.published")
  },hashTypes:{'name': "STRING",'type': "STRING",'checked': "ID"},hashContexts:{'name': depth0,'type': depth0,'checked': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
  data.buffer.push("\n	      ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article.form.published.label", options) : helperMissing.call(depth0, "t", "article.form.published.label", options))));
  data.buffer.push("\n	    </label>\n	  </div>\n\n	  <hr>\n\n	  ");
  stack1 = helpers['if'].call(depth0, "record.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(5, program5, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n	</form>\n</article>\n");
  return buffer;
  
});Ember.TEMPLATES['article/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n  <!-- Post Content -->\n  <article class=\"bs-docs-section\">\n    <h1 class=\"page-header\">");
  stack1 = helpers._triageMustache.call(depth0, "record.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</h1>\n    ");
  stack1 = helpers['if'].call(depth0, "record.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    <div class=\"article-body\">\n      ");
  data.buffer.push(escapeExpression((helper = helpers.html || (depth0 && depth0.html),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "record.body", options) : helperMissing.call(depth0, "html", "record.body", options))));
  data.buffer.push("\n    </div>\n    <br>\n    \n    <div class=\"record-terms\">\n      ");
  stack1 = helpers['if'].call(depth0, "record.category", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  stack1 = helpers['if'].call(depth0, "record.tag", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n    \n    <hr>\n    <div class=\"comment-area\">\n      <a data-link-area=\"comments\" id=\"anchor-comments\"></a>\n      <h3 class=\"comment-title\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "comments.title", options) : helperMissing.call(depth0, "t", "comments.title", options))));
  data.buffer.push("</h3>\n      ");
  data.buffer.push(escapeExpression((helper = helpers['we-comments'] || (depth0 && depth0['we-comments']),options={hash:{
    'commentedModelName': ("article"),
    'commentedModelId': ("record.id")
  },hashTypes:{'commentedModelName': "STRING",'commentedModelId': "ID"},hashContexts:{'commentedModelName': depth0,'commentedModelId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-comments", options))));
  data.buffer.push("\n      ");
  data.buffer.push(escapeExpression((helper = helpers['we-comment-form'] || (depth0 && depth0['we-comment-form']),options={hash:{
    'commentedModelName': ("article"),
    'commentedModelId': ("record.id")
  },hashTypes:{'commentedModelName': "STRING",'commentedModelId': "ID"},hashContexts:{'commentedModelName': depth0,'commentedModelId': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-comment-form", options))));
  data.buffer.push("\n    </div>\n  </article>\n");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n      ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "article_update", "article", "record", options) : helperMissing.call(depth0, "can", "article_update", "article", "record", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "article_delete", "article", "record", options) : helperMissing.call(depth0, "can", "article_delete", "article", "record", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    ");
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-primary")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "article.edit", "record.id", options) : helperMissing.call(depth0, "link-to", "article.edit", "record.id", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n          Edit\n        ");
  }

function program6(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n        <button ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "deleteRecord", "record.id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
  data.buffer.push(" class=\"btn btn-default\">\n          Delete\n        </button>\n      ");
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"record-category\">\n          <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article.form.category.label", options) : helperMissing.call(depth0, "t", "article.form.category.label", options))));
  data.buffer.push("</label>\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-terms'] || (depth0 && depth0['we-terms']),options={hash:{
    'terms': ("record.category")
  },hashTypes:{'terms': "ID"},hashContexts:{'terms': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-terms", options))));
  data.buffer.push("\n        </div>\n      ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n        <div class=\"record-tag\">\n          <label>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article.form.tag.label", options) : helperMissing.call(depth0, "t", "article.form.tag.label", options))));
  data.buffer.push("</label>\n          ");
  data.buffer.push(escapeExpression((helper = helpers['we-terms'] || (depth0 && depth0['we-terms']),options={hash:{
    'terms': ("record.tag")
  },hashTypes:{'terms': "ID"},hashContexts:{'terms': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-terms", options))));
  data.buffer.push("\n        </div>\n      ");
  return buffer;
  }

function program12(depth0,data) {
  
  
  data.buffer.push("\n  Loading ...\n");
  }

  stack1 = helpers['if'].call(depth0, "record.isFulfilled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(12, program12, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n");
  return buffer;
  
});Ember.TEMPLATES['articles'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<!-- Page Header -->\n<div class=\"bs-docs-header\" id=\"content\">\n  <div class=\"container\">\n    <h1>Features</h1>\n  </div>\n</div>\n<div class=\"container bs-docs-container\">\n	<div class=\"row\">\n		<div class=\"col-md-9\">\n		  ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n		</div>\n		<div class=\"col-md-3\">\n			");
  data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "partials/sidebar", options) : helperMissing.call(depth0, "partial", "partials/sidebar", options))));
  data.buffer.push("\n		</div>\n	</div>\n</div>");
  return buffer;
  
});Ember.TEMPLATES['articles/index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        <div class=\"articles-actions\">\n          ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "articles.create", options) : helperMissing.call(depth0, "link-to", "articles.create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        </div>\n      ");
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n            ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article.create", options) : helperMissing.call(depth0, "t", "article.create", options))));
  data.buffer.push("\n          ");
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n          <div class=\"articles-pagination\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-pagination'] || (depth0 && depth0['we-pagination']),options={hash:{
    'currentPage': ("currentPage"),
    'totalPages': ("totalPages"),
    'maxPagesToDisplay': ("maxPagesToDisplay")
  },hashTypes:{'currentPage': "ID",'totalPages': "ID",'maxPagesToDisplay': "ID"},hashContexts:{'currentPage': depth0,'totalPages': depth0,'maxPagesToDisplay': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-pagination", options))));
  data.buffer.push("\n          </div>\n        ");
  return buffer;
  }

  data.buffer.push("<!-- Page Header -->\n<header class=\"intro-header\">\n  <div class=\"container\">\n    <div class=\"site-heading\">\n      <h1>");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "articles.title", options) : helperMissing.call(depth0, "t", "articles.title", options))));
  data.buffer.push("</h1>\n      <hr class=\"small\">\n      <span class=\"subheading\">");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "articles.subTitle", options) : helperMissing.call(depth0, "t", "articles.subTitle", options))));
  data.buffer.push("</span>\n    </div>\n  </div>\n</header>\n\n<!-- Main Content -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8\">\n      ");
  stack1 = (helper = helpers.can || (depth0 && depth0.can),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "article_create", options) : helperMissing.call(depth0, "can", "article_create", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n\n      ");
  data.buffer.push(escapeExpression((helper = helpers.render || (depth0 && depth0.render),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "articles.list", "records", options) : helperMissing.call(depth0, "render", "articles.list", "records", options))));
  data.buffer.push("\n\n      <div class=\"records-footer\">\n        ");
  stack1 = helpers['if'].call(depth0, "records.isFulfilled", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      </div>\n    </div>\n  </div>\n</div>");
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

function program8(depth0,data) {
  
  var buffer = '', stack1;
  data.buffer.push("\n            <div class=\"language-area text-center\">");
  stack1 = helpers._triageMustache.call(depth0, "user.language", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("</div>\n          ");
  return buffer;
  }

function program10(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n              <span class=\"social\">\n                ");
  data.buffer.push(escapeExpression(helpers.view.call(depth0, "App.ContactButtomView", {hash:{
    'contactStatus': ("contactStatus")
  },hashTypes:{'contactStatus': "ID"},hashContexts:{'contactStatus': depth0},contexts:[depth0],types:["ID"],data:data})));
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
  data.buffer.push(escapeExpression((helper = helpers['we-avatar'] || (depth0 && depth0['we-avatar']),options={hash:{
    'userId': ("user.id"),
    'size': ("responsive")
  },hashTypes:{'userId': "ID",'size': "STRING"},hashContexts:{'userId': depth0,'size': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-avatar", options))));
  data.buffer.push("</span>\n          <div class=\"user-username text-center\">\n            ");
  data.buffer.push(escapeExpression((helper = helpers['we-editable-text'] || (depth0 && depth0['we-editable-text']),options={hash:{
    'tagName': ("strong"),
    'name': ("username"),
    'value': ("user.username"),
    'isEditing': ("edit")
  },hashTypes:{'tagName': "STRING",'name': "STRING",'value': "ID",'isEditing': "ID"},hashContexts:{'tagName': depth0,'name': depth0,'value': depth0,'isEditing': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "we-editable-text", options))));
  data.buffer.push("\n          </div>\n          ");
  stack1 = helpers['if'].call(depth0, "edit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
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
  stack1 = helpers['if'].call(depth0, "showSocialActions", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
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
  data.buffer.push("\n      </li>\n      <li class=\"divider\"></li>      \n      ");
  stack1 = helpers['if'].call(depth0, "adminMenu", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n      <li>\n        <a href=\"/auth/logout\" ");
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

function program6(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n      <li>\n        <a href=\"/admin\">\n          ");
  data.buffer.push(escapeExpression((helper = helpers.t || (depth0 && depth0.t),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "menu.link.manage", options) : helperMissing.call(depth0, "t", "menu.link.manage", options))));
  data.buffer.push("\n        </a>\n\n      </li>      \n      <li class=\"divider\"></li>\n      ");
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, "currentUser.id", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  else { data.buffer.push(''); }
  
});