(self.webpackChunkautomation_analytics=self.webpackChunkautomation_analytics||[]).push([[277],{69595:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(92950),r=a.n(n),i=a(45697),l=a.n(i),o=a(334),c=a(58788),u=function(e){var t=e.items,a=void 0===t?[]:t,n=e.current,i=void 0===n?null:n;return r().createElement(c.Breadcrumb,null,a.map((function(e){var t=e.title,a=e.navigate;return r().createElement(c.BreadcrumbItem,{key:t},r().createElement(o.Link,{to:a},t))})),i&&r().createElement(c.BreadcrumbHeading,null,i))};u.propTypes={items:l().arrayOf(l().shape({navigate:l().any,title:l().node})),current:l().node};const m=u},10001:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var n=a(92950),r=a.n(n),i=a(58788),l=a(60433),o=a(80810),c=a(334);const u=function(e){var t=e.label,a=void 0===t?"":t,n=e.title,u=void 0===n?"No items found.":n,m=e.message,d=void 0===m?"":m,s=e.canAdd,v=void 0!==s&&s,p=e.path,y=void 0===p?void 0:p,E=(0,c.useHistory)();return r().createElement(i.EmptyState,{variant:i.EmptyStateVariant.full},r().createElement(i.EmptyStateIcon,{icon:v?l.Mh:o.W1}),r().createElement(i.Title,{size:"lg",headingLevel:"h3"},u),r().createElement(i.EmptyStateBody,null,d),v&&r().createElement(i.Button,{key:"add-item-button",variant:i.ButtonVariant.primary,"aria-label":a,onClick:function(){y&&E.push({pathname:y})}},a))}}}]);
//# sourceMappingURL=../sourcemaps/277.dfe2e3b4ad8bddec4d18.js.map