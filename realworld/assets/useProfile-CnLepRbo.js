import{I as f,l as n,z as u,J as c}from"./index-CjoYhzC6.js";function g({username:e,following:t,onUpdate:r}){async function o(){const s=await(t.value?n.profiles.unfollowUserByUsername:n.profiles.followUserByUsername)(e.value).then(i=>i.data.profile);r(s)}const{active:l,run:a}=f(o);return{followProcessGoing:l,toggleFollow:a}}function v({username:e}){const t=u(null);async function r(){if(o(null),!e.value)return;const l=await n.profiles.getProfileByUsername(e.value).then(a=>a.data.profile);o(l)}function o(l){t.value=l}return c(e,r,{immediate:!0}),{profile:t,updateProfile:o}}export{v as a,g as u};
