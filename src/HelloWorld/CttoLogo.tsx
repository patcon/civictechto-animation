import {Img, useVideoConfig, useCurrentFrame, spring} from 'remotion'
import {useRef, useEffect} from 'react'

export const CttoLogo: React.FC<{
	framesDelay: number;
	logoColor: string;
}> = ({framesDelay, logoColor}) => {
	const config = useVideoConfig();
	const frame = useCurrentFrame();

  const pathUpC = `m 0,0 c -3.342,2.151 -5.728,5.649 -7.147,10.494 -0.81,2.844 -1.179,11.187 -1.101,25.023 0.078,12.992 0.347,20.665 0.81,23.006 0.961,5.191 3.152,8.997 6.572,11.416 3.425,2.42 8.304,3.632 14.646,3.632 12.305,0 19.547,-4.671 21.737,-14.008 L 30.499,58.64 c -0.843,3.459 -2.57,5.974 -5.185,7.55 -2.655,1.537 -6.499,2.308 -11.534,2.308 -5.532,0 -9.55,-0.978 -12.048,-2.939 -2.118,-1.615 -3.52,-4.287 -4.213,-8.014 C -2.978,55.008 -3.23,47.476 -3.23,34.942 -3.263,21.95 -2.939,14.277 -2.246,11.936 -1.291,8.555 0.268,6.091 2.42,4.554 5.035,2.71 8.958,1.788 14.182,1.788 c 5.074,0 8.846,0.771 11.305,2.308 2.112,1.347 3.688,3.61 4.727,6.8 L 35.115,9.455 C 33.617,4.956 31.231,1.71 27.962,-0.291 24.699,-2.286 20.1,-3.286 14.182,-3.286 8.108,-3.286 3.381,-2.191 0,0`
  const pathDownI = `m 169.106,350.543 h 5.018 v 48.951 h -5.018 z m -0.458,60.484 c -0.771,0.771 -1.151,1.693 -1.151,2.766 0,1.04 0.38,1.939 1.151,2.71 0.726,0.727 1.637,1.096 2.71,1.096 1.039,0 1.939,-0.369 2.71,-1.096 0.771,-0.771 1.151,-1.67 1.151,-2.71 0,-1.073 -0.38,-1.995 -1.151,-2.766 -0.771,-0.732 -1.671,-1.095 -2.71,-1.095 -1.073,0 -1.984,0.363 -2.71,1.095`
  const pathDownV = `m 0,0 c -10.953,23.375 -16.686,39.647 -17.183,48.839 h 5.074 C -11.645,41.418 -7.091,27.694 1.559,7.666 L 2.593,5.303 3.576,7.666 c 8.494,20.028 12.97,33.752 13.434,41.173 h 5.074 C 21.586,39.691 15.948,23.408 5.191,0 Z`
  const pathDownC = `m 0,0 c -3.263,2.498 -5.515,5.845 -6.745,10.03 -1.81,6.382 -1.905,13.859 -0.29,22.431 0.922,4.844 2.922,8.572 5.996,11.187 3.079,2.576 7.057,3.861 11.936,3.861 6.571,0 11.667,-2.442 15.283,-7.32 l -4.269,-2.766 c -2.616,3.341 -6.287,5.012 -11.014,5.012 -7.265,0 -11.59,-3.632 -12.97,-10.896 -1.464,-7.807 -1.386,-14.49 0.229,-20.067 0.883,-3.146 2.498,-5.627 4.845,-7.438 2.38,-1.804 5.152,-2.71 8.298,-2.71 4.465,0 7.924,1.615 10.382,4.845 L 25.945,3.403 C 22.453,-1.364 17.563,-3.75 11.299,-3.75 7.035,-3.75 3.263,-2.498 0,0`
  const pathUpT = `m 0,0 v -5.074 h -16.2 v -69.191 h -5.074 V -5.074 H -37.479 V 0 Z`
  const pathDownE = `m 0,0 c -0.425,-1.537 -0.715,-3.264 -0.866,-5.191 l -0.112,-1.442 26.694,4.962 -0.056,0.978 C 25.582,0.117 25.487,0.944 25.37,1.788 24.218,8.706 20.525,12.165 14.3,12.165 7.069,12.165 2.308,8.108 0,0 m 1.788,-30.499 c -3.23,2.497 -5.364,5.856 -6.398,10.086 -2.001,8.075 -2.079,15.339 -0.235,21.799 1.425,5.035 3.806,8.912 7.153,11.645 3.341,2.766 7.342,4.152 11.992,4.152 4.263,0 7.823,-1.291 10.667,-3.861 2.844,-2.576 4.633,-6.153 5.359,-10.729 0.464,-2.727 0.559,-4.979 0.291,-6.745 l -0.229,-1.788 -31.31,-5.823 0.117,-0.978 c 0.19,-2.19 0.553,-4.347 1.095,-6.46 0.766,-3.112 2.303,-5.554 4.611,-7.32 2.307,-1.81 5.074,-2.71 8.303,-2.71 4.611,0 8.382,1.442 11.299,4.32 l 3.867,-3.286 c -3.922,-4.074 -8.974,-6.108 -15.166,-6.108 -4.381,0 -8.186,1.268 -11.416,3.806`
  const pathDownH = `m 0,0 v 33.444 c 0,7.644 -3.342,11.472 -10.031,11.472 -4.727,0 -9.477,-1.229 -14.243,-3.688 L -24.85,40.882 V 0 h -5.074 v 77.779 h 5.074 V 46.587 l 1.498,0.637 c 4.537,1.844 8.974,2.766 13.321,2.766 4.571,0 8.22,-1.497 10.953,-4.498 2.733,-2.995 4.096,-7.013 4.096,-12.048 L 5.018,0 Z`

  const tPath = `m 0,0 v -7.281 h -7.901 v -33.746 h -7.31 v 33.746 h -7.907 V 0 Z`
  const oPath = `m 0,0 c -0.486,-0.414 -0.844,-1.202 -1.067,-2.364 -0.207,-1.123 -0.319,-4.649 -0.341,-10.572 0,-6.058 0.134,-9.578 0.396,-10.573 0.297,-1.067 0.71,-1.799 1.235,-2.196 0.844,-0.654 2.336,-0.983 4.471,-0.983 2.123,0 3.582,0.301 4.387,0.899 0.508,0.38 0.922,1.135 1.24,2.28 0.263,1.012 0.391,4.538 0.391,10.573 -0.017,5.923 -0.128,9.449 -0.335,10.572 -0.224,1.162 -0.648,1.973 -1.269,2.42 C 8.248,0.693 6.711,1.011 4.498,1.011 2.285,1.011 0.788,0.676 0,0 m -8.041,-25.532 c -0.492,1.665 -0.704,6.007 -0.648,13.02 0.055,6.427 0.206,10.271 0.452,11.528 1.163,6.186 5.409,9.282 12.735,9.282 7.522,0 11.869,-3.096 13.048,-9.282 0.246,-1.257 0.397,-5.101 0.453,-11.528 0.056,-7.013 -0.162,-11.355 -0.648,-13.02 -0.973,-3.375 -2.811,-5.739 -5.51,-7.085 -1.861,-0.922 -4.236,-1.381 -7.147,-1.381 -6.857,0 -11.103,2.822 -12.735,8.466`
  const rPath = `m 0,0 c 2.515,0.732 4.582,1.397 6.214,1.995 1.106,0.397 1.76,0.844 1.967,1.352 0.19,0.43 0.246,1.492 0.173,3.174 -0.022,0.754 -0.028,1.341 -0.028,1.777 0,0.671 -0.547,1.224 -1.632,1.654 -0.899,0.38 -1.838,0.565 -2.816,0.565 H 0 Z m 9.589,-23.257 -0.196,2.475 c -0.245,3.129 -2.24,7.857 -5.99,14.171 C 2.336,-6.929 1.201,-7.253 0,-7.594 V -23.257 H -7.309 V 17.826 H 3.878 c 3.096,0 5.767,-0.811 8.019,-2.442 2.475,-1.8 3.71,-4.163 3.71,-7.086 0,-0.324 0.017,-0.816 0.056,-1.492 0.073,-2.38 -0.095,-4.236 -0.508,-5.571 -0.749,-2.342 -2.331,-4.13 -4.75,-5.37 3.917,-6.806 6.018,-12.221 6.298,-16.25 l 0.167,-2.872 z`
  const nPath = `m 0,0 -0.196,2.475 c -0.245,3.526 -3.459,9.992 -9.644,19.402 -0.263,0.413 -0.593,0.916 -0.984,1.52 V 0 h -7.315 v 41.055 h 7.002 l 0.341,-2.274 c 0.263,-1.839 2.615,-6.13 7.058,-12.881 1.592,-2.436 2.782,-4.286 3.57,-5.543 V 41.055 H 7.141 L 7.141,0 Z`

  const pathBracketOpen = `m 0,0 -14.97,7.616 c -0.755,0.381 -1.097,0.907 -1.097,1.629 v 0.151 c 0,0.722 0.342,1.253 1.097,1.629 L 0,18.641 0.795,18.832 c 0.682,0.039 1.214,-0.566 1.214,-1.288 0,-0.604 -0.341,-1.024 -0.868,-1.287 L -12.771,9.362 1.141,2.389 C 1.668,2.121 2.009,1.707 2.009,1.097 2.009,0.375 1.477,-0.19 0.722,-0.19 Z`
  const pathSlash = `M 0,0 V 0 C -0.531,0.258 -0.756,0.907 -0.493,1.438 L 15.55,34.289 c 0.263,0.531 0.907,0.756 1.438,0.497 0.532,-0.258 0.756,-0.907 0.498,-1.438 L 1.438,0.492 C 1.18,-0.039 0.531,-0.258 0,0`
  const pathBracketClose = `m 0,0 14.931,-7.617 c 0.755,-0.38 1.136,-0.911 1.136,-1.628 v -0.151 c 0,-0.722 -0.381,-1.254 -1.136,-1.629 L 0,-18.642 l -0.795,-0.19 c -0.682,-0.039 -1.253,0.566 -1.253,1.288 0,0.604 0.38,1.024 0.873,1.287 l 13.907,6.895 -13.907,6.973 c -0.493,0.268 -0.873,0.682 -0.873,1.292 0,0.717 0.571,1.287 1.287,1.287 z`

  const pathTowerLeftV1 = `m 0,0 v -136.336 l 3.408,-2.624 V 0`
  const pathTowerLeftV2 = `m 0,0 v -149.409 l 3.408,-2.287 V -0.883`
  const pathTowerLeftV3 = `m 0,0 0.122,-100.716 3.403,0.697 v 99.96`
  const pathTowerLeftH1 = `M 0,0 C 1.829,1.829 3.955,2.911 6.344,2.916 8.738,2.911 10.879,1.931 12.707,0.102 l 2.862,1.98 C 13.092,4.559 9.586,6.28 6.344,6.276 3.101,6.28 -0.439,4.559 -2.916,2.082 l 2.833,-2.453 z`
  const pathTowerLeftH2 = `M 0,0 C 0,-12.966 6.671,-24.639 17.261,-32.982 27.857,-41.33 42.403,-46.44 58.45,-46.44 v 3.403 c -15.321,0 -29.149,4.896 -39.082,12.732 C 9.43,-22.459 3.408,-11.761 3.408,0 Z`

  const pathTowerRightV1 = `m 0,0 v -128.252 l 3.408,-0.58 v 129.7`
  const pathTowerRightV2 = `m 0,0 0.088,-201.788 3.408,1.492 L 3.408,0`
  const pathTowerRightV3 = `m 0,0 v -188.174 l 3.408,3.081 V 0`
  const pathTowerRightH1 = `m 0,0 c 17.959,0 34.274,7.017 46.094,18.539 11.82,11.517 19.148,27.564 19.148,45.543 H 61.858 C 61.854,30.003 32.451,3.418 -1.692,3.404 v -3.677 z`
  const pathTowerRightH2 = `m 0,0 c -3.14,3.14 -7.636,5.49 -11.737,5.49 -4.101,0 -8.577,-2.35 -11.717,-5.49 l 3.121,-1.59 c 2.501,2.502 5.339,3.74 8.596,3.745 3.253,-0.005 6.115,-1.624 8.621,-4.125 l 2.453,1.312 z`

  const pathTowerBase = `m 0,0 c -14.038,14.029 -32.455,23.327 -51.136,23.342 -18.68,-0.015 -37.424,-9.655 -51.467,-23.683 l 4.008,-1.941 c 13.4,13.414 30.212,21.43 47.459,21.416 17.247,0.014 34.757,-8.699 48.162,-22.109 l 4.539,1.41 z`
  const pathCircle = `m 0,0 h -1.872 c 0,-38.131 -15.355,-73.347 -40.136,-99.024 -24.78,-25.673 -58.947,-41.789 -96.591,-41.789 -35.693,-0.005 -69.913,14.59 -95.182,38.029 -25.272,23.44 -41.549,55.656 -41.549,90.896 0,3.862 0.195,7.768 0.595,11.698 3.872,37.887 19.821,70.035 44.192,92.734 24.376,22.693 57.173,35.961 94.924,35.966 37.755,-0.005 71.181,-13.117 95.167,-35.703 C -16.472,70.216 -1.882,38.16 -1.872,0 H 0 1.872 c 0.01,39.121 -15.023,72.254 -39.755,95.533 -24.731,23.288 -59.113,36.727 -97.736,36.722 -38.629,0.005 -72.411,-13.619 -97.479,-36.971 -25.068,-23.342 -41.413,-56.387 -45.362,-95.094 -0.415,-4.057 -0.615,-8.09 -0.615,-12.078 0,-36.415 16.818,-69.602 42.744,-93.641 25.931,-24.049 61.01,-39.024 97.732,-39.028 C -61.117,-144.533 1.863,-78.286 1.872,0 Z`

  const color = logoColor

  const scaleCivic = spring({
    fps: config.fps,
    frame: frame - (framesDelay + 0),
    config: {
      damping: 100,
      stiffness: 200,
      mass: 0.5,
    },
  })

  const scaleTech = spring({
    fps: config.fps,
    frame: frame - (framesDelay + 2),
    config: {
      damping: 100,
      stiffness: 200,
      mass: 0.5,
    },
  })

  const scaleToronto = spring({
    fps: config.fps,
    frame: frame - (framesDelay + 5),
    config: {
      damping: 100,
      stiffness: 200,
      mass: 0.5,
    },
  })

  const scaleLogo = spring({
    frame: frame - framesDelay,
    fps: config.fps,
    from: 10,
    to: 1,
    config: {
      damping: 100,
      stiffness: 200,
      mass: 0.5,
    },
  })

  const maxBlur = 10

  const logomarkGroup = useRef(null)
  const logotypeGroup = useRef(null)

  const logotypeBBox = logotypeGroup.current?.getBBox()
  var logotypeX, logotypeY
  if (logotypeBBox) {
    [logotypeX, logotypeY] = [logotypeBBox.x + logotypeBBox.width/2, logotypeBBox.y + logotypeBBox.height/2]
  }

  const logomarkBBox = logomarkGroup.current?.getBBox()
  var logomarkX, logomarkY
  if (logomarkBBox) {
    [logomarkX, logomarkY] = [logomarkBBox.x + logomarkBBox.width/2, logomarkBBox.y + logomarkBBox.height/2]
  }

  return (
    <>
      <svg
        viewBox={`0 0 ${config.width} ${config.height}`}
      >
        <g id="logo" transform="translate(400 1050) scale(1.8) scale(1, -1)" fill={color} stroke="none">
          <g id="logomark" stroke={color} strokeWidth="1" ref={logomarkGroup} style={{
            transform: `
              rotate(${(scaleLogo-1)*8}deg)
              translate(${(1-scaleLogo)*logomarkX}px, ${(1-scaleLogo)*(logomarkY-50)}px)
              scale(${scaleLogo})
            `,
            // Blur in.
            filter: `blur(${scaleLogo-1}px)`,
            // Fades in from 0 to 1.
            opacity: (scaleLogo-10)/-9,
          }}>
            <g strokeWidth="2">
              <path id="bracket-open" d={pathBracketOpen} style={{ transform: "translate(252px, 332px)" }} />
              <path id="slash" d={pathSlash} style={{ transform: "translate(303px, 328px)" }} />
              <path id="bracket-close" d={pathBracketClose} style={{ transform: "translate(328px, 350px)" }} />
            </g>
            <g id="left-tower">
              <path d={pathTowerLeftV1} style={{ transform: "translate(196px, 434px)" }} />
              <path d={pathTowerLeftV2} style={{ transform: "translate(211px, 433px)" }} />
              <path d={pathTowerLeftV3} style={{ transform: "translate(268px, 391px)" }} />
              <path d={pathTowerLeftH1} style={{ transform: "translate(199px, 432px)" }} />
              <path d={pathTowerLeftH2} style={{ transform: "translate(211px, 434px)" }} />
            </g>
            <path id="tower-base" d={pathTowerBase} style={{ transform: "translate(336px, 273px)" }} />
            <g id="right-tower">
              <path d={pathTowerRightV1} style={{ transform: "translate(289px, 421px)" }} />
              <path d={pathTowerRightV2} style={{ transform: "translate(353px, 482px)" }} />
              <path d={pathTowerRightV3} style={{ transform: "translate(374px, 483px)" }} />
              <path d={pathTowerRightH1} style={{ transform: "translate(291px, 418px)" }} />
              <path d={pathTowerRightH2} style={{ transform: "translate(377px, 483px)" }} />
            </g>
            <path id="circle" d={pathCircle} style={{ transform: "translate(426px, 404px)" }} />
          </g>
          <g id="logotype" ref={logotypeGroup}>
            <g id="civic"
              style={{
                transform: `translate(${(1-scaleCivic)*logotypeX}px, ${(1-scaleCivic)*(logotypeY-100)}px) scale(${scaleCivic})`,
                filter: `blur(${maxBlur-scaleCivic*maxBlur}px)`,
              }}
            >
              <path d={pathUpC} style={{ transform: "translate(100px, 150px)"}} />
              <path d={pathDownI} style={{ transform: "translate(-18px, -203px)"}} />
              <path d={pathDownV} style={{ transform: "translate(187px, 148px)"}} />
              <path d={pathDownI} style={{ transform: "translate(52px, -203px)"}} />
              <path d={pathDownC} style={{ transform: "translate(250px, 150px)"}} />
            </g>

            <g id="tech"
              style={{
                transform: `translate(${(1-scaleTech)*logotypeX}px, ${(1-scaleTech)*(logotypeY-100)}px) scale(${scaleTech})`,
                filter: `blur(${maxBlur-scaleTech*maxBlur}px)`,
              }}
            >
              <path d={pathUpT} style={{ transform: "translate(339px, 222px)"}} />
              <path d={pathDownE} style={{ transform: "translate(355px, 181px)"}} />
              <path d={pathDownC} style={{ transform: "translate(407px, 150px)"}} />
              <path d={pathDownH} style={{ transform: "translate(477px, 148px)"}} />
            </g>

            <g id="toronto"
              style={{
                transform: `translate(${(1-scaleToronto)*logotypeX}px, ${(1-scaleToronto)*(logotypeY-100)}px) scale(${scaleToronto})`,
                filter: `blur(${maxBlur-scaleToronto*maxBlur}px)`,
              }}
            >
              <path d={tPath} style={{ transform: "translate(192px, 116px)"}} />
              <path d={oPath} style={{ transform: "translate(211px, 109px)" }}/>
              <path d={rPath} style={{ transform: "translate(247px, 99px)" }} />
              <path d={oPath} style={{ transform: "translate(282px, 109px)" }}/>
              <path d={nPath} style={{ transform: "translate(330px, 76px)" }}/>
              <path d={tPath} style={{ transform: "translate(371px, 116px)" }}/>
              <path d={oPath} style={{ transform: "translate(390px, 109px)" }}/>
            </g>
          </g>
        </g>
      </svg>
    </>
  )
}
