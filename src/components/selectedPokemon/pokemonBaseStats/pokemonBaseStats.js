import React from "react";
import { Progress, WhiteSpace} from 'antd-mobile';
import { Row, Col } from 'antd';


const PokemonBaseStats = ({stats}) => {

        const statNames= ["HP","Attack","Defense","Sp. Atk", "Sp. Def", "Speed" ];

            return (
                <>{
                    stats.map((stat,i) => 
                        <Row>
                              <Col span={4} style={{margin: 'auto', textAlign: 'left'}}>
                                {statNames[i]}
                              </Col>
                              <Col span={4} style={{margin: 'auto'}}>
                                    <div aria-hidden="true">{stat.base_stat}</div>
                                </Col>  
                            <Col span={16}>
                        <div key={stat.base_stat}>
                            <div className="show-info">
                                <div className="progress">
                                    <Progress percent={stat.base_stat*(100/255)} position="normal" unfilled={false} appearTransition />
                                </div>
                            </div>
                            <WhiteSpace size="xl" />
                        </div>
                        </Col>

                        </Row>
                    )           
                }
                </>
            );

}

export default PokemonBaseStats;
