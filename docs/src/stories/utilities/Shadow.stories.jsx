export default {
  title: 'Utilities/Shadow'
}

export const Small = ({}) => (
  <span class="color-shadow-small p-2">
    .color-shadow-small
  </span>
)

export const SmallExample = ({}) => (
  <div class="Box color-shadow-small" style={{maxWidth: '320px'}}>
    <div class="Box-row">
      <h3 class="m-0">Organization</h3>
    </div>
    <div class="Box-row">
      <p class="mb-0 color-fg-muted">
        Taxidermy live-edge mixtape, keytar tumeric locavore meh selvage deep v letterpress vexillologist lo-fi tousled
        church-key thundercats. Brooklyn bicycle rights tousled, marfa actually.
      </p>
    </div>
    <div class="Box-row">
      <button type="button" name="Create an organization" class="btn btn-primary btn-block">
        Create an organization
      </button>
    </div>
  </div>
)

export const Medium = ({}) => (
  <span class="color-shadow-medium p-2">
    .color-shadow-medium
  </span>
)

export const MediumExample = ({}) => (
  <a class="d-block color-shadow-medium px-3 pt-4 pb-6 position-relative rounded-1 overflow-hidden no-underline" href="#" style={{maxWidth: '320px'}}>
    <h3 class="color-fg-default">Serverless architecture</h3>
    <p class="color-fg-muted">
      Build powerful, event-driven, serverless architectures with these open-source libraries and frameworks.
    </p>
    <ul class="position-absolute bottom-0 pb-3 text-small color-fg-muted list-style-none ">
      <li class="d-inline-block mr-1">
        <svg class="octicon octicon-repo mr-1" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg>
        12 Repositories
      </li>
      <li class="d-inline-block">
        <svg class="octicon octicon-code mr-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"></path></svg>
        5 Languages
      </li>
    </ul>
  </a>
)

export const Large = ({}) => (
  <span class="color-shadow-large p-2">
    .color-shadow-large
  </span>
)

export const LargeExample = ({}) => (
  <span class="color-shadow-large rounded-2 d-inline-block overflow-hidden">
    <img src="https://github.com/nasa.png" class="img-responsive" alt="NASA is on GitHub" style={{maxWidth: '320px'}} />
  </span>
)

export const ExtraLarge = ({}) => (
  <span class="color-shadow-extra-large p-2">
    .color-shadow-extra-large
  </span>
)

export const None = ({}) => (
  <span class="color-shadow-large box-shadow-none p-2">
    .box-shadow-none
  </span>
)

