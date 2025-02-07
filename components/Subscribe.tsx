const Subscribe = () => (
  <div className="flex max-w-[30rem] flex-col gap-4 tracking-widest">
    <div className="text-center font-mono">
      <strong>subscribe</strong> to our newsletter
    </div>

    <div
      style={{
        clipPath: `polygon(
              0.125em 0.625em, calc(100% - 1em) 0.625em, calc(100% - 0.125em) 1.375em,
              calc(100% - 0.125em) calc(100% - 0.625em), 1em calc(100% - 0.625em), 0.125em calc(100% - 1.375em)
            )`,
      }}
    >
      <iframe
        src="https://embeds.beehiiv.com/355286b8-5542-4f41-8667-491754f878fb?slim=true"
        data-test-id="beehiiv-embed"
        height="52"
        frameBorder="0"
        scrolling="no"
      />
    </div>
  </div>
)

export default Subscribe
