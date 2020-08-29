export default function Owlit({ id, avatar, username, message }) {
  return (
    <>
      <article>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>
      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #eaf7ff;
        }
        div {
          margin-right: 10px;
        }
        p {
          margin: 0;
        }
      `}</style>
    </>
  )
}
