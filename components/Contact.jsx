import React from "react";

import Form from "./Form";

const Contact = () => {
  return (
    <section className="About d-flex" style={{ padding: "0 0 47.5px 0" }}>
      <article className="container">
        <header style={{ padding: "47.5px 0" }} className="row text-center">
          <div className="col-12">
            <h2 className="subtitle">Contáctanos</h2>
          </div>
        </header>
        <div className="row">
          <div className="col-12 col-md-6">
            <Form />
          </div>
          <div className="col-12 col-md-6 mt-5 mt-md-0">
            <div
              style={{ height: "100%", width: "100%" }}
              className="map-wrapper"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7185.627390622992!2d-80.1925365755825!3d25.776719000859387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69fdcd6168d%3A0x9c72e450f05eee60!2sBubba%20Gump%20Shrimp%20Co.!5e0!3m2!1ses-419!2sar!4v1609374121974!5m2!1ses-419!2sar"
                frameBorder="0"
                style={{ width: "100%", height: "100%" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;
