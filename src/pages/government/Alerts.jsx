import { motion } from "framer-motion";

import Card from "./_Card";

export default function Alerts({ onToast }) {
  const alerts = [
    {
      id: 1,
      severity: "critical",
      label: "Critical",
      title: "Siliguri Mandi queue is overloaded",
      description:
        "Average waiting time has reached 31 minutes. Immediate queue reallocation is recommended.",
      metric: "31 min",
      metricLabel: "Avg. wait",
      action: "Reallocate",
      time: "8 min ago",
    },
    {
      id: 2,
      severity: "warning",
      label: "Warning",
      title: "Durgapur Mandi nearing capacity",
      description:
        "Current utilization is at 93%. Incoming procurement slots should be monitored closely.",
      metric: "93%",
      metricLabel: "Utilization",
      action: "Monitor",
      time: "21 min ago",
    },
    {
      id: 3,
      severity: "review",
      label: "Review",
      title: "MSP compliance check required",
      description:
        "One procurement center has an offer rate that requires comparison with the approved MSP reference.",
      metric: "1",
      metricLabel: "Center",
      action: "Inspect",
      time: "42 min ago",
    },
  ];

  const handleAction = (action) => {
    onToast(`${action} action completed`);
  };

  return (
    <motion.div
      className="alerts-page"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="page-heading">
        <div>
          <small>OPERATIONS MONITOR</small>
          <h1>Alert Center</h1>
          <p>
            Review priority issues across mandi capacity, waiting times and
            procurement compliance.
          </p>
        </div>

        <div className="alert-summary">
          <span className="status-dot" />
          <strong>3</strong>
          <span>open alerts</span>
        </div>
      </div>

      <div className="alert-toolbar">
        <div>
          <b>Priority issues</b>
          <span> Requires attention from the operations team</span>
        </div>

        <button
          className="secondary small"
          onClick={() => onToast("All alerts marked as reviewed")}
        >
          Mark all reviewed
        </button>
      </div>

      <div className="alert-list">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <Card>
              <div className={`alert-card ${alert.severity}`}>
                <div className="alert-main">
                  <div className="alert-top">
                    <span className={`severity ${alert.severity}`}>
                      <span className="severity-dot" />
                      {alert.label}
                    </span>

                    <span className="alert-time">{alert.time}</span>
                  </div>

                  <h3>{alert.title}</h3>
                  <p>{alert.description}</p>
                </div>

                <div className="alert-metric">
                  <strong>{alert.metric}</strong>
                  <span>{alert.metricLabel}</span>
                </div>

                <button
                  className="primary small"
                  onClick={() => handleAction(alert.action)}
                >
                  {alert.action}
                  <span>→</span>
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}