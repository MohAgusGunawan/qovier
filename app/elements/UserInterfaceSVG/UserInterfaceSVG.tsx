import styles from './UserInterfaceSVG.module.css';

interface Props {
  mainColor: string;
  accentColor: string;
}

const UserInterfaceSVG = ({ mainColor, accentColor }: Props) => {
  return (
    <svg
      viewBox="0 0 338 213"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path
        d="M327.307 1.015H9.93674C5.00934 1.015 1.01489 5.00945 1.01489 9.93685V202.787C1.01489 207.714 5.00934 211.709 9.93674 211.709H327.307C332.234 211.709 336.229 207.714 336.229 202.787V9.93685C336.229 5.00945 332.234 1.015 327.307 1.015Z"
        fill="white"
      />
      <path
        d="M327.307 1.015C328.479 1.01366 329.64 1.24352 330.723 1.69142C331.806 2.13931 332.79 2.79644 333.619 3.62517C334.447 4.45391 335.105 5.43797 335.552 6.52103C336 7.60408 336.23 8.76484 336.229 9.93685V202.787C336.23 203.959 336 205.12 335.552 206.203C335.105 207.286 334.447 208.27 333.619 209.099C332.79 209.927 331.806 210.584 330.723 211.032C329.64 211.48 328.479 211.71 327.307 211.709H9.93685C8.76484 211.71 7.60408 211.48 6.52103 211.032C5.43797 210.584 4.45391 209.927 3.62517 209.099C2.79644 208.27 2.13931 207.286 1.69142 206.203C1.24352 205.12 1.01366 203.959 1.015 202.787V9.93685C1.01366 8.76484 1.24352 7.60408 1.69142 6.52103C2.13931 5.43797 2.79644 4.45391 3.62517 3.62517C4.45391 2.79644 5.43797 2.13931 6.52103 1.69142C7.60408 1.24352 8.76484 1.01366 9.93685 1.015H327.307ZM327.307 0H9.93685C7.30226 0.00268699 4.77634 1.05047 2.91341 2.91341C1.05047 4.77634 0.00268699 7.30226 0 9.93685V202.787C0.00268699 205.421 1.05047 207.947 2.91341 209.81C4.77634 211.673 7.30226 212.721 9.93685 212.724H327.307C329.942 212.721 332.468 211.673 334.33 209.81C336.193 207.947 337.241 205.421 337.244 202.787V9.93685C337.241 7.30226 336.193 4.77634 334.33 2.91341C332.468 1.05047 329.942 0.00268699 327.307 0V0Z"
        fill="#4D4D4D"
      />
      <path
        d="M336.229 9.93686V202.787C336.23 203.959 336 205.12 335.552 206.203C335.105 207.286 334.447 208.27 333.619 209.099C332.79 209.927 331.806 210.584 330.723 211.032C329.64 211.48 328.479 211.71 327.307 211.709H204.797C180.775 181.852 167.678 144.682 167.678 106.362C167.678 68.0413 180.775 30.8716 204.797 1.01501H327.307C328.479 1.01367 329.64 1.24353 330.723 1.69142C331.806 2.13931 332.79 2.79644 333.619 3.62518C334.447 4.45391 335.105 5.43798 335.552 6.52103C336 7.60408 336.23 8.76485 336.229 9.93686V9.93686Z"
        fill="#68E1FD"
      />
      <path
        d="M336.229 9.93686V202.787C336.23 203.959 336 205.12 335.552 206.203C335.105 207.286 334.447 208.27 333.619 209.099C332.79 209.927 331.806 210.584 330.723 211.032C329.64 211.48 328.479 211.71 327.307 211.709H204.797C189.941 193.298 179.158 171.946 173.159 149.063C173.108 148.89 173.068 148.728 173.027 148.555C172.986 148.383 172.936 148.22 172.895 148.048C166.444 122.745 165.969 96.2879 171.505 70.7691C177.042 45.2504 188.44 21.3696 204.797 1.01501H327.307C328.479 1.01367 329.64 1.24353 330.723 1.69142C331.806 2.13931 332.79 2.79644 333.619 3.62518C334.447 4.45391 335.105 5.43798 335.552 6.52103C336 7.60408 336.23 8.76485 336.229 9.93686V9.93686Z"
        fill={`#${mainColor}`}
      />
      <path
        d="M202.838 162.248C201.63 154.189 197.763 125.809 197.763 125.515L198.778 125.383C198.778 125.667 202.635 154.047 203.853 162.095L202.838 162.248Z"
        fill="#4D4D4D"
      />
      <path
        d="M205.639 151.144L204.675 150.819C205.994 146.901 206.147 142.648 206.319 138.152C206.532 132.458 206.756 126.581 209.496 121.343L210.399 121.82C207.76 126.895 207.547 132.61 207.354 138.192C207.192 142.567 206.999 147.084 205.639 151.144Z"
        fill="#4D4D4D"
      />
      <path
        d="M237.896 148.048L237.723 148.555L237.551 149.063H173.159C173.108 148.89 173.068 148.728 173.027 148.555C172.986 148.383 172.936 148.22 172.895 148.048H237.896Z"
        fill="#4D4D4D"
      />
      <path
        d="M278.952 79.6268L265.757 89.6245C265.71 89.6698 265.653 89.7046 265.591 89.7264C265.529 89.7483 265.463 89.7568 265.397 89.7514C265.332 89.7459 265.268 89.7267 265.21 89.6949C265.153 89.6632 265.102 89.6196 265.063 89.567C265.023 89.5144 264.995 89.4541 264.981 89.39C264.966 89.3258 264.965 89.2593 264.978 89.1947C264.991 89.1302 265.017 89.0691 265.055 89.0155C265.093 88.9619 265.142 88.9169 265.199 88.8835L278.394 78.8858C278.442 78.8468 278.497 78.8181 278.556 78.8015C278.616 78.7849 278.678 78.7808 278.739 78.7894C278.8 78.798 278.859 78.8191 278.911 78.8514C278.963 78.8837 279.009 78.9265 279.044 78.9771C279.117 79.0757 279.148 79.1991 279.131 79.3207C279.114 79.4423 279.05 79.5522 278.952 79.6268V79.6268Z"
        fill="#68E1FD"
      />
      <path
        d="M266.61 118.085C266.535 117.989 266.5 117.867 266.513 117.746C266.526 117.624 266.587 117.513 266.681 117.435L323.917 71.9432C323.964 71.9007 324.02 71.8684 324.081 71.8482C324.141 71.828 324.205 71.8204 324.268 71.8259C324.332 71.8313 324.393 71.8497 324.45 71.8798C324.506 71.91 324.555 71.9513 324.594 72.0012C324.634 72.0512 324.663 72.1087 324.679 72.1702C324.696 72.2317 324.7 72.296 324.69 72.359C324.681 72.422 324.659 72.4825 324.626 72.5366C324.592 72.5908 324.548 72.6376 324.496 72.674L267.219 118.156C267.14 118.223 267.039 118.26 266.935 118.258C266.872 118.252 266.811 118.234 266.755 118.205C266.699 118.175 266.65 118.134 266.61 118.085Z"
        fill="#68E1FD"
      />
      <path
        d="M298.197 121.587C298.159 121.539 298.131 121.484 298.114 121.426C298.097 121.367 298.093 121.305 298.1 121.245C298.108 121.184 298.128 121.126 298.158 121.073C298.189 121.02 298.229 120.974 298.278 120.937L332.392 94.6589C332.491 94.5856 332.614 94.5542 332.736 94.5713C332.857 94.5884 332.967 94.6527 333.042 94.7502C333.114 94.8484 333.145 94.9704 333.13 95.0912C333.115 95.2119 333.054 95.3223 332.961 95.3998L298.846 121.688C298.799 121.726 298.744 121.755 298.685 121.771C298.627 121.788 298.565 121.792 298.505 121.785C298.444 121.777 298.386 121.758 298.333 121.727C298.28 121.697 298.234 121.656 298.197 121.607V121.587Z"
        fill="#68E1FD"
      />
      <path
        d="M248.624 137.319H336.229V154.656H244.524C244.211 154.655 243.903 154.583 243.623 154.444C243.343 154.304 243.099 154.103 242.91 153.854C242.724 153.602 242.599 153.311 242.544 153.002C242.49 152.694 242.507 152.378 242.595 152.077L246.513 138.882C246.647 138.428 246.926 138.03 247.307 137.748C247.688 137.466 248.15 137.315 248.624 137.319V137.319Z"
        fill="#68E1FD"
      />
      <path
        d="M336.229 171.109V176.651H232.323C230.841 176.651 229.187 175.443 229.187 173.971V171.109H336.229Z"
        fill="#4D4D4D"
      />
      <path
        d="M336.229 137.319V154.656H244.524C244.211 154.655 243.903 154.583 243.623 154.444C243.343 154.304 243.099 154.103 242.91 153.854C242.724 153.602 242.599 153.311 242.544 153.002C242.49 152.694 242.507 152.378 242.595 152.077L243.488 149.032L243.641 148.525L243.793 148.017L246.513 138.882C246.646 138.426 246.924 138.026 247.305 137.742C247.686 137.458 248.149 137.306 248.624 137.309L336.229 137.319Z"
        fill="white"
      />
      <path
        d="M336.229 137.319V154.656H244.524C244.211 154.655 243.903 154.583 243.623 154.444C243.343 154.304 243.099 154.103 242.91 153.854C242.724 153.602 242.599 153.311 242.544 153.002C242.49 152.694 242.507 152.378 242.595 152.077L243.488 149.032L243.641 148.525L243.793 148.017L246.513 138.882C246.646 138.426 246.924 138.026 247.305 137.742C247.686 137.458 248.149 137.306 248.624 137.309H336.229M337.244 136.294H248.624C247.936 136.296 247.266 136.522 246.717 136.938C246.168 137.353 245.768 137.936 245.579 138.598L242.859 147.733L242.707 148.231L242.555 148.738L241.661 151.783C241.529 152.235 241.504 152.711 241.586 153.174C241.669 153.637 241.858 154.075 242.138 154.453C242.422 154.827 242.789 155.132 243.21 155.341C243.63 155.551 244.094 155.66 244.564 155.66H337.285V136.304L337.244 136.294Z"
        fill="#4D4D4D"
      />
      <path
        d="M336.229 132.853V133.767H247.508C247.275 133.752 247.041 133.752 246.807 133.767C245.542 133.897 244.34 134.389 243.345 135.182C242.35 135.976 241.603 137.038 241.194 138.243L237.896 147.987L237.723 148.494L237.551 149.002L230.192 170.723C230.152 170.828 230.124 170.937 230.111 171.048V171.048C230.107 171.112 230.107 171.176 230.111 171.241C230.113 171.691 230.294 172.122 230.614 172.44C230.933 172.757 231.365 172.936 231.816 172.936H336.229V173.869H231.806C231.381 173.869 230.963 173.767 230.587 173.571C230.21 173.375 229.887 173.091 229.644 172.743C229.364 172.339 229.205 171.864 229.187 171.373C229.182 171.329 229.182 171.284 229.187 171.241C229.182 171.166 229.182 171.092 229.187 171.017V171.017C229.206 170.824 229.247 170.633 229.309 170.449L236.566 149.022L236.739 148.515L236.911 148.007L240.311 137.959C240.646 136.976 241.179 136.073 241.878 135.304C242.576 134.536 243.425 133.92 244.371 133.493C244.615 133.369 244.87 133.271 245.133 133.198C245.891 132.942 246.687 132.812 247.487 132.813L336.229 132.853Z"
        fill="#4D4D4D"
      />
      <path
        d="M276.212 168.825C275.968 168.827 275.727 168.774 275.507 168.668C275.287 168.563 275.094 168.408 274.943 168.216C274.796 168.027 274.691 167.809 274.637 167.576C274.582 167.343 274.58 167.1 274.629 166.866L276.242 159.538C276.374 158.957 276.701 158.439 277.168 158.07C277.635 157.7 278.215 157.502 278.81 157.508H307.342C307.937 157.502 308.517 157.7 308.984 158.07C309.451 158.439 309.778 158.957 309.91 159.538L311.524 166.856C311.573 167.092 311.57 167.337 311.513 167.572C311.457 167.807 311.349 168.027 311.198 168.215C311.046 168.403 310.855 168.556 310.638 168.661C310.42 168.767 310.182 168.823 309.94 168.825H276.212Z"
        fill="white"
      />
      <path
        d="M309.372 159.649C309.273 159.183 309.018 158.764 308.649 158.461C308.28 158.158 307.819 157.99 307.342 157.985H278.77C278.293 157.99 277.832 158.158 277.463 158.461C277.094 158.764 276.839 159.183 276.74 159.649L275.126 166.967C275.091 167.13 275.092 167.298 275.131 167.46C275.17 167.622 275.244 167.772 275.349 167.901C275.451 168.033 275.582 168.138 275.732 168.211C275.881 168.283 276.046 168.319 276.212 168.317H309.94C310.106 168.317 310.27 168.279 310.419 168.207C310.569 168.135 310.7 168.03 310.805 167.901C310.909 167.772 310.982 167.621 311.021 167.459C311.059 167.298 311.061 167.13 311.026 166.967L309.372 159.649Z"
        fill="white"
      />
      <path
        d="M307.301 157.985C307.779 157.99 308.239 158.158 308.608 158.461C308.977 158.764 309.232 159.183 309.331 159.649L310.945 166.968C310.98 167.13 310.978 167.298 310.94 167.459C310.901 167.621 310.827 167.772 310.723 167.901C310.619 168.03 310.488 168.135 310.338 168.207C310.189 168.279 310.025 168.317 309.859 168.317H276.212C276.046 168.319 275.881 168.283 275.732 168.211C275.582 168.138 275.451 168.033 275.349 167.901C275.244 167.772 275.17 167.622 275.131 167.46C275.092 167.298 275.091 167.13 275.126 166.968L276.74 159.649C276.839 159.183 277.094 158.764 277.463 158.461C277.832 158.158 278.293 157.99 278.77 157.985H307.301M307.301 156.97H278.77C278.057 156.97 277.365 157.216 276.811 157.664C276.257 158.113 275.873 158.739 275.725 159.436L274.111 166.744C274.044 167.057 274.048 167.38 274.122 167.691C274.195 168.001 274.337 168.292 274.537 168.541C274.74 168.786 274.997 168.981 275.287 169.111C275.578 169.241 275.894 169.303 276.212 169.292H309.94C310.258 169.293 310.572 169.222 310.858 169.085C311.145 168.948 311.396 168.748 311.595 168.5C311.794 168.253 311.936 167.964 312.009 167.655C312.083 167.346 312.087 167.024 312.021 166.714L310.407 159.385C310.257 158.69 309.872 158.067 309.318 157.62C308.764 157.173 308.074 156.929 307.362 156.929L307.301 156.97Z"
        fill="#4D4D4D"
      />
      <path
        d="M278.952 79.6268L265.757 89.6245C265.71 89.6698 265.653 89.7046 265.591 89.7264C265.529 89.7483 265.463 89.7568 265.397 89.7514C265.332 89.7459 265.268 89.7267 265.21 89.6949C265.153 89.6632 265.102 89.6196 265.063 89.567C265.023 89.5144 264.995 89.4541 264.981 89.39C264.966 89.3258 264.965 89.2593 264.978 89.1947C264.991 89.1302 265.017 89.0691 265.055 89.0155C265.093 88.9619 265.142 88.9169 265.199 88.8835L278.394 78.8858C278.442 78.8468 278.497 78.8181 278.556 78.8015C278.616 78.7849 278.678 78.7808 278.739 78.7894C278.8 78.798 278.859 78.8191 278.911 78.8514C278.963 78.8837 279.009 78.9265 279.044 78.9771C279.117 79.0757 279.148 79.1991 279.131 79.3207C279.114 79.4423 279.05 79.5522 278.952 79.6268V79.6268Z"
        fill="#4D4D4D"
      />
      <path
        d="M266.61 118.085C266.535 117.989 266.5 117.867 266.513 117.746C266.526 117.624 266.587 117.513 266.681 117.435L323.917 71.9432C323.964 71.9007 324.02 71.8684 324.081 71.8482C324.141 71.828 324.205 71.8204 324.268 71.8259C324.332 71.8313 324.393 71.8497 324.45 71.8798C324.506 71.91 324.555 71.9513 324.594 72.0012C324.634 72.0512 324.663 72.1087 324.679 72.1702C324.696 72.2317 324.7 72.296 324.69 72.359C324.681 72.422 324.659 72.4825 324.626 72.5366C324.592 72.5908 324.548 72.6376 324.496 72.674L267.219 118.156C267.14 118.223 267.039 118.26 266.935 118.258C266.872 118.252 266.811 118.234 266.755 118.205C266.699 118.175 266.65 118.134 266.61 118.085Z"
        fill="#4D4D4D"
      />
      <path
        d="M298.197 121.587C298.159 121.539 298.131 121.484 298.114 121.426C298.097 121.367 298.093 121.305 298.1 121.245C298.108 121.184 298.128 121.126 298.158 121.073C298.189 121.02 298.229 120.974 298.278 120.937L332.392 94.6589C332.491 94.5856 332.614 94.5542 332.736 94.5713C332.857 94.5884 332.967 94.6527 333.042 94.7502C333.114 94.8484 333.145 94.9704 333.13 95.0912C333.115 95.2119 333.054 95.3223 332.961 95.3998L298.846 121.688C298.799 121.726 298.744 121.755 298.685 121.771C298.627 121.788 298.565 121.792 298.505 121.785C298.444 121.777 298.386 121.758 298.333 121.727C298.28 121.697 298.234 121.656 298.197 121.607V121.587Z"
        fill="#4D4D4D"
      />
      <path
        d="M336.229 63.2751V68.1065H247.508V128.387H336.229V133.32H245.894C245.631 133.319 245.37 133.292 245.112 133.239C244.306 133.057 243.585 132.606 243.069 131.961C242.552 131.315 242.271 130.513 242.27 129.687V66.9088C242.269 66.4321 242.362 65.9598 242.543 65.519C242.725 65.0782 242.992 64.6775 243.328 64.34C243.665 64.0024 244.065 63.7346 244.505 63.5519C244.945 63.3692 245.417 63.2751 245.894 63.2751H336.229Z"
        fill="#4D4D4D"
      />
      <path
        d="M245.935 62.7676C244.838 62.7703 243.787 63.2078 243.013 63.9841C242.238 64.7605 241.803 65.8122 241.803 66.9088V129.707C241.806 130.532 242.053 131.338 242.514 132.023C242.975 132.708 243.628 133.24 244.392 133.554C244.621 133.637 244.855 133.708 245.092 133.767V133.767C245.366 133.82 245.645 133.847 245.924 133.848H336.259V132.833H245.924C245.515 132.832 245.11 132.75 244.733 132.592C244.355 132.434 244.012 132.204 243.724 131.913C243.436 131.623 243.207 131.279 243.052 130.9C242.896 130.522 242.817 130.116 242.818 129.707V66.9088C242.817 66.4987 242.897 66.0925 243.053 65.7132C243.209 65.334 243.438 64.9893 243.728 64.6989C244.017 64.4084 244.361 64.178 244.74 64.0208C245.118 63.8635 245.524 63.7826 245.935 63.7826H336.27V62.7676H245.935Z"
        fill="#4D4D4D"
      />
      <path
        d="M278.952 79.6268L265.757 89.6245C265.71 89.6698 265.653 89.7046 265.591 89.7264C265.529 89.7483 265.463 89.7568 265.397 89.7514C265.332 89.7459 265.268 89.7267 265.21 89.6949C265.153 89.6632 265.102 89.6196 265.063 89.567C265.023 89.5144 264.995 89.4541 264.981 89.39C264.966 89.3258 264.965 89.2593 264.978 89.1947C264.991 89.1302 265.017 89.0691 265.055 89.0155C265.093 88.9619 265.142 88.9169 265.199 88.8835L278.394 78.8858C278.442 78.8468 278.497 78.8181 278.556 78.8015C278.616 78.7849 278.678 78.7808 278.739 78.7894C278.8 78.798 278.859 78.8191 278.911 78.8514C278.963 78.8837 279.009 78.9265 279.044 78.9771C279.117 79.0757 279.148 79.1991 279.131 79.3207C279.114 79.4423 279.05 79.5522 278.952 79.6268V79.6268Z"
        fill="#68E1FD"
      />
      <path
        d="M324.536 72.674L267.26 118.156C267.18 118.223 267.079 118.26 266.975 118.258C266.881 118.256 266.789 118.225 266.712 118.17C266.635 118.115 266.576 118.037 266.544 117.948C266.512 117.859 266.508 117.762 266.533 117.671C266.557 117.579 266.609 117.497 266.681 117.435L323.917 71.9432C323.964 71.9007 324.02 71.8684 324.08 71.8482C324.141 71.828 324.205 71.8204 324.268 71.8259C324.332 71.8313 324.393 71.8497 324.449 71.8798C324.506 71.91 324.555 71.9513 324.594 72.0012C324.634 72.0512 324.663 72.1087 324.679 72.1702C324.696 72.2317 324.7 72.296 324.69 72.359C324.681 72.422 324.659 72.4825 324.625 72.5366C324.592 72.5908 324.548 72.6376 324.496 72.674H324.536Z"
        fill="#68E1FD"
      />
      <path
        d="M333.052 94.7705C333.124 94.8688 333.155 94.9907 333.14 95.1115C333.125 95.2322 333.065 95.3427 332.971 95.4201L298.846 121.688C298.799 121.726 298.744 121.755 298.685 121.771C298.627 121.788 298.565 121.792 298.505 121.785C298.444 121.777 298.386 121.758 298.333 121.727C298.28 121.697 298.234 121.656 298.197 121.607C298.159 121.559 298.131 121.505 298.114 121.446C298.097 121.387 298.093 121.326 298.1 121.265C298.108 121.205 298.128 121.146 298.158 121.093C298.189 121.041 298.229 120.994 298.278 120.958L332.392 94.6792C332.441 94.6414 332.497 94.6137 332.557 94.5977C332.617 94.5818 332.68 94.578 332.741 94.5865C332.803 94.595 332.862 94.6157 332.915 94.6473C332.968 94.6789 333.015 94.7208 333.052 94.7705V94.7705Z"
        fill="#68E1FD"
      />
      <path
        d="M324.536 72.674L267.26 118.156C267.18 118.223 267.079 118.26 266.975 118.258C266.881 118.256 266.789 118.225 266.712 118.17C266.635 118.115 266.576 118.037 266.544 117.948C266.512 117.859 266.508 117.762 266.533 117.671C266.557 117.579 266.609 117.497 266.681 117.435L323.917 71.9432C323.964 71.9007 324.02 71.8684 324.08 71.8482C324.141 71.828 324.205 71.8204 324.268 71.8259C324.332 71.8313 324.393 71.8497 324.449 71.8798C324.506 71.91 324.555 71.9513 324.594 72.0012C324.634 72.0512 324.663 72.1087 324.679 72.1702C324.696 72.2317 324.7 72.296 324.69 72.359C324.681 72.422 324.659 72.4825 324.625 72.5366C324.592 72.5908 324.548 72.6376 324.496 72.674H324.536Z"
        fill="white"
      />
      <path
        d="M332.961 95.4201L298.846 121.688C298.799 121.726 298.744 121.755 298.685 121.771C298.627 121.788 298.565 121.792 298.505 121.785C298.444 121.777 298.386 121.758 298.333 121.727C298.28 121.697 298.234 121.656 298.197 121.607C298.159 121.559 298.131 121.505 298.114 121.446C298.097 121.387 298.093 121.326 298.1 121.265C298.108 121.205 298.128 121.146 298.158 121.093C298.189 121.041 298.229 120.994 298.278 120.958L332.392 94.6792C332.491 94.606 332.614 94.5745 332.736 94.5916C332.857 94.6087 332.967 94.673 333.042 94.7705C333.114 94.8688 333.145 94.9907 333.13 95.1115C333.115 95.2322 333.054 95.3427 332.961 95.4201Z"
        fill="white"
      />
      <path
        d="M278.952 79.6268L265.757 89.6245C265.71 89.6698 265.653 89.7046 265.591 89.7264C265.529 89.7483 265.463 89.7568 265.397 89.7514C265.332 89.7459 265.268 89.7267 265.21 89.6949C265.153 89.6632 265.102 89.6196 265.063 89.567C265.023 89.5144 264.995 89.4541 264.981 89.39C264.966 89.3258 264.965 89.2593 264.978 89.1947C264.991 89.1302 265.017 89.0691 265.055 89.0155C265.093 88.9619 265.142 88.9169 265.199 88.8835L278.394 78.8858C278.442 78.8468 278.497 78.8181 278.556 78.8015C278.616 78.7849 278.678 78.7808 278.739 78.7894C278.8 78.798 278.859 78.8191 278.911 78.8514C278.963 78.8837 279.009 78.9265 279.044 78.9771C279.117 79.0757 279.148 79.1991 279.131 79.3207C279.114 79.4423 279.05 79.5522 278.952 79.6268V79.6268Z"
        fill="white"
      />
      <path
        d="M336.229 9.93686V21.9646H1.0149V9.93686C1.01356 8.76485 1.24342 7.60408 1.69131 6.52103C2.13921 5.43798 2.79633 4.45391 3.62507 3.62518C4.45381 2.79644 5.43787 2.13931 6.52092 1.69142C7.60398 1.24353 8.76474 1.01367 9.93675 1.01501H327.307C328.479 1.01367 329.64 1.24353 330.723 1.69142C331.806 2.13931 332.79 2.79644 333.619 3.62518C334.447 4.45391 335.104 5.43798 335.552 6.52103C336 7.60408 336.23 8.76485 336.229 9.93686V9.93686Z"
        fill="white"
      />
      <path
        d="M327.307 1.015C328.479 1.01366 329.64 1.24352 330.723 1.69142C331.806 2.13931 332.79 2.79644 333.619 3.62517C334.447 4.45391 335.105 5.43797 335.552 6.52103C336 7.60408 336.23 8.76484 336.229 9.93685V21.9646H1.015V9.93685C1.01366 8.76484 1.24352 7.60408 1.69142 6.52103C2.13931 5.43797 2.79644 4.45391 3.62517 3.62517C4.45391 2.79644 5.43797 2.13931 6.52103 1.69142C7.60408 1.24352 8.76484 1.01366 9.93685 1.015H327.307ZM327.307 0H9.93685C7.30226 0.00268699 4.77634 1.05047 2.91341 2.91341C1.05047 4.77634 0.00268699 7.30226 0 9.93685V22.9796H337.244V9.93685C337.241 7.30226 336.193 4.77634 334.33 2.91341C332.468 1.05047 329.942 0.00268699 327.307 0V0Z"
        fill="#4D4D4D"
      />
      <path
        d="M232.668 44.7006H209.496C209.227 44.7006 208.969 44.5937 208.778 44.4033C208.588 44.213 208.481 43.9548 208.481 43.6856C208.481 43.4164 208.588 43.1582 208.778 42.9679C208.969 42.7775 209.227 42.6706 209.496 42.6706H232.668C232.938 42.6706 233.196 42.7775 233.386 42.9679C233.576 43.1582 233.683 43.4164 233.683 43.6856C233.683 43.9548 233.576 44.213 233.386 44.4033C233.196 44.5937 232.938 44.7006 232.668 44.7006Z"
        fill="white"
      />
      <path
        d="M267.727 44.7006H244.554C244.285 44.7006 244.027 44.5937 243.836 44.4033C243.646 44.213 243.539 43.9548 243.539 43.6856C243.539 43.4164 243.646 43.1582 243.836 42.9679C244.027 42.7775 244.285 42.6706 244.554 42.6706H267.727C267.996 42.6706 268.254 42.7775 268.444 42.9679C268.635 43.1582 268.742 43.4164 268.742 43.6856C268.742 43.9548 268.635 44.213 268.444 44.4033C268.254 44.5937 267.996 44.7006 267.727 44.7006Z"
        fill="white"
      />
      <path
        d="M302.775 44.7006H279.602C279.333 44.7006 279.075 44.5937 278.884 44.4033C278.694 44.213 278.587 43.9548 278.587 43.6856C278.587 43.4164 278.694 43.1582 278.884 42.9679C279.075 42.7775 279.333 42.6706 279.602 42.6706H302.775C303.044 42.6706 303.302 42.7775 303.492 42.9679C303.683 43.1582 303.79 43.4164 303.79 43.6856C303.79 43.9548 303.683 44.213 303.492 44.4033C303.302 44.5937 303.044 44.7006 302.775 44.7006V44.7006Z"
        fill="white"
      />
      <path
        d="M112.097 96.3742H22.9694C21.758 96.3742 20.5962 95.893 19.7396 95.0364C18.8831 94.1799 18.4019 93.0181 18.4019 91.8067C18.4019 90.5954 18.8831 89.4336 19.7396 88.577C20.5962 87.7204 21.758 87.2392 22.9694 87.2392H112.097C113.308 87.2392 114.47 87.7204 115.326 88.577C116.183 89.4336 116.664 90.5954 116.664 91.8067C116.664 93.0181 116.183 94.1799 115.326 95.0364C114.47 95.893 113.308 96.3742 112.097 96.3742V96.3742Z"
        fill="#D1D3D4"
      />
      <path
        d="M124.459 116.096H22.9694C21.758 116.096 20.5962 115.614 19.7396 114.758C18.8831 113.901 18.4019 112.74 18.4019 111.528C18.4019 110.317 18.8831 109.155 19.7396 108.298C20.5962 107.442 21.758 106.961 22.9694 106.961H124.469C125.681 106.961 126.842 107.442 127.699 108.298C128.556 109.155 129.037 110.317 129.037 111.528C129.037 112.74 128.556 113.901 127.699 114.758C126.842 115.614 125.681 116.096 124.469 116.096H124.459Z"
        fill="#D1D3D4"
      />
      <path
        d="M91.218 136H22.9694C22.8348 136 22.7057 135.946 22.6106 135.851C22.5154 135.756 22.4619 135.627 22.4619 135.492C22.4619 135.358 22.5154 135.229 22.6106 135.133C22.7057 135.038 22.8348 134.985 22.9694 134.985H91.218C91.3526 134.985 91.4817 135.038 91.5769 135.133C91.672 135.229 91.7255 135.358 91.7255 135.492C91.7255 135.627 91.672 135.756 91.5769 135.851C91.4817 135.946 91.3526 136 91.218 136Z"
        fill="#D1D3D4"
      />
      <path
        d="M80.3169 147.977H22.9694C22.8348 147.977 22.7057 147.923 22.6106 147.828C22.5154 147.733 22.4619 147.604 22.4619 147.469C22.4619 147.335 22.5154 147.206 22.6106 147.11C22.7057 147.015 22.8348 146.962 22.9694 146.962H80.3169C80.4515 146.962 80.5806 147.015 80.6758 147.11C80.7709 147.206 80.8244 147.335 80.8244 147.469C80.8218 147.603 80.7675 147.731 80.6729 147.825C80.5783 147.92 80.4507 147.974 80.3169 147.977V147.977Z"
        fill="#D1D3D4"
      />
      <path
        d="M30.3688 164.209H89.3505C93.1609 164.209 96.2498 167.298 96.2498 171.109C96.2498 174.919 93.1609 178.008 89.3505 178.008H30.3688C26.5584 178.008 23.4695 174.919 23.4695 171.109C23.4695 167.298 26.5584 164.209 30.3688 164.209Z"
        fill={`#${accentColor}`}
        stroke="#666666"
      />
      <path
        d="M74.8156 44.7006H51.6432C51.374 44.7006 51.1158 44.5937 50.9255 44.4033C50.7351 44.213 50.6282 43.9548 50.6282 43.6856C50.6282 43.4164 50.7351 43.1582 50.9255 42.9679C51.1158 42.7775 51.374 42.6706 51.6432 42.6706H74.8156C75.0848 42.6706 75.343 42.7775 75.5333 42.9679C75.7237 43.1582 75.8306 43.4164 75.8306 43.6856C75.8306 43.9548 75.7237 44.213 75.5333 44.4033C75.343 44.5937 75.0848 44.7006 74.8156 44.7006Z"
        fill="#D1D3D4"
      />
      <path
        d="M30.7038 52.3029C34.9753 52.3029 38.4381 48.8402 38.4381 44.5687C38.4381 40.2971 34.9753 36.8344 30.7038 36.8344C26.4322 36.8344 22.9695 40.2971 22.9695 44.5687C22.9695 48.8402 26.4322 52.3029 30.7038 52.3029Z"
        fill="#D1D3D4"
      />
      <path
        d="M206.103 112.835L206.101 112.846L206.099 112.857C205.257 117.475 203.105 121.749 199.903 125.163L199.902 125.164C199.327 125.78 198.914 126.057 198.613 126.155C198.355 126.239 198.149 126.201 197.908 126.046C197.635 125.87 197.347 125.559 196.98 125.111C196.886 124.996 196.787 124.873 196.683 124.744C196.4 124.391 196.081 123.993 195.723 123.598C195.329 123.161 194.935 122.731 194.542 122.303C193.32 120.973 192.12 119.667 191.048 118.233L191.047 118.232C188.771 115.218 187.098 111.591 187.534 107.965L187.534 107.964C187.612 107.305 187.759 106.635 187.927 105.947C187.977 105.74 188.03 105.531 188.083 105.319C188.204 104.836 188.328 104.344 188.431 103.86C188.731 102.459 188.898 100.99 188.411 99.5435C188.083 98.5687 187.488 97.722 186.944 96.9484C186.893 96.8766 186.843 96.8055 186.794 96.7349C186.194 95.8767 185.685 95.0918 185.496 94.1925L185.495 94.1912C185.111 92.3922 186.067 90.6921 187.193 88.7708L187.228 88.7109C187.763 87.7982 188.323 86.8422 188.701 85.8594C189.089 84.8492 189.3 83.7762 189.091 82.6429C188.946 81.7058 188.496 80.8805 188.058 80.1336C187.996 80.0278 187.934 79.9238 187.873 79.8211C187.488 79.1712 187.133 78.5737 186.92 77.9288C186.538 76.7627 186.603 75.5744 186.919 74.3386C187.238 73.0936 187.801 71.8359 188.39 70.5299L188.414 70.4775C188.988 69.2044 189.583 67.8846 189.931 66.5589C190.157 65.6993 190.283 64.8227 190.232 63.9369C193.076 66.7662 195.088 70.3491 196.026 74.2893L196.026 74.2894C196.213 75.072 196.359 75.8762 196.502 76.6958C196.522 76.8074 196.541 76.9193 196.561 77.0316C196.684 77.739 196.809 78.4568 196.958 79.1643C197.303 80.8033 197.787 82.4362 198.728 83.8917C199.297 84.7978 200.005 85.5588 200.692 86.2752C200.754 86.3399 200.816 86.4042 200.877 86.4682C201.507 87.1238 202.107 87.748 202.613 88.4552C203.858 90.2069 204.474 92.3366 204.357 94.4932C204.304 95.4206 204.12 96.3308 203.928 97.2762C203.847 97.6757 203.765 98.0815 203.691 98.4975C203.448 99.8621 203.306 101.291 203.725 102.713L203.734 102.741L203.746 102.769C204.363 104.205 205.054 105.609 205.815 106.974C206.449 108.861 206.549 110.89 206.103 112.835Z"
        fill={`#${accentColor}`}
        stroke="#666666"
      />
      <path
        d="M209.447 121.121L209.447 121.12C209.113 119.641 208.934 118.162 209.424 116.914C209.663 116.324 210.044 115.81 210.464 115.242C210.558 115.116 210.653 114.987 210.749 114.855C211.257 114.153 211.775 113.351 211.884 112.352C211.951 111.753 211.853 111.157 211.768 110.641C211.761 110.602 211.755 110.564 211.748 110.526C211.655 109.955 211.592 109.477 211.68 109.02C211.768 108.566 211.985 108.168 212.285 107.771C212.486 107.503 212.7 107.265 212.928 107.011C213.056 106.868 213.188 106.721 213.325 106.56L213.326 106.559C214.731 104.907 215.658 102.872 216.014 100.698C216.723 101.753 217.314 102.895 217.775 104.101C218.29 105.69 218.268 107.496 217.462 108.809C217.168 109.187 216.929 109.609 216.752 110.061L216.744 110.081L216.738 110.102C216.528 110.818 216.722 111.481 216.975 112.043C217.099 112.318 217.246 112.588 217.383 112.838L217.393 112.858C217.536 113.12 217.667 113.362 217.773 113.6L217.773 113.6L217.775 113.604C218.008 114.118 218.106 114.693 218.057 115.265C218.008 115.833 217.816 116.374 217.505 116.831C217.179 117.261 216.739 117.581 216.235 117.947C216.115 118.034 215.991 118.124 215.865 118.218C215.241 118.684 214.565 119.26 214.289 120.174L214.282 120.195L214.278 120.218C214.158 120.8 214.101 121.395 214.108 121.991C214.017 122.876 213.684 123.71 213.153 124.386C212.619 125.066 211.912 125.556 211.125 125.798C210.877 125.861 210.748 125.867 210.687 125.859C210.685 125.859 210.683 125.859 210.681 125.859C210.667 125.832 210.641 125.77 210.61 125.636C210.587 125.533 210.567 125.424 210.543 125.292C210.528 125.208 210.511 125.115 210.491 125.008L210.491 125.008L210.489 124.999C210.347 124.33 210.155 123.676 209.967 123.038L209.953 122.989C209.768 122.363 209.588 121.75 209.447 121.121Z"
        fill={`#${accentColor}`}
        stroke="#666666"
      />
      <path
        d="M192.353 133.503H215.099L213.333 159.142C213.25 160.355 212.709 161.492 211.82 162.321C210.93 163.151 209.758 163.611 208.542 163.608H198.91C197.694 163.608 196.524 163.147 195.634 162.319C194.745 161.49 194.204 160.354 194.119 159.142L192.353 133.503Z"
        fill="white"
      />
      <path
        d="M208.542 164.126H198.91C197.566 164.121 196.273 163.61 195.291 162.693C194.308 161.777 193.709 160.523 193.611 159.182L191.845 133.533C191.841 133.465 191.851 133.397 191.874 133.332C191.896 133.268 191.931 133.209 191.977 133.158C192.026 133.107 192.084 133.067 192.149 133.039C192.213 133.011 192.282 132.996 192.353 132.995H215.099C215.168 132.995 215.237 133.009 215.3 133.037C215.364 133.064 215.421 133.104 215.469 133.155C215.516 133.205 215.553 133.265 215.577 133.33C215.6 133.395 215.61 133.464 215.606 133.533L213.84 159.142C213.753 160.489 213.157 161.753 212.174 162.678C211.19 163.603 209.892 164.121 208.542 164.126V164.126ZM192.891 134.01L194.626 159.142C194.703 160.226 195.188 161.241 195.982 161.983C196.777 162.725 197.823 163.139 198.91 163.141H208.542C209.629 163.139 210.675 162.725 211.469 161.983C212.264 161.241 212.748 160.226 212.825 159.142L214.561 134.041L192.891 134.01Z"
        fill="#4D4D4D"
      />
    </svg>
  );
};

export default UserInterfaceSVG;
