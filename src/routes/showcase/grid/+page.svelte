<h1>Bootstrap Grid</h1>

<div class="row">
  <div class="col-md-6">
    <div class="box" />
  </div>
  <div class="col-md-6">
    <div class="box" />
  </div>
  <div class="col-md-6">
    <div class="box" />
  </div>
  <div class="col-md-6">
    <div class="box" />
  </div>

  <div class="col-md-12">
    <div class="box" />
  </div>
  <div class="col-md-12">
    <div class="box" />
  </div>
</div>

<h2>Auto-layout columns</h2>
<div class="row">
  <div class="col"><div class="box"></div></div>
  <div class="col"><div class="box"></div></div>
</div>

<h2>Offset</h2>
<div class="row">
  <div class="col-sm-8">
    <div class="box"></div>
  </div>
  <div class="col-sm-6 offset-md-4">
    <div class="box"></div>
  </div>
  <div class="col-sm-6">
    <div class="box"></div>
  </div>
</div>

<style lang="scss">
  .box {
    min-height: 100px;
    background: var(--bg-control-300);
    margin-bottom: 1.5rem;
  }
</style>
