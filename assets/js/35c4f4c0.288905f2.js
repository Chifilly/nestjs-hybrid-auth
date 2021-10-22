"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[992],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=i,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],s={sidebar_position:6},u="Github",l={unversionedId:"providers/github",id:"providers/github",isDocsHomePage:!1,title:"Github",description:"Implement github authentication in your NestJS application.",source:"@site/docs/providers/github.mdx",sourceDirName:"providers",slug:"/providers/github",permalink:"/docs/providers/github",editUrl:"https://github.com/mjangir/nestjs-hybrid-auth/blob/main/website/docs/providers/github.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Linkedin",permalink:"/docs/providers/linkedin"},next:{title:"Instagram",permalink:"/docs/providers/instagram"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install",id:"install",children:[]},{value:"How To Use?",id:"how-to-use",children:[]},{value:"Example Code For app.module.ts",id:"example-code-for-appmodulets",children:[{value:"Simple static configuration",id:"simple-static-configuration",children:[]},{value:"<code>useFactory</code> to get the ConfigService injected.",id:"usefactory-to-get-the-configservice-injected",children:[]},{value:"Use <code>useClass</code> to get your auth config from a class",id:"use-useclass-to-get-your-auth-config-from-a-class",children:[]}]},{value:"Example Code For Controller",id:"example-code-for-controller",children:[{value:"app.controller.ts",id:"appcontrollerts",children:[]}]},{value:"Exports",id:"exports",children:[{value:"UseGithubAuth",id:"usegithubauth",children:[]},{value:"GithubAuthGuardOptions",id:"githubauthguardoptions",children:[]},{value:"GithubAuthModule",id:"githubauthmodule",children:[]},{value:"GithubAuthModuleOptions",id:"githubauthmoduleoptions",children:[]},{value:"GithubAuthModuleAsyncOptions",id:"githubauthmoduleasyncoptions",children:[]},{value:"GithubAuthModuleOptionsFactory",id:"githubauthmoduleoptionsfactory",children:[]}]},{value:"Have Issues?",id:"have-issues",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],c={toc:p};function h(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github"},"Github"),(0,r.kt)("p",null,"Implement github authentication in your NestJS application."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"The library requires you to install few peer dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @nestjs/passport passport reflect-metadata --save\n")),(0,r.kt)("p",null,"OR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @nestjs/passport passport reflect-metadata\n")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @nestjs-hybrid-auth/github --save\n")),(0,r.kt)("p",null,"OR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @nestjs-hybrid-auth/github\n")),(0,r.kt)("h2",{id:"how-to-use"},"How To Use?"),(0,r.kt)("p",null,"The package exports mainly a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/fundamentals/dynamic-modules"},"dynamic module")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/guards"},"guard"),". The module should be imported in your app.module.ts and guards should be used on the route handlers of any controller."),(0,r.kt)("h2",{id:"example-code-for-appmodulets"},"Example Code For app.module.ts"),(0,r.kt)("h3",{id:"simple-static-configuration"},"Simple static configuration"),(0,r.kt)("p",null,"Want to jump directly to the ",(0,r.kt)("a",{parentName:"p",href:"#githubauthmoduleoptions"},"available options"),"?"),(0,r.kt)("p",null,"If you just want to provide the static values or have them handy, pass them as options to the ",(0,r.kt)("inlineCode",{parentName:"p"},"forRoot")," static method like below. The options object is type of ",(0,r.kt)("inlineCode",{parentName:"p"},"GithubAuthModuleOptions"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GithubAuthModule } from '@nestjs-hybrid-auth/github';\n\n@Module({\n  imports: [\n    GithubAuthModule.forRoot({\n      clientID: process.env.CLIENT_ID,\n      clientSecret: process.env.CLIENT_SECRET,\n      callbackURL: process.env.CALLBACK_URL,\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")),(0,r.kt)("h3",{id:"usefactory-to-get-the-configservice-injected"},(0,r.kt)("inlineCode",{parentName:"h3"},"useFactory")," to get the ConfigService injected."),(0,r.kt)("p",null,"If you want to make use of nest's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/configuration#installation"},"ConfigModule")," to get the auth configuration for a provider from ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," config files, use ",(0,r.kt)("inlineCode",{parentName:"p"},"forRootAsync")," static method. The options to this method are typeof ",(0,r.kt)("inlineCode",{parentName:"p"},"GithubAuthModuleAsyncOptions")," which accepts a ",(0,r.kt)("inlineCode",{parentName:"p"},"useFactory")," property. ",(0,r.kt)("inlineCode",{parentName:"p"},"useFactory")," is a function which gets the instances injected whatever has been provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"inject")," array. You can use those instances to prepare and return the actual ",(0,r.kt)("inlineCode",{parentName:"p"},"GithubAuthModuleOptions")," object. ConfigService can be one of them as per your choice."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GithubAuthModule } from '@nestjs-hybrid-auth/github';\n\n@Module({\n  imports: [\n    ConfigModule.forRoot({\n      isGlobal: true,\n      cache: true,\n      expandVariables: true,\n    }),\n    GithubAuthModule.forRootAsync({\n      imports: [ConfigModule],\n      inject: [ConfigService],\n      useFactory: (configService: ConfigService) => ({\n        clientID: configService.get('GITHUB_CLIENT_ID'),\n        clientSecret: configService.get('GITHUB_CLIENT_SECRET'),\n        callbackURL: configService.get('GITHUB_CALLBACK_URL'),\n      }),\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")),(0,r.kt)("h3",{id:"use-useclass-to-get-your-auth-config-from-a-class"},"Use ",(0,r.kt)("inlineCode",{parentName:"h3"},"useClass")," to get your auth config from a class"),(0,r.kt)("p",null,"If the ",(0,r.kt)("inlineCode",{parentName:"p"},"useFactory")," makes your app module bloated with a lot of boilerplate code, you can ",(0,r.kt)("inlineCode",{parentName:"p"},"useClass")," to provide an existing config provider class. The class must implement ",(0,r.kt)("inlineCode",{parentName:"p"},"GithubAuthModuleOptionsFactory")," interface and ",(0,r.kt)("inlineCode",{parentName:"p"},"createModuleOptions")," method. This method should return ",(0,r.kt)("inlineCode",{parentName:"p"},"GithubAuthModuleOptions")," object. Similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"useFactory"),", whatever you provide in ",(0,r.kt)("inlineCode",{parentName:"p"},"inject")," array, it will get injected in the constructor of your class. Follow the example:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"hybrid-auth.config.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ConfigService } from '@nestjs/config';\nimport {\n  GithubAuthModuleOptions,\n  GithubAuthModuleOptionsFactory,\n} from '@nestjs-hybrid-auth/github';\n\n@Injectable()\nclass GithubAuthConfig implements GithubAuthModuleOptionsFactory {\n  constructor(private configService: ConfigService) {}\n\n  createModuleOptions(): GithubAuthModuleOptions {\n    return {\n      clientKey: this.configService.get('GITHUB_CLIENT_ID'),\n      clientSecret: this.configService.get('GITHUB_CLIENT_SECRET'),\n      callbackURL: this.configService.get('GITHUB_CALLBACK_URL'),\n    };\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"app.module.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { GithubAuthModule } from '@nestjs-hybrid-auth/github';\n\n@Module({\n  imports: [\n    ConfigModule.forRoot({\n      isGlobal: true,\n      cache: true,\n      expandVariables: true,\n    }),\n    GithubAuthModule.forRootAsync({\n      imports: [ConfigModule],\n      inject: [ConfigService],\n      useClass: GithubAuthConfig,\n    }),\n  ],\n  controllers: [AppController],\n  providers: [AppService],\n})\nexport class AppModule {}\n")),(0,r.kt)("h2",{id:"example-code-for-controller"},"Example Code For Controller"),(0,r.kt)("p",null,"Once you have setup the module properly in module file, its time to configure your route handlers to make the user properly redirected to appropriate identity provider's login page. ",(0,r.kt)("inlineCode",{parentName:"p"},"@nestjs-hybrid-auth/github")," provides a guard and result interface to make it enabled."),(0,r.kt)("p",null,"Each route will have two variants. One is to redirect to social login page and the other is to collect the response such as access/refresh tokens and user profile etc. The result will be attached to ",(0,r.kt)("inlineCode",{parentName:"p"},"Request")," object's ",(0,r.kt)("inlineCode",{parentName:"p"},"hybridAuthResult")," property as shown in the example below."),(0,r.kt)("h3",{id:"appcontrollerts"},"app.controller.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { UseGithubAuth, GithubAuthResult } from '@nestjs-hybrid-auth/github';\n\n@Controller()\nexport class AppController {\n  constructor(private readonly appService: AppService) {}\n\n  @UseGithubAuth()\n  @Get('auth/github')\n  loginWithGithub() {\n    return 'Login with Github';\n  }\n\n  @UseGithubAuth()\n  @Get('auth/github-login/callback')\n  githubCallback(@Request() req): Partial<GithubAuthResult> {\n    const result: GithubAuthResult = req.hybridAuthResult;\n    return {\n      accessToken: result.accessToken,\n      refreshToken: result.refreshToken,\n      profile: result.profile,\n    };\n  }\n}\n")),(0,r.kt)("h2",{id:"exports"},"Exports"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@nestjs-hybrid-auth/github")," exports various decorators, interfaces and methods."),(0,r.kt)("h3",{id:"usegithubauth"},"UseGithubAuth"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"UseGithubAuth")," is NestJS ",(0,r.kt)("inlineCode",{parentName:"p"},"Guard")," which hijacks your nest request and redirects users to the appropriate login page of your configured identity provider (github in this case). The same guard can be used on ",(0,r.kt)("inlineCode",{parentName:"p"},"callback")," route also as shown in the example above. In the callback route handler, the ",(0,r.kt)("inlineCode",{parentName:"p"},"req: Request")," object will have a property ",(0,r.kt)("inlineCode",{parentName:"p"},"hybridAuthResult")," which is an object of type ",(0,r.kt)("inlineCode",{parentName:"p"},"GithubAuthResult"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@UseGithubAuth(options: GithubAuthGuardOptions)\n@Get('auth/github')\nloginWithGithub() {\n  return 'Login with Github';\n}\n")),(0,r.kt)("h3",{id:"githubauthguardoptions"},"GithubAuthGuardOptions"),(0,r.kt)("p",null,"This is a simple object to be passed into ",(0,r.kt)("inlineCode",{parentName:"p"},"UseGithubAuth")," guard as shown in example above if you want to pass some extra parameters to query the github result. It can be left empty for default result."),(0,r.kt)("h3",{id:"githubauthmodule"},"GithubAuthModule"),(0,r.kt)("p",null,"This is the dynamic module which must be imported in your app's main module with ",(0,r.kt)("inlineCode",{parentName:"p"},"forRoot")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"forRootAsync")," static methods whichever suits your need. Both will return a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nestjs.com/fundamentals/dynamic-modules"},"NestJS dynamic module"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GithubAuthModule {\n  forRoot(options: GithubAuthModuleOptions): DynamicModule;\n  forRootAsync(options: GithubAuthModuleAsyncOptions): DynamicModule;\n}\n")),(0,r.kt)("h3",{id:"githubauthmoduleoptions"},"GithubAuthModuleOptions"),(0,r.kt)("p",null,"If you are configuring your module with ",(0,r.kt)("inlineCode",{parentName:"p"},"forRoot")," static method, pass in the module options given below. They can be called the github passport strategy options also."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GithubAuthModuleOptions {\n  authorizationURL?: string | undefined;\n  tokenURL?: string | undefined;\n  clientID: string;\n  clientSecret: string;\n  callbackURL?: string | undefined;\n  customHeaders?: OutgoingHttpHeaders | undefined;\n  scope?: string | string[] | undefined;\n  scopeSeparator?: string | undefined;\n  sessionKey?: string | undefined;\n  store?: oauth2.StateStore | undefined;\n  state?: string | undefined;\n  userAgent?: string | undefined;\n  userProfileURL?: string | undefined;\n}\n")),(0,r.kt)("h3",{id:"githubauthmoduleasyncoptions"},"GithubAuthModuleAsyncOptions"),(0,r.kt)("p",null,"If you want to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"GithubAuthModule")," dynamically having the config or other services injected, pass in async options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"forRootAsync")," static method. Please refer to the example above for ",(0,r.kt)("inlineCode",{parentName:"p"},"useFactory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useClass")," properties."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GithubAuthModuleAsyncOptions {\n  useExisting?: Type<GithubAuthModuleOptionsFactory>;\n  useClass?: Type<GithubAuthModuleOptionsFactory>;\n  useFactory?: (\n    ...args: any[]\n  ) => Promise<GithubAuthModuleOptions> | GithubAuthModuleOptions;\n  inject?: any[];\n}\n")),(0,r.kt)("h3",{id:"githubauthmoduleoptionsfactory"},"GithubAuthModuleOptionsFactory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"interface GithubAuthModuleOptionsFactory {\n  createModuleOptions():\n    | Promise<GithubAuthModuleOptions>\n    | GithubAuthModuleOptions;\n}\n")),(0,r.kt)("h2",{id:"have-issues"},"Have Issues?"),(0,r.kt)("p",null,"If you still have trouble setting up the workflow properly, please file an issue at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mjangir/nestjs-hybrid-auth/issues"},"Issues")," page."),(0,r.kt)("h2",{id:"maintainers"},"Maintainers"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mjangir"},"Manish Jangir")))}h.isMDXComponent=!0}}]);