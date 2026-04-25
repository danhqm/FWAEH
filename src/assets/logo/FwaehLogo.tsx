import React from 'react';

interface FwaehLogoProps {
  /** Width of the logo (height auto-scales) */
  width?: number | string;
  /** Fill color of the logo */
  color?: string;
  /** Additional CSS class */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Accessible label */
  ariaLabel?: string;
}

/**
 * FWAEH Logo SVG Component
 * * Usage:
 * <FwaehLogo width={400} color="#ffffff" />
 */
export const FwaehLogo: React.FC<FwaehLogoProps> = ({
  width = 798,
  color = 'currentColor',
  className,
  style,
  ariaLabel = 'FWAEH Logo',
}) => {
  const aspectRatio = 196 / 798;
  const height = typeof width === 'number' ? width * aspectRatio : undefined;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 798 196"
      width={width}
      height={height}
      className={className}
      style={style}
      aria-label={ariaLabel}
      role="img"
    >
      <defs>
        <mask id="hole-mask">
          {/* The white rectangle keeps the entire logo visible */}
          <rect width="100%" height="100%" fill="white" />
          
          {/* The black polygon punches the transparent hole in the 'A'. 
            Tweak these 3 (X,Y) coordinate pairs to adjust the triangle's shape/position:
            Point 1: Top peak
            Point 2: Bottom left
            Point 3: Bottom right
          */}
          <polygon points="360,50 335,85 380,85" fill="black" />
        </mask>
      </defs>

      {/* We apply the mask to a group containing your original paths */}
      <g mask="url(#hole-mask)">
        {/* Path 1: F, W, and LEFT side of A */}
        <path
          d="M 4 154 L 9 164 L 16 167 L 21 167 L 29 161 L 33 153 L 33 146 L 44 129 L 49 124 L 105 114 L 110 115 L 125 100 L 125 96 L 120 91 L 120 86 L 105 86 L 80 90 L 72 89 L 72 85 L 76 80 L 79 72 L 84 67 L 88 56 L 99 51 L 120 46 L 153 42 L 168 42 L 172 40 L 173 42 L 156 69 L 130 126 L 135 150 L 138 155 L 152 164 L 165 163 L 177 159 L 202 145 L 231 123 L 235 132 L 240 152 L 244 160 L 252 167 L 256 165 L 265 165 L 287 150 L 306 130 L 322 109 L 349 68 L 362 51 L 362 29 L 356 19 L 349 14 L 332 35 L 295 92 L 277 111 L 265 119 L 261 118 L 262 104 L 285 52 L 285 49 L 279 37 L 269 29 L 251 46 L 213 91 L 197 107 L 180 120 L 169 126 L 167 125 L 167 123 L 178 97 L 213 36 L 207 30 L 203 22 L 198 18 L 188 23 L 177 36 L 176 29 L 163 14 L 144 13 L 127 15 L 94 24 L 88 24 L 83 27 L 43 38 L 38 43 L 37 52 L 35 54 L 41 66 L 48 69 L 47 75 L 36 91 L 29 87 L 20 89 L 9 98 L 7 102 L 7 113 L 9 119 L 14 124 L 14 126 L 6 141 Z"
          fill={color}
        />
        {/* Path 2: RIGHT side of A, and E */}
        <path
          d="M 603 27 L 597 23 L 592 16 L 588 18 L 583 16 L 535 23 L 510 30 L 493 33 L 483 38 L 478 44 L 477 62 L 481 74 L 472 87 L 468 91 L 464 92 L 460 90 L 460 82 L 464 65 L 465 53 L 468 46 L 472 25 L 466 21 L 455 18 L 451 15 L 433 31 L 417 41 L 407 41 L 403 43 L 373 75 L 373 77 L 332 123 L 320 138 L 317 144 L 314 146 L 314 160 L 319 166 L 327 166 L 341 159 L 345 155 L 348 148 L 356 137 L 364 130 L 365 126 L 369 124 L 375 117 L 375 127 L 377 133 L 388 134 L 410 129 L 421 130 L 419 137 L 415 141 L 400 146 L 405 155 L 403 162 L 409 167 L 417 167 L 428 163 L 442 153 L 445 154 L 445 157 L 449 162 L 464 167 L 485 167 L 499 164 L 508 165 L 540 159 L 553 152 L 563 141 L 561 139 L 561 134 L 555 130 L 552 124 L 534 127 L 526 130 L 513 130 L 505 132 L 487 133 L 478 132 L 477 130 L 495 107 L 534 107 L 543 104 L 563 93 L 564 85 L 560 84 L 557 81 L 552 72 L 514 73 L 513 69 L 515 63 L 523 60 L 534 58 L 537 59 L 556 52 L 573 50 L 584 47 L 595 41 L 601 35 Z"
          fill={color}
        />
        {/* Path 3: H */}
        <path
          d="M 724 12 L 716 15 L 708 25 L 705 32 L 704 42 L 698 47 L 697 56 L 685 86 L 671 92 L 638 99 L 633 99 L 631 97 L 631 94 L 642 70 L 649 49 L 640 31 L 637 19 L 631 21 L 624 28 L 615 45 L 604 79 L 600 82 L 598 92 L 593 101 L 589 105 L 582 122 L 578 126 L 577 131 L 569 143 L 571 155 L 569 159 L 575 164 L 575 166 L 579 168 L 586 168 L 601 162 L 601 159 L 606 156 L 617 140 L 631 133 L 657 124 L 664 125 L 656 145 L 658 154 L 663 163 L 669 165 L 684 159 L 692 151 L 696 142 L 695 137 L 697 129 L 703 123 L 711 111 L 729 72 L 734 44 L 730 39 Z"
          fill={color}
        />
      </g>
    </svg>
  );
};

export default FwaehLogo;