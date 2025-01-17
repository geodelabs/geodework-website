const Subscribe = () => (
  <div className="flex max-w-[30rem] flex-col gap-4 tracking-widest">
    <div className="text-center font-mono">
      <strong>subscribe</strong> to our newsletter
    </div>
    <form className="flex items-center gap-2 max-sm:flex-col">
      <input
        type="email"
        placeholder="email"
        className="w-full rounded-none bg-primary-light px-4 py-1 text-body placeholder:text-body/80"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 0.5rem 100%, 0 calc(100% - 0.375rem)",
        }}
      />
      <button
        // TODO: Make and use ui/button
        type="submit"
        className="bg-accent px-4 py-1 !text-primary hover:bg-accent-dark"
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 0.5rem) 0, 100% 0.375rem, 100% 100%, 0 100%)",
        }}
      >
        subscribe
      </button>
    </form>
  </div>
)

export default Subscribe
