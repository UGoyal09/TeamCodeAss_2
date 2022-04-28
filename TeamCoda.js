	class LinkedListNode
	{
		constructor(key)
		{
			this.value=key;
			this.next=null;
		}
	}
	



function mergeLists(arr)
{
	for (let i = 1; i < arr.length; i++)
	{
	while(true)
	{

		let head_0 = arr[0];
		let head_i = arr[i];

		if (head_i == null)
		break;

		if(head_0.value >= head_i.value)
		{
		arr[i] = head_i.next;
		head_i.next = head_0;
		arr[0] = head_i;
		}
		else
		{

		while (head_0.next != null)
		{

			if (head_0.next.value >= head_i.value)
			{
			arr[i] = head_i.next;
			head_i.next = head_0.next;
			head_0.next = head_i;
			break;
			}

			head_0 = head_0.next;

			if (head_0.next == null)
			{
			arr[i] = head_i.next;
			head_i.next = null;
			head_0.next = head_i;
			head_0.next.next = null;
			break;
			}
		}
		}
	}
	}
	return arr[0];
}



let input_arr = new Array(3);
input_arr[0] = new LinkedListNode(1);
input_arr[0].next = new LinkedListNode(4);
input_arr[0].next.next = new LinkedListNode(5);

input_arr[1] = new LinkedListNode(1);
input_arr[1].next = new LinkedListNode(3);
input_arr[1].next.next = new LinkedListNode(4);

input_arr[2] = new LinkedListNode(2);
input_arr[2].next = new LinkedListNode(6);

let head = mergeLists(input_arr);
let output_arr = [];
while(head != null)
{
	output_arr.push(head.value)
	head = head.next;
}
console.log("Merged Sorted Array is::", output_arr.join(","))

