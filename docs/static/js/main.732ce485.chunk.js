(this.webpackJsonpgos=this.webpackJsonpgos||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),i=s(7),r=s.n(i),d=(s(13),s(2)),l=s(3),b=s(5),A=s(4),o=(s(14),function(e){Object(b.a)(s,e);var t=Object(A.a)(s);function s(){var e;return Object(d.a)(this,s),(e=t.call(this)).state={tab:0},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=function(e){return Object(c.jsxs)("div",{className:"Tab ".concat(e.isActive?"":"Tab-unactive"),onClick:function(t){return e.onClick(t.target.id)},children:[Object(c.jsx)("img",{src:e.icon,alt:e.title}),!e.isActive&&Object(c.jsx)("div",{className:"Title",children:e.title})]})},s=this.state.tab;return Object(c.jsxs)("div",{className:"Tabs",children:[Object(c.jsx)("div",{className:"TabWrapper",children:this.props.tab&&this.props.tab.map((function(a,n){return Object(c.jsx)(t,{icon:a.icon,isActive:s==n,id:a.title,title:a.title,onClick:function(t){return e.setState({tab:n})}},n)}))}),Object(c.jsx)("div",{className:"Content",children:this.props.tab[s].content})]})}}]),s}(a.Component)),u=s.p+"static/media/up.8c8d61bd.svg",j=s.p+"static/media/left.cad14f5d.svg",m=s.p+"static/media/right.a51ff728.svg",v=s.p+"static/media/down.ed03a91f.svg",g=s.p+"static/media/back.26017680.svg",f=s.p+"static/media/fullscreen.64fb748f.svg",O=s.p+"static/media/grid.6e2c7d0e.svg",p=s.p+"static/media/home.68fb00e0.svg",C=s.p+"static/media/list.c74a6885.svg",x=s.p+"static/media/mute.329d24e8.svg",Q=s.p+"static/media/play.634fbd19.svg",h=s.p+"static/media/r_sort.444bfd56.svg",N=s.p+"static/media/sort.ffad80e8.svg",k=s.p+"static/media/add.ebc603c9.svg",R=s.p+"static/media/minus.e38a9cd0.svg",M=s.p+"static/media/q.dba15246.svg",Z=s.p+"static/media/speed.c25adc6f.svg",B=s.p+"static/media/volume.7d18aed9.svg",w=s.p+"static/media/enter.315674fc.svg",G={vlc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABWCAYAAACKGBvoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABt4SURBVHhezVxpsGVVdV77THd689SvB5oeaJqGnqBBHHBAjGIMorHEsRLHWNGkHGJCfmiqtBJNKpIYSpDQKliYEo0GrQT5YQQrGkxBnCJoGrXbRuaWnt50hzPk+9be575zb9/3UPoNWe+tu+fpO2utvfY5514j/w/okXdLSTLZNFWX5ySpXJymMpmJeMZIigkeNZ7cGwTyn6jz07NvkFnXbNVo1UE7/C4JAl/2+Ub+ME7lZa1ERpFtMs4MnAE98FQqcleayLUA9D/O3S8tbbxK5LlwNak/S+UlxvgvKZfC0f6Kb/qrIgM1MMJaRSQKpR/4XZJmcikA7HPtVo1WHTSAsF48/7kmqoyaypDxy31iPA+6iclhdlBNgZqS+sEXQOImNLWKtPqgpWav8YKzTVAJjBdK5ocWKUcWL5CRAJq6HSDvdjmrRqsK2oG3SwQx2gfVHAdQRkWKRgwWPyeCxmz7L2tQcuEPfl+A7OrRakvaWCbmAkhamSqpYMHAWeBAipiLEjUjFVTZl2QyZnNXh1YNtPvfgrHhZsCvOMvzQxUkC5UDDf+GjBxn00geirYje+u9b1y9ua/awMCBUnOh5wfDxvdtDrGCT6GhrWZBA3NjUO01Mopd9GJwWSusAq0KaD98E4Qogz9mZC9Ai2DTLDKkLpvWRm0+GqHK+cB25DuvbbdaUVodSUtVzTbC8p/tBYH1LxQrfFDSuoiTdDaNqHmoRRXdBGlblfmvyqCNyng58as7xS+d6fslwmELAFomiYtb1hILFkDjBosPLzwjDft3Jv1rV0VFaUxWnC5/4x9PNIbPuioa2/TM8sia0JRq8M9KksJHSyE+mRdIGiIdVCT2K9IK+6UVjMhceVLq/VukPnlR0Npy2aPxWZfdc8tX/33Kdbti5C7xytHNN33G86LKvkqt/2MbJscvGSsnnswckXT2mKRzxyWePiJZc0YSHDTp5LagDFk0AND6peEPSFwaAQ+l2HW/ncWN9zdnp777ile95lSdXkZaedBuvjn0S9XXDAwN//XG9WvXl8sVSZJY4jiWVrMpjfqMhnGcCIROEvhtHqUQU/XcFprC7pksfSRpzl6dNWe/cMUrXr2iB/gVt2nNOCklaXa+7/vjYAVAiWBgOjGc/dhEkgCoLIDJIsPxzQAe66ZJCreEts+MwQTuQ6OS7WDlaMVB8wJ/xA+C59Wq1QgErDJIFMx/kkgMlaT9t6cDbKQAKkOZgZr6fqChhzKeuJCI4K08r1Qq8VbSitKKgwYl2+0H4eYo4vGRYFkJUtIdM1NVRQBccEpARCUsr1MgL4g24QLscckVoxUF7XP/eE3oBeElpXJpoFwqqeQQRmXEKVmUOpsP1BDn7VtKF6tQKTtUNJP+xITP/fJN10Xsf6VoRUFrRqNrjR/uq1YqgZU0+rIEIZGE0qVAUF0BipbS6Nu0TdnNwPetikKNg8wPL/T6xs7QCitEKwbaDdf9g58YfzeOTVur5bIJ3CZAkHLKbZiSBpA6d1qw4Kl0uVDTBpvKZgmiXV/7/KcCbbcCtGKgJV6pkmSyMwzD4Uq5ZFUOxMUnAI8bAeNkVViLlaaZQemilOmpQBtqNtNDUam8MxwcrzF7JWhFQLvphmsNDPYIbNXOcimqhgE8fqolJQ3lCgSNfq6eKoG2bQ5SUX2RSdW0ZZ5XgSO3C5GJb3zxM4rnctOKgJZGNd8E0VZI2bm1SiUswZ7RwJMIAnfQGJKmaoc8C6IWs4Km1eWApFHaFFjWh4uCNmEQhjv8qLw9q42siIquCGgw/iW4GWdHYTRZrZThmRmABJVsS5uVHgJGQGyILG1t4yph+CewlL22qoKSzEy0UtnRTMyKHOBXBDQsc8Dz/B1wRPvBToosCAoR/6l6AJBxZQbMZ7xL6SysroyhwPVI5bw4TQdtzvLSsoO2/4breMNxLezZrqgcVUol69SqRCkqSAIUHpM0rRlg5KkkwXYxnxKmrgdCSpqtYOuAysg9F6l1//bFf9KM5aRlB63vvi8ElUN3bisd++lZVdPy6UHQfdAdEzYpPxEQFJJ9KGWZoBBMkvXPfAcky7VYnyN4ccszxx/dJIfu3ZHdc+uyO7rLfj/tzese6q8de+CVQyd/+qJRMx32l0MsFnJBkACI+l+oRwBbTd6ssMrHcv5Rqog0Db/WT2IxcQOe8oxk00fEHPmZNO77utTvvS1q3nfnQ/HDP/6vLx1M5jj2chEv1rLS7VfKtsgz1/VXo98aHRqU6sCQyPBGafWtA6+V2cqEJOVBaSRG6ingDPgujHUnFD6AGRj4cK1Z8dOmeM1p8acekfTog9J84pfgB2X26DGp1+mqyN3A9x2hL/e/6k42Xh5aVtC+eoWYwJMXl31z/WCtsmVkaEAqJagYynh3VgBQGpYlC0uSZIk0CFoIt4t+HNeMiqFHqazrjUnTmpO4Pivx7JzUwXMzLZmZywRRqUP44Mo9DNDeAz/4X676pgrwstCygvaVK6QUGrm6Gnp/OjzQ1wfWjJxolyyCTckaJwFOEwaKNgvZRUYdbgYxYGi0MpkDQARpFjwDwGZnRfPiROqo+snAlw9edZfM6CDLQMu7EWQyigU/OwgC3jyDMXf53eTsm+6MCMlMd8TRmWWLM4EEvsqM6wUQfc/tGehmjaaWiZYNtH9+GdZm5Ex4/tuCwIfG+boDnkrzgOXJdpjHSWwK7gZKwXPSyBroaQu62vaVy5Zvk1tOSSthzXsB1EQIwPR2jivIqY0JQSuaoCJYxXhOBcCUXbajYWzIFzXi5XsCv2ygYSFj8KEuCzxTwfEJbgN3RFeYEwEhY5VFcPQtyB6k2fgoFrfz5jMjdPV85K136SWn5ZS0LcBpexgEHg7U4hdX2k2qni7a/uhBBCeP5kC50EVJNH2bcR3O+cqL2tWXlJYFtM+/FBgZ2YmPNUEQGpg0a4dcOamNCwxQ+wjVBRaTmuUiCgw+aMPUtjEssN4lR4CqY+hyJ3bTZXlSZYdZehrEInfDkx/gbW17R8KVOGonFSy7O9q0DXpRDpoSQka5gI58S1V0s7uVyrBLLyktOWifu1yF4Eyo467Q98MQoMGu6cJ6E0GzR6cOvE7JKBA60/74kXMn8b7aORC5s7/0wqXfRZccNHTICZ+LY9D6AFsmD9lEscfClBQu3T0LVYpgFeOuQlG6VF0dF6SNKsrvIuzBKWzJVXTJQcNE+zD5PVDNETq0AYwNTNpCmPGWx/zuSXZUiLaJfeRAKRfTp47Rjz52o/clv8e25KBJEI1Dys6D8S9z1wzc4hYkgGbvczw1dQCZg2WjvQh+otkhfrD+jredv+gUflNaUtD23/AJv7H3dTvSDfu2B33DwAyuBiVgkSnbndPFbXAKaTmY3eRqyIm3JQyc7575WKZU88NN52+uvOAtu70X/MGSPjvg2EtGqYnK8abn7Z3b87rxxo4rjYyfJX74VCaFUlaAK486oIpFJGKiuBCwnPN8fvjYrcc2SuWiV0j/5e8crl505T5veO2SfstlSUEzQTCS+uW96dDGWnzuFZJc/FZJzrlckqFNkvLtH+dIdRBtWi5qOblkD8wUnQ6gyBA/D6eOcHSDVHa9UMqXvk3Kz7pKsvGtURKWd9db6To2XSpasu345uuvMWlpcLfxg7fCzxgfGBiScAQnmXW7RNbskLQ6IkbvutaBRILtDXDQ1WghnbbakpIzM9o7ogs1DuItooSceRKbqrT6z5R0K05Oe18ppT2XS7R+u4QVCBccRAwRYbzvvPmlz3zgltvuOOUaPB1y0zh9uunTn6okQeVdifE/NNBXq06Mjwrv1PLpkz4DaDVE5o5JZfphCR6/T9InD0kw84R4Rw9KVj8BkW+JBzCBLMCBCSfjkuprVzSMetMykMSEMusPy1xpUhrVjTI1eI5koztEaqMSZ76eW5vNJtrzFjmQNdLMmnOfKKX1D7/45a864aZ7WrRkoO2/6bPrjB99HJL2u0MD/f742Ij012oSYTOwL7DwXr+nzwI83pedPS7+3JMixw5LNgXw6sfFa54Qn7f3IXmSQSopalC71K9IHNQkqwzz1VGZ9kckqU1KVh6VJt9rBkA8hpEJFl/VYsiHNthoUoz6rVLaeEfWmHngspdfddrStiSg7d+/38uC0jONX7o+iMI9lLCx0SGpVSoQDvsKAhdG0LggvsdhHxJjYZDALIZkJC3E63p6yFK+n4Y2WF6KdgZSFkOEUn7hDEz1zKeeA6RP53PQYAZYzocxzEOXB4O48b6sMXX7i698NQtPi5ZkI0jiZhjH6S5IFC5/pvfOcBYQuhx8/UBD1gNQZC6EeVx2zKdRfKc26pOsOipJZVRalXGVpKRvUuLyOKRrWJKwX0xUg8rai8A+SGHINyQtgHyJptXi+7sWLObjSMJXGkaDqLQXJ5SqVjxNWhLQgnLfGHbOizHBwUq1IlVIGF/a48QpAXP1ur6rwaVRXSlpDdgdPlHnOxp6rw3ioFKDOMsJAMEp3u2NAQifxBNwEqWx0YCkKkA0eYGCqP2xPsDjY0GMVZtpNC862UyX5B7baYP2mRs/aTLf34CrejakKsQhHZPObYzqkURYjH3QC/UEGASEkqgrRT2+a0uA/MC+s6Zx1kc/rJsTAaR8EVwltCfoenHQhnWL9XmLnUCC0Zm/BWq+5fYvfPa0Hd35y7gIPfg2qSDgw4oBcIeb0gz7ve/v+rNLj9W2vjuMKhvGRgZldHhQatUqFsmNDzsaFsWRCFoTV95KD+0QFgoAqLJUJa2GkAtXlcM/pUU3EOTlT+ET5BEw1iGAuUTrOCACaPsjmMxDWRIfLZ/4xY0b//tvvlo+9jNs5R3ESnxS/Tj46MZPLX6ue0rQANg4gtc53gDueOwfw0w8sPm15cMTz++r9A1549gAxkeGpQo11YWDWi3Mh1EHil0Q8rHgOG6pVHFxtEe8/0Yw9Ym6Ig0QEvv2t+6moAQ7gX45A0SA0CH/UcfauvzCOAy1jG+EDDz0rZm1P7x+Lph+3JW0iWn+CsNd4GvB/wPguuu0aVH1BGAsvxT8TvDFYILG75C3uRnWJmYqawe8oOTRjpXKJWgCXzq2IORS40HKqH58xcpKgJUGAsY6zGOcdo5ltGssJ2AKNEBgvn2N1LVFf1wZzQClj2HeJyU8t4fMS9LM1PvW9bXK4xSCjjWAqUWbwVeCfwe86NnvqWwa1fLZYBpQO4Mumo3GZKo8oQY8inzYr1Ai2Jn82ZMuHIvVywZgii/zcZEMqbaspzbQlVOrWEYhYFmRmGYWAbT9aCb+7XKYp9LKcqSp/iyPKxMyN7BJ6yxAND/PAC96O2lB0CBlnCmvCjsheD3pWLQWjmdFr26gRnnerbCuh6e7HTub/86AUQPNnZA261RCbUXCAqRvPEIaKX0EPZc4IsIxVSpRlxJLU6Dgg+yc7GagEm0COR6oV7QQ6Q1U8GanZT1pMUmjwd8C5qXpeUalk3n8lwdEDn9XotY03IxQKpUSnHjrVvAYA7XQYw1BZB6BJOV2jhubig2IdawUQer4h7Suj+XgfDNgP1of9tqChFoop0oSIHbMLG4S5FarKfHJJ6V+4G6Zuv9uaSzs3nIik2ACt+CPCywGGh+24rStv8jSk2aw7vrRR6Ty49tk8OAdUj5xSHDOkxQTpTToWlGPV5lE4VBVAXkAj4vNjXd7ZwQwEEG0s0CRFBRQDlbehojmD6FV+ijlKpFWffUi8Tj2xCGZu/tWmb3z0zLz4E9kmvcIbJe9iA7wReAFVXQx0AgWG/dEHPOWE3zpJM4kahyV6oPfkur3b5GBg1+X4NghFMxZNUXdfNEqP5htLkWaxxUjztsRFqLcVtk4N4Y837ZxzEwwwc7NAUty+5dBupJfHZbGD74mM1+/QVoI5eTjADWTkwCN12YBIib7wAs6wj3VztkzStmbwBTXU4gH5cdmRKYh6tVSIHxZr691XGonD4p3/EHxcH7kl18FHOc7oK7Hqpd9SQ//XD8KGHLh7UXjz8a02jwommPTtj3bsA+nslTHJx+W5s/vkfiHX5Pmj74hyeMHcRHnXTNaiAH+HM/Cbi4F5d73XiA//vvv6bAd1BM0VGb+b4O5BXec1zhXznyqCU8QoAEP6YMd669VpBYaKWdzEs0+JuGR/xX/iQPiN46LCaHpYQWHbU/dEKord1t7RqSU2L4tJFYKc3BytWWe7rxgHo0ILsHnLSRcAUlgFszxX0p64JvSuOc2aQCs+NEDks1Ns7X2kRP77sOUyvA43TXqJoL2C/C3AdopFrBnE+fQfgz8BnAHsGxAoB7GXA6dgCxj1PGhARkZqMlgyUgVwzn3SGeU+ZFk5SGZG9wkySSEd+wsHMQnZCZjRZxPPYZwbjP6UvD+uTGgf9otLoi2B/ulBRjlVHGTNiVtzoppTouZelTM0YNiHrtfmg8dkNmjR2VuuoHz5ryKd1MASVs3bBle0jzNo8GWdyH9RxtvlJ/YrHlaCDQ6steBLwB31OHTpQY06yAAe2gKVyv0ZWJkSEZqZRmAS1iGyC9w9QAQtv3KqCQD66UZDerdixgAxkG/qrFKI/y8BADydhAgw6bSwFXDUQmSxHttXuukmOlHpNT4lfgzj0nryGFpHX9C6vWWvhGZc4O35BYAjfMb7YNbAKtdxZyZxpC6Up072ZPDiL8HHs2/rv14/msElljcQQCMx6TXgz8K7rBnlCBepTlM6OfHRR6FelZhGCZwbBquRQpax5VbiLCatGnvfPDVUQmrkoY1fZXUKwE4zJR7rAfV8z3Ml7fI4xmJsrr4KRBJZvU2eQI1rTcynQ/fhJxBtTmChgMRMMSGYofrJq5jCEZnC84C/Nkxmv4O0GgejUxB+69B+u8mr5GOHxdglQ4CaPwdnw+DuQnMO7W4ahwMgiV1aDmljBsB3z0bh6QNQ9L6ADdBfUqis1qfkqzB454TB8xOb28zZB9gTNrFrY0zDF0ed+8W8ORrpHOwr+RZgJZLGkFcCDRe2DFI2pmQtD4IeYY0WcfSgfCPAwTCOzCP9635iPxMGzpitW7aCObO2Xn+Qke8GhR5DjoEQ0ouYSF+ikO3sTbo1yb12ov6gzg6txsDyjqY9Yp1QYWxOG6eZJhzL2LdCszoIMSBGwEshvDLQTCvbfZt6Htl2Y74Oa5pmzpAc67GDvCZ4FPG5dx5hdmoDwOPoPOan8LW1OFiNNGga2ELkLoP3WLQAxeSZuGjF24d6CBU8Bz3ImaXANKw+xVAmE/dJz2CR+6MG4STAG/3sb/t9FW7JQ2Yy4VgqmjPoblULkAHR+1BAFfik6QGttNkEetbJEpPL4S6aMEaKODkyDQZRW4D17Uy5vEbRiMAawIqSZfDp4QhDYnqkLScsfFXAd4zII1oMU/doPE2ybPABK8ncSF0XDgJuhdDEPO+KJOAr7XPHJeUdkod10VA4aO6hQzOUxG6zXtuSxRDx23QtMASndkaQCBY64ZwoSFpEWyaj7SHOEFTAIvgIW5KMNGQNMS3uq6UukGj/vZUzSIRD5ye1MbhMKA2gl+S8DNIWmNK0rmTAG8GO1yDd0zV8JPpZ2kedk7NK1Ab4jzCsJ3ZOSGNuwwGZC6kQ9LAfGWVLhAv7CQAmhyAWgKsAEApYGAfZZAoVUnaMmfPNM+lxxHfV79lHqt2BPaMesuz5ohmYEByexKoyd2NhlPdXXCqM0UUzF2T53KfD3v57BLgZXMnJJ09IQlAJDOe1k8COJQXEQFxuDYVi1w8z2JI1unl83LM3ZbMeaixh+qtAVAb4MROUsIAWIlAYYUe0nw2pVJFgBxw3XFwDXwh+kcLSxjCkglwCvDkAhSGuvXnjME72HXGkDCnZNQjiDphMv0rWD8PkmewSQhBgnNKB1Vie5uoJy2QnVN3sYLGEMyF0PGuYB7c1ScH4QYAnPVY6hiAomsBX1pCuBkBQg8AepAyBcZJlwOpO22gpnuw9k3xbfba6sej7xUPWvQczOrT4G2cTA6nxl1a4ySE7XyQAkUzRmNHhrmi2eIqeQziYmnCcqy6F09inoLAcbrZjdVOswE+2HcT/hnvY+KcruPzKEq15GmMt9YCLp4qSJV0NkvNOgXC9UtivzpGntcZfxzrvxpCcat/hTSYJY+9X/qxIDqzHwIPFxsWGy80CCfIiaaYtG6gYAWPwNHeEzAHmjKyGLIrxttU6Lt7TIYaZ9KF7KN4MbQqgOIJDNJhDTwAo1ZQZdW0EDRImfbp1kDKx+kWDg08fehyE8IPm8vlCXPkgzj/JnIGZv8B8O+hYqndgeM83c5nUACNcyETAV59lS4sxvDqEzhKoQMw9zbaXge5m9wY7TEZZch0vlAuDkHGNOOYQNt8uFBtsKtOYluPTwEWA435Lq9NPB2IfBP8fvCPzJMfwqaXysWY+0eQcQnYPwXtPO3yNF6ow7FxcVU1FAMXqlQVQMpVtg1eDlw3ubG0f14NN5YuklLEkIAwdHHmKXBI2sERd2MwqV0CTA8eqIGqav8ISBpqBUZ6ErvgUepq8O3m6Ef1V0Bfj9y/QJsz0JB/8yA5LqYZFIFk4NZmyU2aBQoOk0y7BdgPG+aqReoYM++fHSNkPAerPW4eIsjH0wtBYtpxXqTHJWwOuon95nQSfA34Wg+7Qz86OQ8iPcKdwu0YHdxrOy7mcRIZ2S1A1cLZltz3oUEOYF9CMo8wCAOEjCtjQVoH/fhsB4DUy8eKPQABT0btpIHhz1nIOJjza6Jt+4n6OgeC7ubBX7bmBkAJo7Q9TcIs5TzwMEFbA96JTqvtrfZpMiekhhmLo+9KdVS1zK8+F1JcDEFnW4aUAsf5Lqf5XDBYDTzbEhFKD/tl/7SbvA0E4MgEMI/zNTfOQ4fHReIuasXyaRFmoKBt9bCAbZj8OZikpzuOW0g7Dta4YzWwrryjPhZqYGANrwdViMM4ABXEQqhxLsYBq4QGuQoqQE462nNxoY5PdkC2me2oh2SixJD9sQ2Mv9oxzOs0Cacls9P86uPmrypD8udQBfssjAOxOI9raCM23sn6ICRP50QgyC1jQXHcYfxpzIptSMW+GAUQOq6WOWaA0NpCVspDV4iFaDuARfbsL1zP11uQFitzBAnLTP+t5oH3mRv71pq3l2p55/rh+rBxG3X5SghpcBjmk1Vycea164P16iMka5yLRkQBRMg8svbnQgWM11EzbH5xDnrQpHghpANG3VVmFstcvbxNnlYq5uX5eV4eL4aWeNHjenaL+d4b5E+gCh/wIzPUWaezwSnpdrKY36NNR1YhoSA5KsaL1LHQnAp57XKEHVWZKGZ0FBaokK/Rheo5yrJjWZr+pbn3KtmGJH8Fm3draex+XcpHeIqROoh1KUO/CfVq02vMrnpahR/Funm6mAfKnxB0EPvK83BZzVEE35ZMvvx/QIECltAuOi4AAAAASUVORK5CYII=",drive:"data:image/png;base64,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",up:u,left:j,right:m,down:v,back:g,fullscreen:f,grid:O,home:p,list:C,mute:x,play:Q,r_sort:h,sort:N,add:k,minus:R,_0:s.p+"static/media/number-0.3ffa8296.svg",_1:s.p+"static/media/number-1.f4f98eeb.svg",_2:s.p+"static/media/number-2.ace0b312.svg",_3:s.p+"static/media/number-3.ecfcc140.svg",_4:s.p+"static/media/number-4.bdf243da.svg",_5:s.p+"static/media/number-5.e6b30753.svg",_6:s.p+"static/media/number-6.d6a6b0e2.svg",_7:s.p+"static/media/number-7.559a2069.svg",_8:s.p+"static/media/number-8.f976875b.svg",_9:s.p+"static/media/number-9.b6a6b42a.svg",q:M,speed:Z,volume:B,enter:w,esc:s.p+"static/media/esc.66a2e7d7.svg"},S=(s(15),function(e){Object(b.a)(s,e);var t=Object(A.a)(s);function s(){var e;return Object(d.a)(this,s),(e=t.call(this)).state={number:1,URL:"http://3542825ca758.ngrok.io"},e}return Object(l.a)(s,[{key:"sendRequest",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;fetch("".concat(this.state.URL,"/").concat(e,"/").concat(t,"/")).then((function(e){return e.text()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"RemoteDrive",children:[Object(c.jsxs)("div",{className:"flexrow",children:[Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("list")},children:Object(c.jsx)("img",{src:G.list,alt:"list"})}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("grid")},children:Object(c.jsx)("img",{src:G.grid,alt:"grid"})})]}),Object(c.jsxs)("div",{className:"flexrow",children:[Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("up",e.state.number)},children:Object(c.jsx)("img",{src:G.up,alt:"up"})}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("down",e.state.number)},children:Object(c.jsx)("img",{src:G.down,alt:"down"})})]}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("mute",e.state.number)},children:Object(c.jsx)("img",{src:G.mute,alt:"mute"})}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("fullscreen",e.state.number)},children:Object(c.jsx)("img",{src:G.fullscreen,alt:"fullscreen"})}),Object(c.jsxs)("div",{className:"flexrow",children:[Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("left",e.state.number)},children:Object(c.jsx)("img",{src:G.left,alt:"left"})}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("right",e.state.number)},children:Object(c.jsx)("img",{src:G.right,alt:"right"})})]}),Object(c.jsxs)("div",{className:"flexrow",children:[Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("sort",e.state.number)},children:Object(c.jsx)("img",{src:G.sort,alt:"sort"})}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("r_sort",e.state.number)},children:Object(c.jsx)("img",{src:G.r_sort,alt:"r_sort"})})]}),Object(c.jsxs)("div",{className:"flexrow",children:[Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("play",e.state.number)},children:Object(c.jsx)("img",{src:G.play,alt:"play"})}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("back",e.state.number)},children:Object(c.jsx)("img",{src:G.back,alt:"back"})})]}),Object(c.jsxs)("div",{className:"flexrow",children:[Object(c.jsx)("div",{className:"btn",onClick:function(){e.setState({number:e.state.number>0?e.state.number-1:0})},children:Object(c.jsx)("img",{src:G.minus,alt:"minus"})}),Object(c.jsx)("div",{className:"btn",children:Object(c.jsx)("img",{src:G["_".concat(this.state.number)],alt:"_".concat(this.state.number)})}),Object(c.jsx)("div",{className:"btn",onClick:function(){e.setState({number:e.state.number<9?e.state.number+1:9})},children:Object(c.jsx)("img",{src:G.add,alt:"add"})})]}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("enter",e.state.number)},children:Object(c.jsx)("img",{src:G.enter,alt:"enter"})}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("speed",e.state.number)},children:Object(c.jsx)("img",{src:G.speed,alt:"speed"})}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("q",e.state.number)},children:Object(c.jsx)("img",{src:G.q,alt:"q"})}),Object(c.jsx)("div",{className:"btn",onClick:function(t){e.sendRequest("esc",e.state.number)},children:Object(c.jsx)("img",{src:G.esc,alt:"esc"})})]})}}]),s}(a.Component)),D=(s(16),function(e){Object(b.a)(s,e);var t=Object(A.a)(s);function s(){var e;return Object(d.a)(this,s),(e=t.call(this)).state={url:""},e}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(o,{tab:[{title:"drive",icon:G.drive,content:Object(c.jsx)(S,{})},{title:"vlc",icon:G.vlc,content:Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{className:"url",onChange:function(t){return e.setState({url:t.target.value})},value:this.state.url}),Object(c.jsx)("button",{onClick:function(){return localStorage.setItem("url",e.state.url)},children:"set"})]})}]})})}}]),s}(a.Component)),E=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,18)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),E()}],[[17,1,2]]]);
//# sourceMappingURL=main.732ce485.chunk.js.map