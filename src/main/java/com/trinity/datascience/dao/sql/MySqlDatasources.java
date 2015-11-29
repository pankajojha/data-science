package com.trinity.datascience.dao.sql;

import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;



/**
 * Created by vojhapa on 10/31/15.
 */
public class MySqlDatasources {

   /* @Bean
    @Primary
    @ConfigurationProperties(prefix="datasource.epenqc")
    public DataSource primaryDataSource() {
        return DataSourceBuilder.create().build();
    }

    @Bean
    @ConfigurationProperties(prefix="datasource.config")
    public DataSource secondaryDataSource() {
        return DataSourceBuilder.create().build();
    }*/
}
