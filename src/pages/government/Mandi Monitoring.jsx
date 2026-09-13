import { motion } from 'framer-motion'
import Card from './_Card'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
}

export default function MandiMonitoring({ mandis }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* HEADER */}
      <motion.div
        className="page-heading"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <motion.small
            initial={{ opacity: 0, letterSpacing: '0px' }}
            animate={{ opacity: 1, letterSpacing: '2px' }}
            transition={{ duration: 0.8 }}
          >
            REAL-TIME NETWORK
          </motion.small>

          <h1>Mandi Monitoring</h1>

          <p>
            Monitor mandi utilization, farmer waiting time and
            operational health in real time.
          </p>
        </div>

        <motion.div
          className="pill success"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            type: 'spring',
            stiffness: 220,
          }}
        >
          <motion.span
            style={{
              display: 'inline-block',
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'currentColor',
              marginRight: 7,
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />

          4 Centers Online
        </motion.div>
      </motion.div>

      {/* MANDI GRID */}
      <motion.div
        className="msp-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {mandis.map((m, i) => {
          const isAttention = m[4] === 'Attention'

          return (
            <motion.div
              key={m[0]}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: {
                  duration: 0.25,
                },
              }}
              style={{
                position: 'relative',
              }}
            >
              {/* Animated glow */}
              <motion.div
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  position: 'absolute',
                  inset: -2,
                  borderRadius: 20,
                  background: isAttention
                    ? 'rgba(245, 158, 11, 0.25)'
                    : 'rgba(34, 197, 94, 0.2)',
                  filter: 'blur(14px)',
                  zIndex: 0,
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <Card>
                  {/* TOP ROW */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 12,
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.15 }}
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 24,
                        background: isAttention
                          ? 'rgba(245,158,11,.12)'
                          : 'rgba(34,197,94,.12)',
                      }}
                    >
                      🏪
                    </motion.div>

                    <span
                      className={`pill ${
                        isAttention ? 'checking' : 'success'
                      }`}
                    >
                      {isAttention ? 'Attention' : 'Online'}
                    </span>
                  </div>

                  {/* MANDI NAME */}
                  <h3 style={{ margin: '8px 0 4px' }}>
                    {m[0]}
                  </h3>

                  <small
                    style={{
                      display: 'block',
                      opacity: 0.7,
                    }}
                  >
                    {m[1]}
                  </small>

                  {/* WAITING TIME */}
                  <div
                    style={{
                      marginTop: 20,
                      padding: 14,
                      borderRadius: 14,
                      background: 'rgba(0,0,0,.035)',
                    }}
                  >
                    <small
                      style={{
                        display: 'block',
                        marginBottom: 5,
                      }}
                    >
                      Average Waiting Time
                    </small>

                    <motion.strong
                      className="msp-price"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.35 + i * 0.1,
                      }}
                    >
                      {m[3]}
                    </motion.strong>
                  </div>

                  {/* UTILIZATION */}
                  <div style={{ marginTop: 18 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 8,
                      }}
                    >
                      <small>Utilization</small>

                      <small>
                        {m[2]}
                      </small>
                    </div>

                    <div
                      className="mini-progress"
                      style={{
                        height: 9,
                        overflow: 'hidden',
                        borderRadius: 20,
                      }}
                    >
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: m[2] }}
                        transition={{
                          duration: 1.2,
                          delay: 0.4 + i * 0.12,
                          ease: 'easeOut',
                        }}
                        style={{
                          display: 'block',
                          height: '100%',
                          borderRadius: 20,
                        }}
                      />
                    </div>
                  </div>

                  {/* BOTTOM STATUS */}
                  <motion.div
                    style={{
                      marginTop: 18,
                      paddingTop: 14,
                      borderTop: '1px solid rgba(0,0,0,.08)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <small>Network Status</small>

                    <span
                      className={`pill ${
                        isAttention ? 'checking' : 'success'
                      }`}
                    >
                      {isAttention
                        ? 'Needs Attention'
                        : 'Operating Normally'}
                    </span>
                  </motion.div>
                </Card>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}