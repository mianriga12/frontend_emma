import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={129.92}
      height={121.92}
      viewBox="0 0 129.92 121.92"
      {...props}
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="prefix__a">
          <path d="M143.422 355.719c4.344 29.109 18.797 96.008 62.664 131.238 37.715 30.285 95.812 36.645 137.914 36.645 7.398 0 13.406-.192 17.531-.329 40.801 50.43 98.235 80.055 158.239 81.508 4.472.657 9.062.985 13.652.985 31.582 0 66.445-15.938 100.82-46.094 13.223-11.598 26.766-25.961 35.43-36.609 14.422 9.359 40.957 22.714 72.965 24.089a135.626 135.626 0 0024.758 2.297c18.789 0 34.429-3.961 45.429-7.961-1.508 24.086-14.199 70.778-83.437 107.938l-.114.062-.109.063c-16.316 9.211-35.879 13.883-58.137 13.883-54.683 0-107.511-28.11-108.031-28.391l-12.601-6.813-4.497 13.602c-.277.828-28.488 82.426-135.105 82.969-101.121-.371-131.703-77.738-132.941-80.992l-3.485-9.317-9.804 1.684c-.114.015-11.5 1.941-28.692 1.941-44.598 0-124.816-12.668-162.094-97.265-15.617-59.969-12.23-107.493 10.07-141.266 17.895-27.09 44.348-39.004 59.575-43.867m10.277-14.942v.024-.024zm0 .024s-139.789 19.64-91.289 204c40.063 92.137 126.996 105.316 173.461 105.316 18.617 0 30.738-2.117 30.738-2.117s32.938 88.391 144.137 88.801c116.582-.594 146.543-91.203 146.543-91.203s55.184 29.836 113.738 29.836c21.77 0 44.004-4.121 64.036-15.434 105.55-56.656 88.886-136.801 88.886-136.801s-22.511 14.25-56.554 14.25a122.96 122.96 0 01-23.395-2.25c-43.918-1.566-76.016-27.894-76.797-28.781-.379 1.496-64.031 87.348-133.781 87.348a82.57 82.57 0 01-12.621-.965c-99.656-2.004-152.324-81.129-153.598-81.602-.121-.043-.465-.062-1.015-.062-2.778 0-10.86.461-22.188.461-32.809 0-92.883-3.868-130.402-34-52.477-42.141-59.899-136.797-59.899-136.797zm513.492 165.594c-.007 0-.003.011.012.023 0-.008 0-.016-.004-.016-.004-.007-.008-.007-.008-.007z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="prefix__b">
          <path d="M589.508 179.465c59.851.004 119.746 49.992 120.336 50.492l6.332 5.309 7.238-3.969c.195-.109 20.164-10.879 48.516-10.875 15.133 0 30.004 3.043 44.207 9.035l.656.273.684.2c29.246 8.425 56.878 26.605 75.82 49.886 23.68 29.102 34.023 64.637 30.75 105.539-3.563 40.833-28.527 115.247-99.5 135.141-17.879 5.012-36.242 7.555-54.582 7.555-54.008 0-91.387-22.098-91.735-22.305l-9.066-5.516-6.578 8.333c-.637.8-64.348 80.417-132.836 80.417-4.059 0-8.109-.289-12.039-.859l-1.988-.285-1.981.379c-3.683.707-7.66 1.066-11.812 1.066-44.985 0-107.942-42.863-123.914-76.082l-3.825-7.949-8.726 1.277c-14.649 2.141-28.563 3.227-41.348 3.227-51.121 0-74.441-16.871-88.375-26.953-3.39-2.449-6.316-4.567-9.207-6.145-24.625-13.383-44.398-39.679-54.254-72.144-10.578-34.856-9.152-71.711-4.765-86.746 7.129-24.403 49.394-116.45 125.992-120.989l.824-.047.805-.16c8.476-1.683 17.047-2.539 25.48-2.535 70.778.008 118.231 59.914 118.688 60.5l10.883 14.082 8.976-15.367c.16-.281 16.777-28.363 46.82-48.953 17.996-12.328 46.196-21.664 73.59-24.356 3.231-.316 6.574-.476 9.934-.476m0-12c-3.699 0-7.403.172-11.106.535-26.172 2.57-57.457 11.5-79.203 26.398-32.613 22.348-50.398 52.801-50.398 52.801s-50.356-65.152-128.184-65.164c-8.929-.004-18.203.856-27.816 2.766C211.965 189.586 165.27 282.656 156 314.402c-5.297 18.141-6.105 57.672 4.801 93.598 10.125 33.355 30.617 63.227 60 79.199 12.5 6.801 36.453 34.555 103.316 34.555 12.735 0 27.016-1.004 43.086-3.356 17.379 36.157 83.172 82.883 134.727 82.883 4.832 0 9.535-.414 14.074-1.281 4.598.664 9.187.977 13.746.977C604.844 600.977 672 516 672 516s39.574 24.051 97.965 24.051c17.734 0 37.199-2.215 57.824-7.996 74.121-20.785 103.883-96.032 108.207-145.657 7.75-96.773-58.387-151.64-115.199-168-17.586-7.418-34.262-9.972-48.867-9.972-32.164-.008-54.332 12.375-54.332 12.375s-62.953-53.332-128.09-53.336z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="prefix__c">
          <path d="M655.121 719.945a5.997 5.997 0 00-8.391 1.25 5.998 5.998 0 001.25 8.391c.02.012 27.325 20.187 26.418 60.016l11.997.269c1.039-45.519-29.942-68.945-31.25-69.914l-.024-.012m31.277 69.481l-12 .176C674.996 830.039 648 852 648 852c-2.574 2.09-2.957 5.867-.867 8.441a5.997 5.997 0 008.437.868c1.289-1.047 31.5-26.157 30.828-71.883m0 0l-12 .176 12-.176zm-12 .176l11.997.269-11.997-.269z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="prefix__d">
          <path d="M597.602 660a6 6 0 00-6.004-5.996 5.995 5.995 0 00-5.996 5.996v93.602c-1.93.472-29.782 7.773-31.2 36l11.981.601c.969-19.219 19.836-24.402 21.894-24.91l9.325-2.133V660m-31.227 128.84l-11.973.762c2.161 34.117 31.094 35.906 33.45 35.992 2.199.179 29.625 2.008 38.546-23.996C637.281 778.773 612 760.801 612 760.801a6 6 0 00-8.367 1.414 5.995 5.995 0 001.414 8.363c.168.125 16.988 12.289 10.519 25.86l-.293.617-.222.652c-5.875 17.121-23.903 16.113-25.836 15.953l-.285-.047-.625-.011c-3.407-.125-20.481-1.926-21.93-24.762m0 0l-11.973.762 11.973-.762zm-11.973.762l11.981.601-11.981-.601z" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="prefix__e">
          <path d="M556.266 751.582c2.754-1.84 3.507-5.562 1.672-8.32a6 6 0 00-8.317-1.676c-1.476 1.004-28.574 19.894-24.019 50.414-2.664 25.23 21.601 48 21.601 48a5.992 5.992 0 008.477-.27 6 6 0 00-.266-8.48c-.203-.187-19.863-19.215-17.879-37.988l.16-1.524-.226-1.508c-3.461-23.199 17.918-38.054 18.773-38.636l.024-.012" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="prefix__f">
          <path d="M524.449 858.219a6.008 6.008 0 008.489-.117 6.003 6.003 0 00-.122-8.485c-.015-.015-26.398-25.703-24.015-60.015 2.637-38.043 24-57.602 24-57.602a5.999 5.999 0 00.371-8.477 5.99 5.99 0 00-8.473-.371c-1.019.93-24.929 23.282-27.871 65.618-2.734 39.41 26.36 68.218 27.606 69.433l.015.016" />
        </clipPath>
        <clipPath clipPathUnits="userSpaceOnUse" id="prefix__g">
          <path d="M625.27 831.363a5.999 5.999 0 108.312 8.653c.871-.84 26.996-26.356 24.02-52.817-.207-23.304-23.313-47.289-23.985-47.984a6.01 6.01 0 00-8.488-.129 6.006 6.006 0 00-.125 8.488c5.68 5.856 20.461 24.414 20.598 39.731l.003.621.071.617c1.922 17.066-14.078 36.691-20.391 42.805l-.015.015" />
        </clipPath>
      </defs>
      <g
        clipPath="url(#prefix__a)"
        transform="matrix(.13333 0 0 -.13333 0 121.92)"
      >
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAF9CAYAAAAne07XAAAABHNCSVQICAgIfAhkiAAABaFJREFUeJzt17ENAkEQBME9RDgkRkQk9vkcIeA0vPRU2WuM19o1M3sAIHI7ewAA1yIsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASN0/HazX8YsdAH9nPx9nT/gKHwsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJAas3MPnsEANfhYwEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkHoD04QH+U4Xs3gAAAAASUVORK5CYII="
          transform="matrix(974.4 0 0 -914.4 0 914.4)"
          preserveAspectRatio="none"
          height={1}
          width={1}
        />
      </g>
      <g
        clipPath="url(#prefix__b)"
        transform="matrix(.13333 0 0 -.13333 0 121.92)"
      >
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAF9CAYAAAAne07XAAAABHNCSVQICAgIfAhkiAAABaBJREFUeJzt17ENAkEQBME9RDgkRkQk9vkcCWA2OulVZa41XmvXzOwBgMjj9AAA7kVYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQep4e8G/rc52eAHBL+/36efexAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACk1szs0yMAuA8fCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWA1BeVSQf5cguPhAAAAABJRU5ErkJggg=="
          transform="matrix(974.4 0 0 -914.4 0 914.4)"
          preserveAspectRatio="none"
          height={1}
          width={1}
        />
      </g>
      <g
        clipPath="url(#prefix__c)"
        transform="matrix(.13333 0 0 -.13333 0 121.92)"
      >
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAF9CAYAAAAne07XAAAABHNCSVQICAgIfAhkiAAABaFJREFUeJzt18EJAkEURME/YjgmZkQmtvmMGXiQBwNLVQR9e/SamT0AEHmcHgDAvQgLAClhASAlLACkhAWAlLAAkBIWAFLP0wOAc9bnOj3hp/1+nZ7AHzwWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgNSamX16BAD34bEAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASH0Bpk0H+R43y44AAAAASUVORK5CYII="
          transform="matrix(974.4 0 0 -914.4 0 914.4)"
          preserveAspectRatio="none"
          height={1}
          width={1}
        />
      </g>
      <g
        clipPath="url(#prefix__d)"
        transform="matrix(.13333 0 0 -.13333 0 121.92)"
      >
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAF9CAYAAAAne07XAAAABHNCSVQICAgIfAhkiAAABZ9JREFUeJzt10ENQkEUBMG3BDkYQxHG8LOIoJMlnyoFc+vMmpk9ABC5nR4AwLUICwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUvfTA+Cfrdf79ISv7Ofj9AR+kMcCQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQWjOzT48A4Do8FgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwCpDza0B/nqfxPIAAAAAElFTkSuQmCC"
          transform="matrix(974.4 0 0 -914.4 0 914.4)"
          preserveAspectRatio="none"
          height={1}
          width={1}
        />
      </g>
      <g
        clipPath="url(#prefix__e)"
        transform="matrix(.13333 0 0 -.13333 0 121.92)"
      >
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAF9CAYAAAAne07XAAAABHNCSVQICAgIfAhkiAAABaBJREFUeJzt10ENAkEQRcEeghyMoQhj62cwwPElEzZVBvrfXnrNzB4AiDxODwDgXoQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAqefpAfDP1uc6en+/X0fvwy8+FgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYDUmpl9egQA9+FjASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQ+gIdPgf5R8wgkgAAAABJRU5ErkJggg=="
          transform="matrix(974.4 0 0 -914.4 0 914.4)"
          preserveAspectRatio="none"
          height={1}
          width={1}
        />
      </g>
      <g
        clipPath="url(#prefix__f)"
        transform="matrix(.13333 0 0 -.13333 0 121.92)"
      >
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAF9CAYAAAAne07XAAAABHNCSVQICAgIfAhkiAAABaBJREFUeJzt19EJAkEUBMG3YjgmZkQmdvmsGQhCw8JRFcH8NbNmZg8ARB6nBwBwL8ICQEpYAEgJCwApYQEgJSwApIQFgNTz9AA4aX2u0xN+2u/X6QnwN48FgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASC1ZmafHgHAfXgsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUl8L5wf53zBSnAAAAABJRU5ErkJggg=="
          transform="matrix(974.4 0 0 -914.4 0 914.4)"
          preserveAspectRatio="none"
          height={1}
          width={1}
        />
      </g>
      <g
        clipPath="url(#prefix__g)"
        transform="matrix(.13333 0 0 -.13333 0 121.92)"
      >
        <image
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZYAAAF9CAYAAAAne07XAAAABHNCSVQICAgIfAhkiAAABaBJREFUeJzt10ENAkEURME/BDkYQxHG8DM44PQ2k2yqFPTtpdfM7AGAyOP0AADuRVgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQep4eAFxnfb6nJ/y136/TE7iAxwJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJBaM7NPjwDgPjwWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAKWEBICUsAKSEBYCUsACQEhYAUsICQEpYAEgJCwApYQEgJSwApIQFgJSwAJASFgBSwgJASlgASAkLAClhASAlLACkhAWAlLAAkBIWAFLCAkBKWABICQsAqR+lMwf5pwuTjgAAAABJRU5ErkJggg=="
          transform="matrix(974.4 0 0 -914.4 0 914.4)"
          preserveAspectRatio="none"
          height={1}
          width={1}
        />
      </g>
    </svg>
  )
}

export default SvgComponent
