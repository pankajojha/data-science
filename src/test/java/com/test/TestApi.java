package com.test;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by vojhapa on 11/5/15.
 */
public class TestApi {

    public static void main(String []args){
        System.out.println("test the world "+args);

        List a = new ArrayList<>();
        a = null;
        System.out.println(a.isEmpty());
    }
}
