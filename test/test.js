var expect = chai.expect;

describe("extra attributes", function () {
  it("should set data-view-cid", function () {
    var view = new Handlebones.View();
    expect(view.el.getAttribute("data-view-cid")).to.match(/^view[\d]+$/);
  });

  it("should not error with no name attr", function () {
    var view = new Handlebones.View();
    expect(view.el.getAttribute("data-view-name")).to.be.null;
  });

  it("should set data-view-name attribute", function () {
    var view = new (Handlebones.View.extend({
      name: "test"
    }));
    expect(view.el.getAttribute("data-view-name")).to.equal("test");
  });

  it("setElement will re-add data-view-name and data-view-cid", function () {
    var view = new (Handlebones.View.extend({
      name: "test"
    }));
    view.setElement(document.createElement("DIV"));
    expect(view.el.getAttribute("data-view-name")).to.equal("test");
    expect(view.el.getAttribute("data-view-cid")).to.match(/^view[\d]+$/);
  });
});

describe("template, render & context", function () {
  it("should not error with no template", function () {
    var view = new Handlebones.View();
    view.render();
    expect(view.el.innerHTML).to.equal("");
  });

  it("should render a template", function () {
    var view = new (Handlebones.View.extend({
      template: Handlebars.compile("test")
    }));
    view.render();
    expect(view.el.innerHTML).to.equal("test");
  });

  it("should render a template with context", function () {
    var view = new (Handlebones.View.extend({
      template: Handlebars.compile("{{key}}"),
      context: function () {
        return {
          key: "value"
        };
      }
    }));
    view.render();
    expect(view.el.innerHTML).to.equal("value");
  });
});

describe("ready & appendTo", function () {

});

describe("addChild & removeChild", function () {

});
