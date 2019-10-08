
import React, { Component } from "react";
import { Table, Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card";

import Button from "components/CustomButton/CustomButton";

class Icons extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8} mdOffset={2}>
              <Card
                hCenter
                title="..."
                category="....."
                ctTableResponsive
                ctTableFullWidth
                ctTableUpgrade
                content={
                  <Table>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">.....</th>
                        <th className="text-center">....</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Components</td>
                        <td>30</td>
                        <td>60</td>
                      </tr>
                      <tr>
                        <td>Plugins</td>
                        <td>3</td>
                        <td>13</td>
                      </tr>
                      <tr>
                        <td>Example Pages</td>
                        <td>7</td>
                        <td>24</td>
                      </tr>
                      <tr>
                        <td>Login/Register/Lock Pages</td>
                        <td>
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td>
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td>
                          <i className="fa fa-times text-danger" />
                        </td>
                        <td>
                          <i className="fa fa-check text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td>Free</td>
                        <td>.....</td>
                      </tr>
                      <tr>
                        <td />
                        <td>
                          <Button
                            href="#"
                            round
                            fill
                            disabled
                            bsStyle="default"
                          >
                            Current Version
                          </Button>
                        </td>
                        <td>
                          <Button
                            target="_blank"
                            href="www.quantseed.org"
                            round
                            fill
                            bsStyle="info"
                          >
                            Upgrade to QuantSeed
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Icons;
