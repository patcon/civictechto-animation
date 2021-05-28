import {Img, useVideoConfig} from 'remotion'
import logo from '../../../ctto-logo.svg'

export const CttoLogo: React.FC = () => {
	const config = useVideoConfig();

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

  return (
    <>
      <Img src={logo} style={{position: "absolute", transform: "scale(1.5)", opacity: "0.5", margin: "86px 169px", display: ""}} />
      <svg
        viewBox={`0 0 ${config.width} ${config.height}`}
      >
        <g id="logo" transform="translate(0 1000) scale(2) scale(1, -1)" fill="red" stroke="none">
          <g id="logomark">
          </g>
          <g id="logotype">
            <g id="civic">
              <path d={pathUpC} style={{ transform: "translate(100px, 150px)"}} />
              <path d={pathDownI} style={{ transform: "translate(-18px, -203px)"}} />
              <path d={pathDownV} style={{ transform: "translate(187px, 148px)"}} />
              <path d={pathDownI} style={{ transform: "translate(52px, -203px)"}} />
              <path d={pathDownC} style={{ transform: "translate(250px, 150px)"}} />
            </g>

            <g id="tech">
              <path d={pathUpT} style={{ transform: "translate(339px, 222px)"}} />
              <path d={pathDownE} style={{ transform: "translate(355px, 181px)"}} />
              <path d={pathDownC} style={{ transform: "translate(407px, 150px)"}} />
              <path d={pathDownH} style={{ transform: "translate(477px, 148px)"}} />
            </g>

            <g id="toronto">
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
