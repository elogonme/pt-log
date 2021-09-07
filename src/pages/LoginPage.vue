<template>
  <q-page
    class="flex justify-center"
    padding
  >
    <div>

      <q-card bordered  flat class="q-mt-md q-py-md q-px-lg">
        <q-card-section>
          <div class="text-center text-h5">
            <div class="flex justify-between q-pr-xl items-center">
              <q-icon size="md" name="img:img/logo.png" dir=""/>
              Login
            </div>

          </div>
          <q-input
            label="email"
            placeholder="email@example.com"
            type="email"
          />
          <q-input
            label="password"
            type="password"
          />
          <div class="q-mt-md">
            <q-btn flat bordered class="q-ma-xs" color="primary">login</q-btn>
            <q-btn flat class="q-ma-xs">sign up</q-btn>
          </div>

        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
	// name: 'PageName',
}
</script>
