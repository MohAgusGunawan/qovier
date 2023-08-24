import fontColorContrast from 'font-color-contrast';

import styles from './IllustrationSVG.module.css';

interface Props {
  mainColor: string;
  accentColor: string;
}

const IllustrationSVG = ({ mainColor, accentColor }: Props) => {
  const adaptiveMainColor = fontColorContrast(mainColor);
  const adaptiveAccentColor = fontColorContrast(accentColor);

  return (
    <svg
      viewBox="0 0 303 264"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path
        d="M235.571 262.742L236.708 229.206L211.567 225.4L210.034 263.117"
        fill="white"
      />
      <path
        d="M210.034 263.635C209.901 263.63 209.776 263.573 209.685 263.476C209.593 263.379 209.544 263.25 209.547 263.117L211.079 225.39C211.081 225.318 211.098 225.247 211.129 225.182C211.161 225.117 211.206 225.06 211.262 225.014C211.316 224.968 211.38 224.935 211.448 224.918C211.517 224.9 211.589 224.899 211.658 224.913L236.81 228.719C236.931 228.739 237.042 228.802 237.12 228.897C237.199 228.993 237.24 229.113 237.236 229.237L236.099 262.732C236.097 262.798 236.081 262.864 236.053 262.924C236.025 262.985 235.985 263.039 235.936 263.085C235.887 263.13 235.83 263.165 235.767 263.188C235.705 263.211 235.638 263.222 235.571 263.219C235.505 263.216 235.439 263.201 235.379 263.173C235.318 263.145 235.264 263.105 235.218 263.056C235.173 263.007 235.138 262.949 235.115 262.887C235.092 262.824 235.081 262.758 235.084 262.691L236.19 229.663L212.044 226.009L210.541 263.158C210.534 263.287 210.477 263.409 210.382 263.497C210.288 263.586 210.163 263.635 210.034 263.635Z"
        fill="#4D4D4D"
      />
      <path
        d="M112.878 248.258L141.643 214.154L167.363 220.447L134.589 253.972"
        fill="white"
      />
      <path
        d="M134.589 254.49C134.455 254.488 134.327 254.433 134.234 254.338C134.186 254.291 134.149 254.236 134.123 254.175C134.098 254.114 134.084 254.048 134.084 253.982C134.084 253.916 134.098 253.851 134.123 253.79C134.149 253.729 134.186 253.673 134.234 253.627L166.379 220.731L141.826 214.722L113.264 248.593C113.174 248.693 113.049 248.755 112.916 248.766C112.782 248.777 112.648 248.737 112.543 248.654C112.441 248.565 112.377 248.44 112.366 248.306C112.355 248.171 112.396 248.037 112.482 247.933L141.308 213.829C141.369 213.757 141.449 213.703 141.538 213.674C141.628 213.645 141.724 213.643 141.816 213.667L167.536 219.949C167.621 219.974 167.7 220.019 167.763 220.081C167.827 220.143 167.874 220.22 167.901 220.305C167.925 220.391 167.926 220.482 167.905 220.569C167.883 220.656 167.84 220.736 167.779 220.802L135.005 254.297C134.955 254.358 134.891 254.408 134.819 254.441C134.747 254.474 134.668 254.491 134.589 254.49V254.49Z"
        fill="#4D4D4D"
      />
      <path
        d="M223.725 77.2627L217.566 112.034L193.996 117.927L193.796 117.185L192.926 113.971C192.204 111.303 191.239 107.731 190.261 104.112C188.426 97.3187 186.554 90.3717 186.174 88.9092C186.2 88.8918 186.23 88.872 186.267 88.8499C186.5 88.7072 186.874 88.5254 187.385 88.3085C188.4 87.8774 189.882 87.3387 191.685 86.7302C195.288 85.5145 200.133 84.0341 204.995 82.5996C209.856 81.1654 214.729 79.7787 218.388 78.7504C220.217 78.2363 221.742 77.8118 222.81 77.5159C223.168 77.4165 223.476 77.3316 223.725 77.2627ZM186.061 89.0011C186.061 89.0011 186.063 88.9977 186.07 88.9906C186.065 88.9974 186.062 89.001 186.061 89.0011Z"
        fill={`#${mainColor}`}
        stroke="#333333"
      />
      <path
        d="M225.268 76.8222L225.27 76.8218C240.94 73.0949 250.783 76.1299 256.803 81.6893C262.851 87.2732 265.15 95.5015 265.512 102.358C265.872 109.191 263.396 120.166 260.8 129.494C259.505 134.145 258.188 138.365 257.194 141.421C256.697 142.95 256.282 144.187 255.99 145.042C255.858 145.428 255.752 145.737 255.675 145.958L200.083 134.754C200.081 134.713 200.08 134.668 200.078 134.621C200.064 134.279 200.046 133.776 200.025 133.133C199.982 131.849 199.93 130.009 199.892 127.788C199.815 123.343 199.792 117.374 200.006 111.271C200.22 105.163 200.671 98.9375 201.54 93.9738C201.974 91.4906 202.51 89.3428 203.163 87.6902C203.826 86.0162 204.573 84.9439 205.371 84.4843C209.134 82.3169 214.103 80.4009 218.15 79.0231C220.17 78.3354 221.953 77.7843 223.231 77.4051C223.87 77.2155 224.382 77.069 224.734 76.97C224.91 76.9205 225.047 76.8829 225.138 76.8577L225.242 76.8293L225.268 76.8222Z"
        fill={`#${mainColor}`}
        stroke="#333333"
      />
      <path
        d="M197.062 112.39C196.999 112.404 196.933 112.404 196.869 112.39C196.743 112.336 196.642 112.235 196.589 112.108C196.536 111.981 196.534 111.838 196.585 111.71C200.27 102.646 205.822 88.8215 205.974 87.8573C205.975 87.7898 205.99 87.7232 206.017 87.6614C206.045 87.5997 206.084 87.544 206.133 87.4977C206.182 87.4513 206.24 87.4153 206.304 87.3917C206.367 87.368 206.434 87.3572 206.502 87.3599C206.641 87.3652 206.773 87.4242 206.869 87.5245C206.966 87.6248 207.019 87.7587 207.019 87.8979C207.019 88.7708 200.402 105.153 197.549 112.106C197.504 112.195 197.434 112.269 197.348 112.32C197.261 112.37 197.162 112.395 197.062 112.39Z"
        fill="#4D4D4D"
      />
      <path
        d="M228.598 70.6429L224.619 82.5996C224.619 82.5996 224.518 89.7046 232.404 89.0855C234.734 88.8772 236.988 88.1535 239.003 86.9668C241.018 85.7801 242.745 84.1601 244.057 82.2241L247.386 60.7873C246.179 59.7347 245.411 58.2678 245.234 56.6765C245.06 55.4854 245.094 54.2729 245.336 53.0936C245.706 51.5099 246.297 49.9861 247.092 48.5667C243.341 47.9814 239.902 46.138 237.337 43.3394C236.728 42.5956 236.159 41.8197 235.632 41.0151C235.389 40.6395 230.385 42.9842 229.857 43.2481C227.278 44.3846 225.08 46.2376 223.523 48.587C222.491 50.6171 221.837 52.8184 221.595 55.083C221.004 58.1948 220.705 61.355 220.702 64.5225C220.762 70.5617 228.598 70.6429 228.598 70.6429Z"
        fill="white"
      />
      <path
        d="M231.42 89.5929C229.562 89.682 227.742 89.0451 226.345 87.8167C224.976 86.4225 224.198 84.5536 224.173 82.5996C224.168 82.5523 224.168 82.5047 224.173 82.4575L227.959 71.0793C226.03 70.8966 220.296 69.9121 220.245 64.5529C220.249 61.3615 220.552 58.1775 221.148 55.0423C221.411 52.7107 222.099 50.4469 223.178 48.3636C224.746 45.9388 226.981 44.0181 229.613 42.8319C235.45 39.9493 235.835 40.538 235.977 40.8019C235.977 40.8019 236.992 42.3853 237.642 43.0755C240.133 45.8065 243.487 47.5983 247.142 48.1505C247.213 48.1639 247.28 48.194 247.337 48.2383C247.394 48.2825 247.44 48.3397 247.471 48.4051C247.502 48.4705 247.516 48.5422 247.514 48.6144C247.511 48.6866 247.492 48.7572 247.457 48.8204C246.683 50.2016 246.105 51.6843 245.742 53.2255C245.519 54.3558 245.488 55.5156 245.65 56.6562C245.804 58.1276 246.507 59.4868 247.619 60.4624C247.689 60.5099 247.743 60.5764 247.775 60.6538C247.807 60.7312 247.817 60.8163 247.802 60.8989L244.473 82.3357C244.463 82.3965 244.443 82.455 244.412 82.5082C243.072 84.5202 241.296 86.204 239.215 87.4342C237.134 88.6644 234.803 89.4092 232.394 89.6132C232.08 89.5929 231.745 89.5929 231.42 89.5929ZM225.066 82.6808C225.114 84.3514 225.784 85.944 226.944 87.1468C227.687 87.7635 228.553 88.2147 229.484 88.4703C230.415 88.7258 231.39 88.7798 232.344 88.6287C234.583 88.4214 236.75 87.7271 238.692 86.5945C240.635 85.4619 242.306 83.9183 243.59 82.0718L246.868 60.9801C245.693 59.8583 244.946 58.3613 244.757 56.7475C244.572 55.5205 244.599 54.2707 244.838 53.0529C245.165 51.6385 245.677 50.2733 246.361 48.9929C242.736 48.3162 239.429 46.4778 236.942 43.7555C236.414 43.1567 235.632 41.9996 235.328 41.553C233.512 42.174 231.739 42.9131 230.019 43.7657C227.545 44.878 225.434 46.665 223.929 48.9219C222.918 50.9121 222.272 53.0676 222.021 55.2859C221.439 58.3682 221.14 61.4973 221.128 64.6341C221.189 70.1354 228.233 70.2775 228.558 70.2876C228.63 70.288 228.7 70.3057 228.764 70.3393C228.828 70.3729 228.882 70.4213 228.923 70.4805C228.967 70.5394 228.996 70.6078 229.008 70.6801C229.021 70.7524 229.016 70.8266 228.994 70.8966L225.066 82.6808Z"
        fill="#4D4D4D"
      />
      <path
        d="M243.184 58.8689C243.569 58.0166 244.211 57.3065 245.021 56.8389C245.805 56.4318 246.653 56.1639 247.528 56.0472C247.999 55.9358 248.489 55.9358 248.959 56.0472C249.284 56.1522 249.584 56.3213 249.842 56.5445C250.501 57.0039 250.973 57.6847 251.172 58.4629C251.254 59.1069 251.181 59.7612 250.959 60.3711C250.768 61.048 250.488 61.6966 250.126 62.2996C249.753 62.8939 249.265 63.408 248.69 63.812C248.116 64.2161 247.467 64.5019 246.782 64.653C246.096 64.8041 245.387 64.8175 244.696 64.6922C244.006 64.567 243.347 64.3057 242.758 63.9236"
        fill="white"
      />
      <path
        d="M245.65 65.101C244.545 65.1019 243.464 64.7848 242.534 64.1875C242.445 64.1293 242.381 64.038 242.359 63.9334C242.336 63.8289 242.355 63.7196 242.412 63.6292C242.44 63.5837 242.477 63.5443 242.521 63.5134C242.564 63.4825 242.613 63.4607 242.666 63.4493C242.718 63.4379 242.772 63.4372 242.824 63.4472C242.877 63.4572 242.926 63.4777 242.971 63.5074C243.517 63.8594 244.127 64.0997 244.766 64.2147C245.406 64.3297 246.061 64.317 246.696 64.1773C247.955 63.8771 249.047 63.0979 249.741 62.0052C250.086 61.4311 250.352 60.8132 250.532 60.1681C250.73 59.6227 250.799 59.0393 250.735 58.4629C250.55 57.7818 250.134 57.1862 249.558 56.778C249.335 56.5926 249.081 56.4483 248.807 56.3517C248.396 56.2615 247.97 56.2615 247.559 56.3517C246.73 56.4666 245.927 56.7205 245.183 57.1028C244.441 57.5333 243.857 58.1918 243.519 58.9805C243.499 59.0298 243.469 59.0745 243.432 59.112C243.394 59.1496 243.349 59.1792 243.3 59.1991C243.251 59.2189 243.198 59.2287 243.145 59.2278C243.092 59.2269 243.04 59.2153 242.991 59.1937C242.941 59.175 242.895 59.146 242.857 59.1087C242.818 59.0713 242.788 59.0264 242.768 58.9767C242.748 58.9271 242.739 58.8738 242.74 58.8203C242.742 58.7668 242.755 58.7142 242.778 58.6659C243.189 57.7098 243.902 56.9147 244.808 56.4024C245.631 55.976 246.519 55.6912 247.437 55.56C247.971 55.4382 248.526 55.4382 249.061 55.56C249.429 55.6861 249.772 55.875 250.076 56.1182C250.811 56.6424 251.333 57.4133 251.547 58.2903C251.646 58.9951 251.569 59.7132 251.324 60.3812C251.125 61.0937 250.831 61.7763 250.451 62.4112C250.048 63.0509 249.522 63.6044 248.903 64.0399C248.285 64.4754 247.586 64.7843 246.848 64.9487C246.456 65.0431 246.054 65.0942 245.65 65.101Z"
        fill="#4D4D4D"
      />
      <path
        d="M226.568 76.9562C229.464 77.2485 232.372 76.5314 234.8 74.9262C238.657 72.2364 238.86 68.8362 238.86 68.8362C235.628 70.2352 232.113 70.8541 228.598 70.6429L226.568 76.9562Z"
        fill="#4D4D4D"
      />
      <path
        d="M227.725 77.4637C227.311 77.4685 226.898 77.4447 226.487 77.3926C226.422 77.3839 226.361 77.3611 226.306 77.3258C226.251 77.2906 226.204 77.2437 226.169 77.1886C226.135 77.1334 226.112 77.0713 226.104 77.0066C226.096 76.9419 226.102 76.8762 226.122 76.8141L228.152 70.5109C228.184 70.4182 228.244 70.338 228.324 70.2815C228.404 70.225 228.5 70.1952 228.598 70.1963C232.036 70.364 235.465 69.7316 238.616 68.349C238.685 68.3117 238.762 68.2921 238.84 68.2921C238.918 68.2921 238.994 68.3117 239.063 68.349C239.128 68.3922 239.18 68.4513 239.216 68.5205C239.251 68.5898 239.269 68.667 239.266 68.7448C239.266 68.8971 239.022 72.4394 235.033 75.2307C232.879 76.696 230.331 77.4745 227.725 77.4637V77.4637ZM227.147 76.5502C229.757 76.6817 232.341 75.97 234.516 74.5202C236.317 73.3498 237.635 71.5697 238.231 69.5061C235.261 70.6634 232.089 71.2122 228.903 71.1199L227.147 76.5502Z"
        fill="#4D4D4D"
      />
      <path
        d="M233.886 50.1297C233.886 50.1297 228.811 55.2047 229.522 56.4633C230.232 57.7219 233.024 57.4783 233.024 57.4783"
        fill="white"
      />
      <path
        d="M232.658 57.9655C231.785 57.9655 229.837 57.8336 229.146 56.6968C228.314 55.3367 231.968 51.4289 233.582 49.8151C233.624 49.7724 233.673 49.7385 233.728 49.7154C233.783 49.6922 233.842 49.6803 233.902 49.6803C233.961 49.6803 234.02 49.6922 234.075 49.7154C234.13 49.7385 234.18 49.7724 234.221 49.8151C234.305 49.9005 234.352 50.0153 234.352 50.1348C234.352 50.2544 234.305 50.3692 234.221 50.4545C231.643 53.0529 229.613 55.7021 229.908 56.2299C230.385 57.0317 232.344 57.0926 232.953 57.0622C233.072 57.0592 233.187 57.1016 233.276 57.1808C233.364 57.26 233.419 57.3701 233.43 57.4885C233.432 57.5472 233.424 57.6058 233.404 57.661C233.384 57.7162 233.353 57.767 233.313 57.8104C233.274 57.8537 233.226 57.8889 233.173 57.9138C233.12 57.9386 233.062 57.9528 233.003 57.9554L232.658 57.9655Z"
        fill="#4D4D4D"
      />
      <path
        d="M226.101 60.4523L235.977 60.3203C235.977 60.3203 235.531 67.0193 229.786 67.4253C224.041 67.8313 226.101 60.4523 226.101 60.4523Z"
        fill="#4D4D4D"
      />
      <path
        d="M236.221 50.1399C236.35 49.8607 236.551 49.6202 236.802 49.4421C237.053 49.2641 237.346 49.1547 237.652 49.1249C238.789 48.9422 239.367 50.2719 239.367 50.2719"
        fill="white"
      />
      <path
        d="M239.367 50.6779C239.28 50.6795 239.194 50.6554 239.12 50.6085C239.046 50.5616 238.987 50.4939 238.951 50.414C238.951 50.414 238.505 49.399 237.723 49.5309C237.494 49.5533 237.275 49.6342 237.087 49.7657C236.899 49.8973 236.747 50.0751 236.647 50.282C236.606 50.3944 236.522 50.4861 236.414 50.5373C236.306 50.5886 236.182 50.5953 236.069 50.5561C235.959 50.5169 235.87 50.4367 235.819 50.3325C235.767 50.2283 235.759 50.1082 235.795 49.9978C235.942 49.6338 236.185 49.3163 236.497 49.0787C236.81 48.8411 237.181 48.6923 237.571 48.6479C239.032 48.4043 239.743 49.9877 239.773 50.0587C239.797 50.1127 239.81 50.1707 239.811 50.2296C239.811 50.2884 239.801 50.3469 239.779 50.4016C239.757 50.4563 239.725 50.5062 239.684 50.5484C239.643 50.5906 239.594 50.6242 239.54 50.6474L239.367 50.6779Z"
        fill="#4D4D4D"
      />
      <path
        d="M227.076 49.2772C227.205 48.9979 227.405 48.7574 227.656 48.5794C227.907 48.4013 228.201 48.292 228.507 48.2622C229.644 48.0693 230.222 49.4091 230.222 49.4091"
        fill="white"
      />
      <path
        d="M230.222 49.8253C230.133 49.8261 230.047 49.8005 229.972 49.7517C229.898 49.7029 229.84 49.6331 229.806 49.5512C229.806 49.5512 229.359 48.5362 228.578 48.6783C228.349 48.6988 228.129 48.7789 227.94 48.9106C227.751 49.0424 227.6 49.2212 227.502 49.4294C227.461 49.5418 227.377 49.6335 227.269 49.6848C227.161 49.736 227.037 49.7427 226.923 49.7035C226.813 49.6622 226.724 49.5801 226.673 49.4742C226.621 49.3683 226.613 49.2469 226.649 49.1351C226.798 48.7723 227.042 48.4559 227.354 48.2186C227.666 47.9812 228.036 47.8316 228.426 47.7851C229.887 47.5415 230.598 49.1351 230.628 49.196C230.653 49.2497 230.667 49.308 230.669 49.3672C230.67 49.4264 230.66 49.4854 230.638 49.5405C230.616 49.5956 230.583 49.6456 230.542 49.6876C230.5 49.7296 230.45 49.7626 230.395 49.7847C230.341 49.8114 230.282 49.8253 230.222 49.8253V49.8253Z"
        fill="#4D4D4D"
      />
      <path
        d="M201.938 135.114L254.345 146.212L246.341 253.013L113.489 225.855L201.938 135.114Z"
        fill={`#${accentColor}`}
        stroke="#333333"
      />
      <path
        d="M197.062 66.7352L39.3313 93.0237L108.717 22.5015L197.062 66.7352Z"
        fill="#4D4D4D"
      />
      <path
        d="M39.3313 93.5311C39.2311 93.5317 39.133 93.5026 39.0493 93.4476C38.9656 93.3925 38.9001 93.3138 38.861 93.2216C38.8219 93.1293 38.811 93.0275 38.8297 92.9291C38.8484 92.8307 38.8957 92.7399 38.9659 92.6684L108.351 22.136C108.427 22.0607 108.525 22.0113 108.631 21.9949C108.737 21.9785 108.845 21.9959 108.94 22.0447L197.245 66.2885C197.344 66.3325 197.425 66.4086 197.474 66.5045C197.524 66.6004 197.54 66.7103 197.519 66.8163C197.509 66.9217 197.467 67.0214 197.398 67.1015C197.329 67.1815 197.236 67.238 197.133 67.2629L39.4125 93.521L39.3313 93.5311ZM108.828 23.1206L40.8233 92.2624L195.438 66.4915L108.828 23.1206Z"
        fill="#4D4D4D"
      />
      <path
        d="M211.628 172.549L62.8387 199.314L39.5343 93.9574L197.184 67.6689L211.628 172.549Z"
        fill="#4D4D4D"
      />
      <path
        d="M62.8488 199.822C62.7327 199.824 62.6195 199.786 62.5287 199.714C62.4378 199.642 62.3751 199.54 62.3515 199.426L39.0065 94.059C38.9786 93.926 39.0042 93.7875 39.0775 93.6732C39.1158 93.6136 39.1664 93.5628 39.2259 93.5243C39.2854 93.4858 39.3525 93.4604 39.4226 93.45L197.133 67.1615C197.269 67.1406 197.407 67.1734 197.519 67.2528C197.574 67.2935 197.621 67.3452 197.656 67.4045C197.691 67.4638 197.713 67.5296 197.722 67.5979L212.165 172.478C212.176 172.543 212.173 172.609 212.157 172.672C212.142 172.736 212.114 172.796 212.075 172.848C212.037 172.901 211.988 172.946 211.932 172.98C211.876 173.014 211.814 173.036 211.749 173.046L62.93 199.812L62.8488 199.822ZM40.1433 94.3634L63.2345 198.736L211.059 172.133L196.758 68.278L40.1433 94.3634Z"
        fill="#4D4D4D"
      />
      <path
        d="M75.6757 163.885C75.6285 163.74 75.569 163.557 75.4977 163.338C75.2936 162.712 74.9927 161.79 74.605 160.608C73.8297 158.245 72.7074 154.839 71.3195 150.672C68.5436 142.338 64.7048 130.959 60.4535 118.774C52.075 94.7618 42.0783 67.579 35.4576 54.4599L181.178 14.7702L190.239 144.645L75.6757 163.885Z"
        fill={`#${mainColor}`}
        stroke="#333333"
      />
      <path
        d="M60.4636 68.9377C60.3507 68.9383 60.2409 68.9004 60.1524 68.8303C60.0638 68.7602 60.0018 68.662 59.9764 68.552C59.9422 68.4228 59.9603 68.2853 60.0268 68.1694C60.0933 68.0535 60.2029 67.9685 60.3317 67.9328L168.358 39.929C168.493 39.8953 168.635 39.9165 168.754 39.9879C168.873 40.0593 168.959 40.175 168.992 40.3096C169.026 40.4442 169.005 40.5867 168.934 40.7056C168.862 40.8246 168.746 40.9103 168.612 40.944L60.5854 68.9174L60.4636 68.9377Z"
        fill={adaptiveMainColor}
      />
      <path
        d="M65.0311 86.6494C64.9163 86.6515 64.8044 86.6129 64.7152 86.5404C64.6261 86.468 64.5654 86.3664 64.5439 86.2536C64.529 86.1889 64.5272 86.1219 64.5387 86.0565C64.5501 85.9911 64.5745 85.9287 64.6105 85.8728C64.6464 85.817 64.6932 85.769 64.748 85.7315C64.8028 85.6941 64.8645 85.668 64.9296 85.6548L169.525 62.188C169.66 62.1597 169.8 62.186 169.915 62.2612C170.031 62.3364 170.111 62.4543 170.139 62.5889C170.168 62.7235 170.141 62.8638 170.066 62.9789C169.991 63.0941 169.873 63.1747 169.738 63.203L65.1833 86.6393L65.0311 86.6494Z"
        fill={adaptiveMainColor}
      />
      <path
        d="M73.9935 103.224C73.876 103.226 73.7615 103.187 73.6705 103.112C73.5795 103.038 73.5177 102.934 73.4961 102.818C73.4828 102.753 73.4824 102.686 73.4951 102.62C73.5078 102.555 73.5332 102.493 73.57 102.437C73.6067 102.381 73.6541 102.334 73.7093 102.296C73.7646 102.259 73.8266 102.233 73.892 102.22L173.92 82.7924C173.985 82.7792 174.052 82.7789 174.116 82.7917C174.181 82.8045 174.243 82.8301 174.298 82.8669C174.352 82.9038 174.399 82.9512 174.436 83.0064C174.472 83.0615 174.497 83.1234 174.509 83.1883C174.524 83.2537 174.525 83.3214 174.513 83.3874C174.501 83.4533 174.476 83.5162 174.439 83.5721C174.402 83.6281 174.354 83.6759 174.298 83.7129C174.242 83.7498 174.179 83.7751 174.113 83.7871L74.0848 103.214L73.9935 103.224Z"
        fill={adaptiveMainColor}
      />
      <path
        d="M78.7538 124.377C78.6192 124.388 78.4859 124.345 78.3831 124.257C78.2803 124.17 78.2165 124.045 78.2057 123.91C78.195 123.775 78.2381 123.642 78.3257 123.539C78.4132 123.437 78.538 123.373 78.6726 123.362L173.555 107.924C173.689 107.902 173.827 107.935 173.937 108.015C174.048 108.095 174.122 108.216 174.144 108.35C174.165 108.485 174.132 108.622 174.052 108.733C173.972 108.843 173.852 108.917 173.717 108.939L78.835 124.367L78.7538 124.377Z"
        fill={adaptiveMainColor}
      />
      <path
        d="M128.773 134.71L39.5343 93.9574L62.8387 199.314L211.628 172.549L197.184 67.6689L128.773 134.71Z"
        fill="white"
      />
      <path
        d="M62.8488 199.822C62.7328 199.824 62.6195 199.786 62.5287 199.714C62.4379 199.642 62.3752 199.54 62.3515 199.426L39.0065 94.0589C38.9863 93.9665 38.9923 93.8702 39.0238 93.781C39.0554 93.6918 39.1113 93.6132 39.1852 93.5541C39.2591 93.495 39.3481 93.4577 39.442 93.4465C39.536 93.4352 39.6313 93.4505 39.717 93.4905L128.641 134.091L196.829 67.2629C196.896 67.1957 196.981 67.1486 197.073 67.1271C197.165 67.1055 197.262 67.1104 197.352 67.141C197.442 67.1717 197.521 67.227 197.581 67.3005C197.641 67.3741 197.68 67.4631 197.692 67.5573L212.135 172.437C212.145 172.502 212.142 172.568 212.127 172.632C212.111 172.695 212.084 172.755 212.045 172.808C212.006 172.861 211.958 172.905 211.902 172.939C211.846 172.973 211.784 172.996 211.719 173.006L62.9301 199.812L62.8488 199.822ZM40.2448 94.8405L63.2346 198.736L211.059 172.133L196.849 68.7347L129.128 135.075C129.054 135.146 128.96 135.193 128.858 135.209C128.757 135.225 128.653 135.211 128.56 135.166L40.2448 94.8405Z"
        fill="#4D4D4D"
      />
      <path
        d="M211.638 172.549L62.8488 199.314L128.783 134.71L211.638 172.549Z"
        fill="white"
      />
      <path
        d="M62.8487 199.822C62.7547 199.823 62.6622 199.798 62.5815 199.75C62.5009 199.701 62.4353 199.631 62.392 199.548C62.3429 199.452 62.3262 199.343 62.3445 199.237C62.3628 199.13 62.4151 199.033 62.4935 198.959L128.469 134.344C128.543 134.273 128.637 134.227 128.738 134.21C128.84 134.194 128.944 134.209 129.037 134.253L211.881 172.082C211.979 172.128 212.061 172.204 212.113 172.298C212.166 172.393 212.188 172.502 212.176 172.61C212.163 172.716 212.116 172.816 212.043 172.894C211.97 172.972 211.875 173.026 211.77 173.046L62.9401 199.822H62.8487ZM128.885 135.319L64.3814 198.523L209.943 172.336L128.885 135.319Z"
        fill="#4D4D4D"
      />
      <path
        d="M211.638 172.549L62.8488 199.314L128.783 134.71L211.638 172.549Z"
        fill="white"
      />
      <path
        d="M62.8487 199.822C62.7547 199.823 62.6622 199.798 62.5815 199.75C62.5009 199.701 62.4353 199.631 62.392 199.548C62.3429 199.452 62.3262 199.343 62.3445 199.237C62.3628 199.13 62.4151 199.033 62.4935 198.959L128.469 134.344C128.543 134.273 128.637 134.227 128.738 134.21C128.84 134.194 128.944 134.209 129.037 134.253L211.881 172.082C211.979 172.128 212.061 172.204 212.113 172.298C212.166 172.393 212.188 172.502 212.176 172.61C212.163 172.716 212.116 172.816 212.043 172.894C211.97 172.972 211.875 173.026 211.77 173.046L62.9401 199.822H62.8487ZM128.885 135.319L64.3814 198.523L209.943 172.336L128.885 135.319Z"
        fill="#4D4D4D"
      />
      <path
        d="M201.285 27.3734C201.285 27.3734 199.123 35.4934 192.292 35.6964C192.292 35.6964 199.498 37.7264 201.011 44.4863C201.682 42.6108 202.791 40.9225 204.245 39.5615C205.7 38.2005 207.458 37.206 209.374 36.6607C207.413 35.8231 205.666 34.5525 204.265 32.9442C202.864 31.3359 201.845 29.4314 201.285 27.3734V27.3734Z"
        fill="#D1D3D4"
      />
      <path
        d="M5.12573 89.0753C5.12573 89.0753 10.5763 96.8705 5.74488 102.9C5.74488 102.9 12.7382 98.1494 19.6808 101.773C18.5515 99.8287 17.9025 97.643 17.7877 95.3974C17.673 93.1519 18.0958 90.9114 19.0211 88.8622C19.0211 88.8622 13.0833 92.4553 5.12573 89.0753Z"
        fill="#D1D3D4"
      />
      <path
        d="M54.0183 25.516C54.0183 25.516 55.1653 39.0967 44.8833 43.0856C44.8833 43.0856 56.9517 42.233 62.9503 51.7131C62.9503 51.7131 62.524 41.3195 71.4154 35.26C71.3342 35.26 61.4075 35.4427 54.0183 25.516Z"
        fill="#D1D3D4"
      />
      <path
        d="M249.365 93.8661C249.365 93.8661 170.49 133.867 158.482 136.161C146.475 138.455 132.194 134.446 132.762 137.876C133.33 141.307 140.192 143.012 140.192 143.012C140.192 143.012 118.481 146.443 119.618 148.737C120.755 151.031 135.056 148.158 135.056 148.158C135.056 148.158 117.334 153.304 121.333 155.588C125.332 157.872 137.908 152.736 137.908 152.736C137.908 152.736 119.049 162.45 124.195 163.018C129.341 163.586 138.487 158.451 138.487 158.451C138.487 158.451 124.195 165.88 129.91 166.449C135.624 167.017 220.783 136.73 249.365 119.586"
        fill="white"
      />
      <path
        d="M130.082 166.966H129.859C128.793 166.855 128.184 166.489 128.073 165.88C127.9 164.967 129.169 163.688 130.935 162.389C128.77 163.229 126.456 163.619 124.135 163.536C123.353 163.444 122.906 163.15 122.815 162.632C122.531 161.11 127.525 157.892 132.163 155.263C128.235 156.41 123.394 157.365 121.079 156.045C120.815 155.935 120.592 155.744 120.443 155.5C120.294 155.256 120.225 154.97 120.247 154.685C120.44 153.081 124.561 151.203 128.529 149.762C124.368 150.28 119.912 150.452 119.161 148.97C119.093 148.84 119.058 148.696 119.058 148.549C119.058 148.403 119.093 148.258 119.161 148.128C120.176 146.098 132.508 143.794 138.02 142.87C135.837 142.048 132.661 140.434 132.244 137.968C132.202 137.76 132.21 137.545 132.266 137.34C132.322 137.136 132.426 136.947 132.569 136.79C133.584 135.664 136.69 135.846 141.42 136.121C146.414 136.405 152.585 136.76 158.37 135.674C170.165 133.421 248.33 93.8154 249.111 93.4195C249.233 93.3589 249.373 93.3483 249.502 93.39C249.631 93.4318 249.739 93.5226 249.802 93.6428C249.862 93.7627 249.872 93.9015 249.83 94.0289C249.788 94.1563 249.698 94.262 249.578 94.3229C246.351 95.957 170.5 134.395 158.563 136.669C152.697 137.785 146.383 137.42 141.308 137.136C137.522 136.912 133.95 136.709 133.27 137.46C133.23 137.506 133.203 137.56 133.191 137.619C133.179 137.677 133.181 137.738 133.198 137.795C133.625 140.343 138.426 142.079 140.253 142.535C140.387 142.542 140.514 142.602 140.604 142.702C140.695 142.802 140.742 142.934 140.735 143.068C140.728 143.203 140.668 143.329 140.568 143.42C140.468 143.51 140.337 143.557 140.202 143.55C130.854 145.022 120.47 147.377 120.003 148.625C120.602 149.742 128.195 149.042 134.883 147.702C134.95 147.686 135.019 147.683 135.087 147.694C135.155 147.704 135.219 147.728 135.278 147.764C135.336 147.8 135.387 147.847 135.427 147.902C135.468 147.958 135.497 148.021 135.513 148.087C135.529 148.154 135.531 148.223 135.521 148.291C135.51 148.359 135.486 148.424 135.45 148.482C135.414 148.54 135.367 148.591 135.312 148.631C135.256 148.672 135.194 148.701 135.127 148.717C128.54 150.625 121.343 153.518 121.181 154.868C121.181 155 121.384 155.142 121.516 155.223C124.622 156.999 134.213 153.741 137.644 152.33C137.767 152.282 137.904 152.282 138.026 152.331C138.149 152.38 138.248 152.474 138.304 152.594C138.357 152.713 138.363 152.848 138.319 152.971C138.276 153.093 138.187 153.195 138.07 153.254C131.24 156.776 123.86 161.293 123.739 162.5C123.882 162.54 124.028 162.57 124.175 162.592C128.012 163.018 134.325 160.044 136.974 158.704L138.172 158.065C138.291 158.004 138.428 157.992 138.556 158.032C138.683 158.072 138.789 158.16 138.852 158.278C138.884 158.335 138.905 158.398 138.913 158.464C138.921 158.529 138.915 158.595 138.897 158.658C138.879 158.721 138.849 158.781 138.808 158.832C138.767 158.883 138.717 158.926 138.659 158.958C138.578 158.958 138.111 159.273 137.38 159.648C132.64 162.226 128.844 164.967 128.996 165.738C128.996 165.738 129.179 165.931 129.89 166.002H130.143C133.188 166.002 154.006 159.384 180.893 149.234C195.591 143.692 231.643 129.675 249.111 119.201C249.168 119.159 249.233 119.13 249.301 119.114C249.37 119.099 249.441 119.098 249.51 119.112C249.579 119.125 249.644 119.153 249.702 119.193C249.759 119.233 249.808 119.285 249.845 119.345C249.881 119.405 249.905 119.472 249.915 119.541C249.924 119.611 249.919 119.682 249.9 119.749C249.88 119.817 249.847 119.879 249.802 119.934C249.758 119.988 249.702 120.032 249.639 120.063C222.072 136.547 138.111 166.966 130.082 166.966Z"
        fill="#4D4D4D"
      />
      <path
        d="M234.79 127.676C234.79 127.676 222.61 99.1035 223.736 98.7178C224.863 98.3321 248.096 83.0969 250.035 84.2439C251.974 85.3908 259.17 107.487 256.886 113.963C254.603 120.439 234.79 127.676 234.79 127.676Z"
        fill={`#${mainColor}`}
      />
      <path
        d="M237.835 127.818C237.725 127.818 237.619 127.783 237.529 127.72C237.44 127.656 237.373 127.566 237.337 127.463C237.296 127.331 237.307 127.188 237.37 127.064C237.433 126.941 237.541 126.847 237.672 126.803C237.845 126.742 254.755 121.038 261.434 112.491C261.476 112.438 261.529 112.393 261.588 112.36C261.648 112.327 261.714 112.306 261.782 112.298C261.85 112.291 261.919 112.297 261.984 112.316C262.05 112.335 262.111 112.367 262.164 112.41C262.22 112.451 262.266 112.503 262.301 112.562C262.336 112.622 262.359 112.688 262.367 112.756C262.376 112.824 262.37 112.894 262.351 112.96C262.332 113.026 262.299 113.088 262.256 113.141C255.384 121.931 238.708 127.564 238.007 127.798C237.951 127.814 237.893 127.821 237.835 127.818V127.818Z"
        fill="#4D4D4D"
      />
      <path
        d="M251.344 65.7303C251.221 65.7276 251.102 65.6807 251.01 65.598C250.918 65.5152 250.858 65.4023 250.842 65.2795C250.826 65.1567 250.855 65.0323 250.923 64.9288C250.991 64.8253 251.094 64.7495 251.213 64.7153C253.108 64.15 254.851 63.166 256.315 61.836C257.778 60.5061 258.924 58.8642 259.667 57.0317C261.147 53.2865 261.499 49.1906 260.682 45.2476C260.114 41.4358 258.458 37.8691 255.912 34.9758C254.638 33.5753 253.062 32.4822 251.304 31.7789C249.546 31.0757 247.651 30.7805 245.762 30.9158L245.021 31.0173C244.467 31.1101 243.908 31.161 243.346 31.1695C242.662 31.1365 241.982 31.038 241.316 30.8752L240.88 30.7838C237.302 30.0684 233.602 30.2684 230.122 31.365C226.642 32.4617 223.496 34.4196 220.975 37.057C218.454 39.6944 216.64 42.9259 215.702 46.4515C214.763 49.9772 214.73 53.6829 215.606 57.2246C215.85 58.2396 216.439 59.8534 217.687 60.0057C217.756 60.0119 217.823 60.032 217.883 60.0648C217.944 60.0977 217.997 60.1425 218.04 60.1967C218.083 60.2508 218.114 60.3131 218.132 60.3797C218.15 60.4464 218.154 60.516 218.144 60.5842C218.136 60.6524 218.115 60.7184 218.082 60.7784C218.049 60.8383 218.004 60.8911 217.95 60.9336C217.896 60.9761 217.835 61.0075 217.768 61.0259C217.702 61.0443 217.633 61.0495 217.565 61.041C216.175 60.8684 215.119 59.6098 214.591 57.4783C213.664 53.7606 213.692 49.8687 214.672 46.1646C215.653 42.4606 217.555 39.0648 220.201 36.2933C222.847 33.5219 226.151 31.4647 229.805 30.3133C233.46 29.1619 237.346 28.9536 241.103 29.7079L241.56 29.7993C242.172 29.9536 242.797 30.0454 243.427 30.0733C243.931 30.0599 244.433 30.0124 244.93 29.9312C245.194 29.9312 245.447 29.85 245.711 29.8297C247.758 29.6651 249.816 29.9761 251.723 30.7385C253.63 31.501 255.334 32.6941 256.704 34.2247C259.406 37.2609 261.169 41.016 261.779 45.0344C262.628 49.1815 262.243 53.4866 260.672 57.4174C259.87 59.3955 258.632 61.1672 257.05 62.6011C255.469 64.035 253.584 65.0941 251.537 65.6998L251.344 65.7303Z"
        fill="#4D4D4D"
      />
      <path
        d="M243.417 30.6214C243.417 30.6214 248.695 26.7035 257.272 28.7944C265.849 30.8853 269.087 46.5163 261.078 54.9002C261.078 54.9002 262.327 32.0526 243.417 30.6214Z"
        fill="#4D4D4D"
      />
      <path
        d="M273.938 79.6256H273.888C269.827 79.3756 265.936 77.9077 262.723 75.4134C261.111 74.1424 259.815 72.5168 258.935 70.663C258.055 68.8092 257.614 66.7773 257.648 64.7254C257.649 64.6561 257.664 64.5877 257.693 64.5245C257.721 64.4614 257.763 64.4047 257.814 64.3581C257.865 64.3115 257.926 64.2759 257.991 64.2536C258.057 64.2312 258.127 64.2225 258.196 64.2281C258.265 64.2307 258.332 64.247 258.395 64.2761C258.457 64.3052 258.513 64.3465 258.56 64.3975C258.606 64.4486 258.642 64.5084 258.665 64.5734C258.688 64.6384 258.697 64.7074 258.693 64.7762C258.664 66.6625 259.071 68.53 259.88 70.2339C260.69 71.9378 261.882 73.4323 263.362 74.6014C265.842 76.5516 268.781 77.831 271.898 78.3163C271.042 77.3572 270.497 76.161 270.335 74.8856C270.169 72.9626 270.465 71.0277 271.198 69.2422C272.421 66.2094 273.913 63.2916 275.654 60.5233C278.181 56.2096 280.566 52.1394 281.094 47.4095C281.403 44.6775 281.038 41.9113 280.032 39.3527C279.025 36.7941 277.408 34.5208 275.32 32.7316C273.232 30.9423 270.738 29.6915 268.056 29.0883C265.373 28.4852 262.584 28.5481 259.931 29.2715C259.797 29.3062 259.654 29.2876 259.533 29.2195C259.412 29.1514 259.322 29.0391 259.282 28.9061C259.263 28.8401 259.258 28.7711 259.267 28.7031C259.275 28.6352 259.297 28.5695 259.331 28.51C259.365 28.4506 259.41 28.3984 259.465 28.3566C259.519 28.3149 259.581 28.2843 259.647 28.2666C262.467 27.4968 265.433 27.4295 268.285 28.0707C271.137 28.7119 273.788 30.042 276.007 31.9447C278.226 33.8473 279.946 36.2647 281.015 38.9854C282.084 41.7061 282.47 44.6472 282.14 47.5516C281.581 52.4947 279.024 56.849 276.557 61.0714C274.874 63.779 273.43 66.6284 272.243 69.5873C271.553 71.2096 271.274 72.9773 271.431 74.7333C271.51 75.5586 271.801 76.3495 272.276 77.0289C272.751 77.7084 273.393 78.2533 274.141 78.6106C274.253 78.6572 274.346 78.7408 274.403 78.8475C274.461 78.9542 274.48 79.0774 274.457 79.1965C274.435 79.3155 274.372 79.4231 274.279 79.5013C274.186 79.5795 274.07 79.6234 273.949 79.6256H273.938Z"
        fill="#4D4D4D"
      />
      <path
        d="M227.36 102.96C227.23 102.983 227.097 102.957 226.985 102.886C226.874 102.815 226.793 102.705 226.759 102.578C226.725 102.451 226.739 102.316 226.8 102.198C226.86 102.081 226.962 101.991 227.086 101.945L247.944 89.0854C248.063 89.0138 248.205 88.9917 248.34 89.024C248.475 89.0563 248.591 89.1403 248.665 89.258C248.702 89.3164 248.726 89.3816 248.738 89.4497C248.749 89.5178 248.747 89.5875 248.73 89.6547C248.714 89.7218 248.685 89.7851 248.644 89.8407C248.603 89.8964 248.552 89.9433 248.492 89.9786L227.634 102.839C227.556 102.904 227.461 102.947 227.36 102.96V102.96Z"
        fill="#4D4D4D"
      />
      <path
        d="M235.305 127.505C235.308 127.637 235.261 127.765 235.174 127.863C235.086 127.962 234.965 128.025 234.834 128.039C234.703 128.053 234.572 128.018 234.465 127.94C234.359 127.862 234.286 127.747 234.26 127.617L224.807 105.01C224.754 104.882 224.755 104.738 224.808 104.61C224.86 104.482 224.962 104.38 225.089 104.325C225.153 104.298 225.221 104.284 225.29 104.283C225.359 104.283 225.428 104.296 225.491 104.322C225.555 104.349 225.613 104.388 225.662 104.437C225.71 104.486 225.749 104.544 225.774 104.608L235.228 127.215C235.281 127.302 235.308 127.403 235.305 127.505V127.505Z"
        fill="#4D4D4D"
      />
      <path
        d="M0.466903 140.891C0.343073 140.891 0.224313 140.842 0.136752 140.754C0.0491915 140.667 0 140.548 0 140.424C0 140.3 0.0491915 140.182 0.136752 140.094C0.224313 140.006 0.343073 139.957 0.466903 139.957L31.9319 138.242C31.9947 138.235 32.0582 138.241 32.1184 138.26C32.1786 138.279 32.234 138.311 32.281 138.353C32.3281 138.396 32.3656 138.447 32.3911 138.505C32.4167 138.563 32.4297 138.625 32.4293 138.688C32.4348 138.811 32.3922 138.93 32.3106 139.021C32.229 139.112 32.1149 139.168 31.9928 139.176L0.5278 140.891H0.466903Z"
        fill="#D1D3D4"
      />
      <path
        d="M75.9119 237.489C75.8221 237.49 75.7339 237.466 75.6581 237.418C75.5545 237.349 75.4818 237.243 75.4552 237.122C75.4287 237 75.4505 236.873 75.516 236.768L90.9542 212.763C90.9854 212.708 91.0278 212.659 91.0786 212.62C91.1294 212.582 91.1876 212.554 91.2496 212.538C91.3115 212.523 91.376 212.521 91.439 212.531C91.5019 212.542 91.562 212.565 91.6156 212.6C91.6691 212.635 91.715 212.68 91.7503 212.734C91.7856 212.787 91.8096 212.847 91.8209 212.909C91.8321 212.972 91.8304 213.037 91.8157 213.099C91.8011 213.161 91.7739 213.219 91.7357 213.271L76.3483 237.275C76.3021 237.348 76.237 237.406 76.16 237.443C76.083 237.481 75.9972 237.497 75.9119 237.489V237.489Z"
        fill="#D1D3D4"
      />
      <path
        d="M17.6102 198.624C17.5269 198.624 17.4454 198.601 17.374 198.558C17.3026 198.515 17.244 198.454 17.2042 198.381C17.174 198.328 17.1547 198.269 17.1476 198.208C17.1404 198.148 17.1455 198.086 17.1625 198.027C17.1796 197.969 17.2082 197.914 17.2467 197.867C17.2853 197.819 17.3329 197.78 17.3869 197.751L40.8232 184.597C40.9326 184.538 41.0606 184.524 41.1801 184.558C41.2995 184.593 41.4009 184.672 41.4627 184.78C41.4935 184.833 41.5136 184.892 41.5216 184.953C41.5296 185.014 41.5255 185.076 41.5094 185.135C41.4934 185.195 41.4658 185.25 41.4281 185.299C41.3905 185.348 41.3436 185.389 41.2901 185.419L17.8538 198.614C17.7749 198.639 17.6909 198.642 17.6102 198.624Z"
        fill="#D1D3D4"
      />
      <path
        d="M191.368 16.2896C191.293 16.2894 191.219 16.2711 191.152 16.2361C191.086 16.2011 191.029 16.1506 190.986 16.0888C190.943 16.0271 190.916 15.9558 190.906 15.8812C190.897 15.8066 190.905 15.7308 190.932 15.6603L196.646 0.272949C196.695 0.16561 196.783 0.0808131 196.892 0.0356123C197.001 -0.00958858 197.123 -0.0118406 197.234 0.0293107C197.344 0.0704621 197.435 0.151964 197.488 0.257423C197.541 0.362882 197.552 0.484475 197.519 0.597749L191.805 16.0257C191.766 16.1082 191.704 16.1773 191.627 16.2243C191.549 16.2713 191.459 16.2941 191.368 16.2896V16.2896Z"
        fill="#D1D3D4"
      />
      <path
        d="M277.674 109.457C277.564 109.458 277.457 109.42 277.373 109.349C277.289 109.278 277.234 109.179 277.217 109.071C277.207 109.01 277.209 108.948 277.223 108.888C277.236 108.828 277.262 108.772 277.298 108.722C277.334 108.672 277.379 108.629 277.431 108.597C277.484 108.564 277.542 108.543 277.603 108.533L302.176 104.473C302.298 104.455 302.422 104.485 302.522 104.557C302.623 104.629 302.691 104.737 302.714 104.859C302.724 104.919 302.722 104.981 302.708 105.041C302.694 105.101 302.668 105.158 302.633 105.208C302.597 105.258 302.551 105.3 302.499 105.332C302.447 105.365 302.389 105.387 302.328 105.396L277.745 109.406L277.674 109.457Z"
        fill="#D1D3D4"
      />
      <path
        d="M277.105 211.2C277.034 211.201 276.964 211.185 276.9 211.153C276.837 211.121 276.782 211.075 276.74 211.017L261.302 191.59C261.227 191.491 261.193 191.367 261.208 191.244C261.224 191.121 261.286 191.008 261.383 190.931C261.43 190.892 261.484 190.863 261.543 190.846C261.601 190.828 261.662 190.823 261.723 190.829C261.783 190.836 261.842 190.855 261.895 190.884C261.948 190.914 261.995 190.954 262.032 191.002L277.471 210.439C277.509 210.487 277.537 210.543 277.554 210.602C277.571 210.662 277.575 210.724 277.568 210.786C277.56 210.847 277.541 210.906 277.51 210.96C277.479 211.014 277.438 211.061 277.389 211.099C277.308 211.162 277.208 211.197 277.105 211.2Z"
        fill="#D1D3D4"
      />
      <path
        d="M36.8445 46.1814C36.7328 46.1827 36.6244 46.143 36.54 46.0698L25.507 36.5897C25.422 36.5009 25.3745 36.3827 25.3745 36.2598C25.3745 36.1369 25.422 36.0187 25.507 35.9299C25.5461 35.8819 25.5945 35.8424 25.6493 35.8138C25.7042 35.7851 25.7642 35.7678 25.8259 35.7631C25.8876 35.7583 25.9497 35.7662 26.0082 35.7861C26.0668 35.8061 26.1207 35.8377 26.1667 35.8792L37.1998 45.3593C37.2477 45.3984 37.2872 45.4468 37.3159 45.5016C37.3446 45.5565 37.3618 45.6166 37.3666 45.6783C37.3713 45.74 37.3635 45.802 37.3435 45.8605C37.3236 45.9191 37.2919 45.973 37.2505 46.019C37.2024 46.0786 37.1398 46.1249 37.0687 46.1533C36.9976 46.1817 36.9204 46.1914 36.8445 46.1814V46.1814Z"
        fill="#D1D3D4"
      />
      <path
        d="M231.095 163.789C231.01 163.79 230.926 163.769 230.852 163.729C230.793 163.698 230.742 163.655 230.7 163.604C230.658 163.553 230.626 163.494 230.607 163.431C230.589 163.368 230.582 163.301 230.59 163.236C230.597 163.17 230.617 163.106 230.649 163.048L241.702 142.85C241.755 142.751 241.84 142.673 241.944 142.629C242.047 142.585 242.162 142.577 242.27 142.606C242.379 142.632 242.476 142.694 242.545 142.783C242.613 142.872 242.649 142.982 242.646 143.094V160.998C242.646 161.133 242.592 161.262 242.497 161.357C242.402 161.452 242.273 161.506 242.138 161.506C242.004 161.506 241.875 161.452 241.78 161.357C241.684 161.262 241.631 161.133 241.631 160.998V145.073L231.481 163.536C231.441 163.605 231.386 163.665 231.319 163.709C231.252 163.753 231.175 163.781 231.095 163.789Z"
        fill={adaptiveAccentColor}
      />
    </svg>
  );
};

export default IllustrationSVG;
