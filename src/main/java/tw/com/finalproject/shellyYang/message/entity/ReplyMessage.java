package tw.com.finalproject.shellyYang.message.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;
import tw.com.finalproject.yumyu.InternalUse.Client;
import tw.com.finalproject.yumyu.InternalUse.Employee;

@Data
@Entity
public class ReplyMessage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@OneToOne
	@JoinColumn(name="EMPLOYEE_ID")
	private Employee employee;
	@OneToOne
	@JoinColumn(name="CLIENT_ID")
	private Client client;
	
	private String content;
	
	private String createTime;
}
