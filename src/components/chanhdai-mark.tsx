export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 772 524"
      width="100%"
      height="100%"
      fill="currentColor"
      {...props}
    >
      {/* G shape */}
      <rect x="172" y="103" width="185" height="56" />
      <rect x="115" y="160" width="56" height="183" />
      <rect x="170" y="342" width="189" height="56" />
      <rect x="248" y="222" width="111" height="64" />
      <rect x="299" y="285" width="60" height="64" />

      {/* S shape */}
      <rect x="465" y="103" width="199" height="56" />
      <rect x="410" y="159" width="56" height="64" />
      <rect x="466" y="223" width="141" height="64" />
      <rect x="606" y="287" width="56" height="56" />
      <rect x="410" y="343" width="197" height="53" />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 772 524" fill="${color}">
    <rect x="172" y="103" width="185" height="56"/>
    <rect x="115" y="160" width="56" height="183"/>
    <rect x="170" y="342" width="189" height="56"/>
    <rect x="248" y="222" width="111" height="64"/>
    <rect x="299" y="285" width="60" height="64"/>
    <rect x="465" y="103" width="199" height="56"/>
    <rect x="410" y="159" width="56" height="64"/>
    <rect x="466" y="223" width="141" height="64"/>
    <rect x="606" y="287" width="56" height="56"/>
    <rect x="410" y="343" width="197" height="53"/>
  </svg>`;
}