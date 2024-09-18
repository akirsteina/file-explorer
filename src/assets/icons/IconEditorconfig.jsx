import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const IconEditorconfig = ({ size = "", ...props }) => (
  <SvgIcon {...props} style={{ fontSize: size }}>
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m8.709 18.351a1.267 1.267 0 0 0 .532-1.379c-.549.235-.523.777-.532 1.379z"
        fill="#e3e3f8"
      />
      <path
        d="m14.924 19.852a.871.871 0 0 0 .62-1.135 1.43 1.43 0 0 0 -.62 1.135z"
        fill="#e3e3f8"
      />
      <g fill="#fdfdfd">
        <path d="m2.713 27.079a1.538 1.538 0 0 0 .524 1.353c1.414.794 6.372.175 8.056-.2a14.994 14.994 0 0 0 2.426-1.213 22.643 22.643 0 0 0 4.713-2.557c1.082-.794 2.8-3.029 2.985-4.364l-1.475-.332c-.035 1.5-.375 1.842-1.711 2.191a10.662 10.662 0 0 1 -3.57.14 3.362 3.362 0 0 1 -2.313-1.562c-1.065-1.414.236-2.4-1.449-2.5-1.772 2.173-4.9.611-6.267.393a30.066 30.066 0 0 0 -1.938 7.6 2.748 2.748 0 0 1 2.138.323c2.688 1.039.34 1.955-.733 1.685-.731-.172-.958-.652-1.386-.957z" />
        <path d="m6.231 14.537a11.539 11.539 0 0 1 2.985 1.126c1.51.751 1.781.646 1.92 1.693.017.192-.017.3.532.471.925.288-.532-.227 1.946-.218a16.64 16.64 0 0 1 5.945 1.291c.454.288.367.655 1.9.611a18.767 18.767 0 0 0 -1.2-6.162c-.864-2.007-2.007-2.313-4.338-3.064-1.362-.436-5.359-.916-6.6-.148-1.161.724-1.379 1.589-2.461 3.107a5.366 5.366 0 0 0 -.629 1.293z" />
        <path d="m15.84 18.246c.873.358-.044 2.671-1.257 2.112-.393-1.108.541-1.737.794-2.234a8.51 8.51 0 0 0 -2.461-.148c-.576.218-.707 1.449-.41 2.025 1.4 2.741 7.567 2.156 6.913.026-.262-.864-.506-1-1.388-1.3a6.885 6.885 0 0 0 -2.191-.481z" />
        <path d="m4.869 17.941c.7.672 2.278.777 3.3.829.131-1.353.244-2.37 1.331-2.287a1.6 1.6 0 0 1 -.305 2.13 1.386 1.386 0 0 0 1.362-1.763 14.542 14.542 0 0 0 -4.46-1.894 9.506 9.506 0 0 0 -1.228 2.985z" />
      </g>
      <path
        d="m3.228 26.581c.576-.052 2.077.384 2.2.873-.934.114-2.121.026-2.2-.873zm-.515.5c.428.305.655.786 1.388.96 1.074.271 3.421-.646.733-1.685a2.748 2.748 0 0 0 -2.134-.324 30.066 30.066 0 0 1 1.938-7.6c1.37.218 4.495 1.781 6.267-.393 1.685.1.384 1.082 1.449 2.5a3.362 3.362 0 0 0 2.308 1.561 10.662 10.662 0 0 0 3.57-.14c1.335-.349 1.676-.69 1.711-2.191l1.475.332c-.183 1.335-1.9 3.57-2.985 4.364a22.643 22.643 0 0 1 -4.713 2.557 14.994 14.994 0 0 1 -2.426 1.213c-1.685.375-6.642 1-8.056.2a1.538 1.538 0 0 1 -.525-1.356zm12.211-7.227a1.43 1.43 0 0 1 .62-1.135.871.871 0 0 1 -.62 1.133zm.916-1.606a6.885 6.885 0 0 1 2.191.48c.882.3 1.126.436 1.388 1.3.655 2.13-5.516 2.714-6.913-.026-.3-.576-.166-1.807.41-2.025a8.51 8.51 0 0 1 2.461.148c-.253.5-1.187 1.126-.794 2.234 1.217.558 2.13-1.759 1.257-2.113zm-7.131.1c.009-.6-.017-1.143.532-1.379a1.267 1.267 0 0 1 -.532 1.382zm-3.84-.41a9.506 9.506 0 0 1 1.222-2.985 14.542 14.542 0 0 1 4.46 1.894 1.386 1.386 0 0 1 -1.361 1.766 1.6 1.6 0 0 0 .305-2.13c-1.082-.079-1.2.934-1.327 2.287-1.021-.053-2.601-.157-3.299-.829zm-.869-.696c-.323-.89-.323-2.278 1.047-2.392l-.7 1.946c-.185.42-.185.324-.347.446zm2.234-2.706a5.366 5.366 0 0 1 .628-1.292c1.082-1.519 1.3-2.383 2.461-3.107 1.239-.768 5.237-.288 6.6.148 2.33.751 3.474 1.056 4.338 3.064a18.767 18.767 0 0 1 1.2 6.162c-1.536.044-1.449-.323-1.9-.611a16.64 16.64 0 0 0 -5.944-1.292c-2.479-.009-1.021.506-1.946.218-.55-.175-.515-.279-.532-.471-.14-1.047-.41-.943-1.92-1.693a11.539 11.539 0 0 0 -2.988-1.125zm15.449-.428c-.166-.55.14-.515.672-.89a9.021 9.021 0 0 1 .925-.655c1.405-.786 4.024-.916 5.141.017a2.479 2.479 0 0 1 1.079 2.07 5.838 5.838 0 0 1 -2.618 3.832 5.213 5.213 0 0 1 -4.783 1.2c-.157-.384-.035-2.819-.218-3.718-.166-.8-.079-.89.384-1.37 1.362-1.414 4.312-2.444 5.988-1.231.707.524.506.724.873 1.126.454-.489-.393-2.13-3.517-2.025-2.123.065-3.039 1.723-3.929 1.645zm-12.712-4.965a8.094 8.094 0 0 1 2.278-4.6c1.351-1.043 2.767-2.034 4.845-.856.515.288.489.436.541 1.152a3.312 3.312 0 0 1 -.192 1.5c-1.379 4.451-2.531 1.894-6.948 2.95a6.374 6.374 0 0 1 2.121-3.413c1.2-1.161 2.06-1.911 3.858-1.667a1.842 1.842 0 0 1 -.052 2.322c-.8 1.292-1 1.213-.882 2.095.628-.157.82-.768 1.108-1.379 1.754-3.666-.794-4.111-2.357-3.439a10.372 10.372 0 0 0 -3.525 3.746c-.122.244-.253.559-.367.829zm6.913.183c.183-1.091 1.266-1.362 1.266-4.726 0-1.449-1.781-2.749-4.111-1.781-2 .82-2.3 1.449-3.369 3.055-1 1.519-.969 3.186-1.833 4.591-.253.4-.48.541-.759.943-.2.3-.349.672-.55 1.021a12.94 12.94 0 0 0 -1.161 1.971c-1.047.026-1.929.044-2.034 1.126-.14 1.484.559 1.85.559 2.409-.009.6-2.453 6.677-1.772 10.3.192 1 .847 1 1.894 1.126a17.93 17.93 0 0 0 8.056-.707l4.1-1.964a18.85 18.85 0 0 0 3.561-2.5 12.383 12.383 0 0 0 1.309-1.719 3.213 3.213 0 0 0 .8-2.208 8.473 8.473 0 0 1 2.985 1c-.061.6-.358.314-.358.855a1.355 1.355 0 0 0 1.047-.89c-.358-.524-.733-.436-1.248-.855a8.212 8.212 0 0 1 1.719-.707c1.222-.506 3.308-2.042 3.823-3.439a4.449 4.449 0 0 0 -.559-3.736 5.444 5.444 0 0 0 -3.648-1.161c-1.58 0-3.212 1.135-4.486 1.623-.489-.428-.524-.916-.882-1.388a12.281 12.281 0 0 0 -4.349-2.239z"
        fill="#020202"
      />
      <path
        d="m21.68 14.109c.89.079 1.807-1.58 3.928-1.65 3.125-.1 3.971 1.536 3.517 2.025-.367-.4-.166-.6-.873-1.126-1.676-1.213-4.626-.183-5.988 1.231-.463.48-.55.567-.384 1.37.183.9.061 3.334.218 3.718a5.213 5.213 0 0 0 4.783-1.2 5.838 5.838 0 0 0 2.619-3.827 2.479 2.479 0 0 0 -1.082-2.069c-1.117-.934-3.736-.8-5.141-.017a9.021 9.021 0 0 0 -.925.655c-.533.375-.838.34-.672.89z"
        fill="#fdf2f2"
      />
      <path
        d="m8.971 9.143.429-.76c.113-.271.244-.585.367-.829a10.372 10.372 0 0 1 3.525-3.744c1.562-.672 4.111-.227 2.357 3.439-.288.611-.48 1.222-1.108 1.379-.122-.882.079-.8.882-2.095a1.842 1.842 0 0 0 .052-2.322c-1.8-.244-2.662.506-3.858 1.667a6.374 6.374 0 0 0 -2.117 3.413c4.416-1.056 5.569 1.5 6.948-2.95a3.312 3.312 0 0 0 .192-1.5c-.052-.716-.026-.864-.541-1.152-2.077-1.178-3.491-.192-4.844.855a8.094 8.094 0 0 0 -2.284 4.599z"
        fill="#fef3f3"
      />
      <path
        d="m4 17.242c.166-.122.166-.026.349-.445l.7-1.946c-1.376.113-1.376 1.501-1.049 2.391z"
        fill="#efefef"
      />
      <path
        d="m5.428 27.454c-.122-.489-1.623-.925-2.2-.873.079.899 1.266.987 2.2.873z"
        fill="#faf1f1"
      />
    </svg>
  </SvgIcon>
);

export default IconEditorconfig;
