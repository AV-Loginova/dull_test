define(["jquery"], function ($) {
  const CustomWidget = function () {
    const self = this;

    this.callbacks = {
      settings: function () {
        return true;
      },
      init: function () {
        return true;
      },
      bind_actions: function () {
        return true;
      },
      render: async function () {
        return true;
      },
      dpSettings: function () {
        return true;
      },
      advancedSettings: function () {
        return true;
      },
      destroy: function () {
        return true;
      },

      contacts: {
        selected: function () {
          return true;
        },
      },
      leads: {
        selected: function () {
          return true;
        },
      },
      onSave: function () {
        return true;
      },
    };

    return this;
  };

  return CustomWidget;
});
