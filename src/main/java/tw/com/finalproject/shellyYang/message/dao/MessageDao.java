package tw.com.finalproject.shellyYang.message.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import tw.com.finalproject.shellyYang.message.entity.Message;

public interface MessageDao extends JpaRepository<Message, Long>{
	
	//新增留言

	//新增回覆留言
	
	//看到所有留言
	
	//刪除留言

}
