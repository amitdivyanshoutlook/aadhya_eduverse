package com.aadhya.eduverse.aadhya.config;

import com.aadhya.eduverse.aadhya.model.CompanyInfo;
import com.aadhya.eduverse.aadhya.model.Product;
import com.aadhya.eduverse.aadhya.model.Service;
import com.aadhya.eduverse.aadhya.repository.CompanyInfoRepository;
import com.aadhya.eduverse.aadhya.repository.ProductRepository;
import com.aadhya.eduverse.aadhya.repository.ServiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final ServiceRepository serviceRepository;
    private final CompanyInfoRepository companyInfoRepository;

    @Autowired
    public DataInitializer(
            ProductRepository productRepository,
            ServiceRepository serviceRepository,
            CompanyInfoRepository companyInfoRepository) {
        this.productRepository = productRepository;
        this.serviceRepository = serviceRepository;
        this.companyInfoRepository = companyInfoRepository;
    }

    @Override
    public void run(String... args) {
        // Only initialize if no data exists
        if (productRepository.count() == 0 && serviceRepository.count() == 0 && companyInfoRepository.count() == 0) {
            initializeCompanyInfo();
            initializeProducts();
            initializeServices();
        }
    }

    private void initializeCompanyInfo() {
        CompanyInfo companyInfo = new CompanyInfo();
        companyInfo.setName("Aadhya Eduverse Private Limited");
        companyInfo.setTagline("Empowering Education Through Technology");
        companyInfo.setAbout("Aadhya Eduverse is a leading educational technology company specializing in AI-powered learning solutions and professional training services. We are committed to bridging the gap between education and industry by providing cutting-edge technology solutions and comprehensive training programs.");
        companyInfo.setEmail("contact@aadhyaeduverse.com");
        companyInfo.setPhone("+91 9876543210");
        companyInfo.setAddress("123 Tech Park, Innovation Street, Bangalore, India");
        companyInfo.setLogoUrl("/images/logo.png");
        companyInfo.setWebsiteUrl("https://www.aadhyaeduverse.com");

        companyInfoRepository.save(companyInfo);
    }

    private void initializeProducts() {
        List<Product> products = new java.util.ArrayList<>();
        
        Product product1 = new Product();
        product1.setName("Explainable AI Platform");
        product1.setShortDescription("AI-powered educational platform with transparent decision-making");
        product1.setDescription("Our Explainable AI Platform is designed specifically for educational contexts, providing transparent insights into how AI makes decisions. This platform helps educators understand the reasoning behind AI-generated recommendations, making it easier to trust and implement AI solutions in educational settings. Features include learning path recommendations, student performance analysis, and personalized content delivery, all with clear explanations of the underlying AI logic.");
        product1.setImageUrl("/images/products/explainable-ai.jpg");
        product1.setProductUrl("/products/explainable-ai");
        products.add(product1);
        
        Product product2 = new Product();
        product2.setName("EduVerse LMS");
        product2.setShortDescription("Comprehensive Learning Management System for educational institutions");
        product2.setDescription("EduVerse LMS is a complete learning management solution designed for schools, colleges, and training institutes. It offers course management, student tracking, assessment tools, and interactive learning features. The platform integrates seamlessly with our Explainable AI to provide personalized learning experiences while maintaining full transparency in how content and assessments are tailored to individual students.");
        product2.setImageUrl("/images/products/eduverse-lms.jpg");
        product2.setProductUrl("/products/eduverse-lms");
        products.add(product2);
        
        Product product3 = new Product();
        product3.setName("SkillTrack Analytics");
        product3.setShortDescription("Skill assessment and tracking platform for career development");
        product3.setDescription("SkillTrack Analytics helps students and professionals identify skill gaps and track their progress toward career goals. Using advanced data analytics and industry benchmarks, the platform provides actionable insights and personalized learning recommendations. The system integrates with popular job portals to align skill development with current market demands, ensuring that learners focus on the most relevant competencies for their chosen career paths.");
        product3.setImageUrl("/images/products/skilltrack.jpg");
        product3.setProductUrl("/products/skilltrack");
        products.add(product3);

        productRepository.saveAll(products);
    }

    private void initializeServices() {
        List<Service> services = new java.util.ArrayList<>();
        
        Service service1 = new Service();
        service1.setName("Java Programming Training");
        service1.setCategory("Training");
        service1.setShortDescription("Comprehensive Java training from basics to advanced concepts");
        service1.setDescription("Our Java Programming Training covers everything from core Java fundamentals to advanced topics like multithreading, collections, and design patterns. The course includes hands-on projects, real-world applications, and industry best practices. Suitable for beginners and intermediate programmers looking to enhance their Java skills for enterprise application development.");
        service1.setImageUrl("/images/services/java-training.jpg");
        services.add(service1);
        
        Service service2 = new Service();
        service2.setName("Python for Data Science");
        service2.setCategory("Training");
        service2.setShortDescription("Learn Python programming with focus on data analysis and machine learning");
        service2.setDescription("This comprehensive Python training program focuses on data science applications. Participants will learn Python syntax, data structures, and libraries like NumPy, Pandas, and Matplotlib. The course progresses to cover data analysis techniques, visualization, and an introduction to machine learning with scikit-learn. By the end of the program, students will be able to implement complete data analysis pipelines using Python.");
        service2.setImageUrl("/images/services/python-training.jpg");
        services.add(service2);
        
        Service service3 = new Service();
        service3.setName("MS SQL Database Administration");
        service3.setCategory("Training");
        service3.setShortDescription("Master database management and administration with Microsoft SQL Server");
        service3.setDescription("Our MS SQL Database Administration course provides in-depth knowledge of SQL Server installation, configuration, maintenance, and troubleshooting. Participants will learn about database design, query optimization, backup and recovery strategies, and security best practices. The training includes practical exercises on real-world scenarios and prepares students for Microsoft certification exams.");
        service3.setImageUrl("/images/services/mssql-training.jpg");
        services.add(service3);
        
        Service service4 = new Service();
        service4.setName("O Level Exam Preparation");
        service4.setCategory("Competitive Exam");
        service4.setShortDescription("Specialized coaching for NIELIT O Level computer science examination");
        service4.setDescription("Our O Level Exam Preparation program is specifically designed to help students succeed in the NIELIT (formerly DOEACC) O Level examination. The comprehensive course covers all modules including Information Technology Tools and Network Basics, Web Designing and Publishing, Programming and Problem Solving through Python, and Internet of Things. Our experienced faculty provides targeted guidance, practice tests, and personalized feedback to ensure exam success.");
        service4.setImageUrl("/images/services/olevel-coaching.jpg");
        services.add(service4);
        
        Service service5 = new Service();
        service5.setName("Custom Website Development");
        service5.setCategory("Development");
        service5.setShortDescription("End-to-end website development services for businesses and organizations");
        service5.setDescription("Our Custom Website Development service delivers tailor-made websites that perfectly align with your business goals and brand identity. We handle everything from initial concept and design to development, testing, and deployment. Our development team is proficient in modern web technologies including HTML5, CSS3, JavaScript, React, and various backend frameworks. We focus on creating responsive, user-friendly, and SEO-optimized websites that drive engagement and conversions.");
        service5.setImageUrl("/images/services/website-development.jpg");
        services.add(service5);
        
        Service service6 = new Service();
        service6.setName("Educational Software Development");
        service6.setCategory("Development");
        service6.setShortDescription("Custom educational software solutions for schools and training institutes");
        service6.setDescription("We specialize in developing custom educational software solutions that address the unique challenges faced by educational institutions. Our offerings include student information systems, assessment platforms, virtual learning environments, and administrative tools. Each solution is built with a focus on usability, scalability, and integration capabilities with existing systems. Our development process involves close collaboration with educators to ensure the final product enhances teaching and learning experiences.");
        service6.setImageUrl("/images/services/edu-software.jpg");
        services.add(service6);

        serviceRepository.saveAll(services);
    }
}