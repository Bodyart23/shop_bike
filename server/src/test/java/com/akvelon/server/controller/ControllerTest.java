package com.akvelon.server.controller;

import com.akvelon.server.controller.Controller;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import com.akvelon.server.models.Product;
import com.akvelon.server.services.ProductService;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.core.Is.is;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(Controller.class)
public class ControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductService productService;
    private Product product;
    private List<Product> products;

    @Before
    public void setUp() throws Exception {
        product = new Product();
        products = new ArrayList<>();

        product.setId(1);
        product.setName("Bike");
        product.setColor("Black");

        products.add(product);
    }


    @Test
    public void getAll() throws Exception {
        when(productService.getAll()).thenReturn(products);
        mockMvc.perform(get("/getAll"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Bike")))
                .andExpect(jsonPath("$[0].color", is(product.getColor())));
        verify(productService, times(1)).getAll();
        verifyNoMoreInteractions(productService);
    }

    @Test
    public void getProduct() throws Exception {
        when(productService.read( 1)).thenReturn(product);
        mockMvc.perform(get("/products/{id}", 1))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("Bike")))
                .andExpect(jsonPath("$.color", is(product.getColor())));
        verify(productService, times(1)).read(1);
        verifyNoMoreInteractions(productService);
    }

    @Test
    public void getTopfive() throws Exception {
        when(productService.getTopfive()).thenReturn(products);
        mockMvc.perform(get("/getTopfive"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Bike")))
                .andExpect(jsonPath("$[0].color", is(product.getColor())));
        verify(productService, times(1)).getTopfive();
        verifyNoMoreInteractions(productService);
    }

    private static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    public void delete() throws Exception {

        mockMvc.perform(get("/delete/{id}", 1)
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(product)))
                .andExpect(status().isOk());

        verify(productService, times(1)).delete(1);
        verifyNoMoreInteractions(productService);
    }

    @Test
    public void create() throws Exception {
        when(productService.create(product)).thenReturn(1);

        MvcResult result = mockMvc.perform(post("/products/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(product)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andReturn();

        String content = result.getResponse().getContentAsString();

        verify(productService, times(1)).create(product);
        verifyNoMoreInteractions(productService);
        assertEquals(1, Integer.parseInt(content));
    }


    @Test
    public void update() throws Exception {
        when(productService.update(product)).thenReturn(1);

        MvcResult result = mockMvc.perform(post("/products/update")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(product)))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8))
                .andReturn();

        String content = result.getResponse().getContentAsString();

        verify(productService, times(1)).update(product);
        verifyNoMoreInteractions(productService);
        assertEquals(1, Integer.parseInt(content));
    }

    @Test
    public void searchProduct() throws Exception {
        when(productService.searchProduct("Bike", 1)).thenReturn(products);
        mockMvc.perform(get("/search/{searchRequest}/{count}", "Bike", 1))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Bike")))
                .andExpect(jsonPath("$[0].color", is(product.getColor())));
        verify(productService, times(1)).searchProduct("Bike", 1);
        verifyNoMoreInteractions(productService);
    }
}