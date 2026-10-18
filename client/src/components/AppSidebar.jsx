import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Handshake,
  Contact,
  CheckSquare,
  BarChart3,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar";

function AppSidebar() {
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Leads", path: "/leads", icon: Users },
    { name: "Deals", path: "/deals", icon: Handshake },
    { name: "Contacts", path: "/contacts", icon: Contact },
    { name: "Tasks", path: "/tasks", icon: CheckSquare },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Settings", path: "/settings", icon: Settings },
  ];

  return (
    <Sidebar>
       <SidebarHeader>
      <div className="flex items-center gap-3 px-2 py-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <LayoutDashboard className="h-5 w-5" />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-semibold">Sales CRM</span>
          <span className="text-xs text-muted-foreground">
            Sales workspace
          </span>
        </div>
      </div>
    </SidebarHeader>
    {/* Navigation */}
      <SidebarContent>
  {/* Workspace navigation */}
  <SidebarGroup>
    <SidebarGroupLabel>WORKSPACE</SidebarGroupLabel>

    <SidebarGroupContent>
      <SidebarMenu>
        {navigation
          .filter((item) =>
            ["/dashboard", "/leads", "/deals", "/contacts", "/tasks"].includes(
              item.path
            )
          )
          .map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.path}
                tooltip={item.name}
              >
                <NavLink
                  to={item.path}
                  className="flex items-center gap-2"
                >
                  <item.icon />
                  <span>{item.name}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>

  {/* Insights navigation */}
  <SidebarGroup>
    <SidebarGroupLabel>INSIGHTS</SidebarGroupLabel>

    <SidebarGroupContent>
      <SidebarMenu>
        {navigation
          .filter((item) => item.path === "/analytics")
          .map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.path}
                tooltip={item.name}
              >
                <NavLink
                  to={item.path}
                  className="flex items-center gap-2"
                >
                  <item.icon />
                  <span>{item.name}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>

  {/* Preferences navigation */}
  <SidebarGroup>
    <SidebarGroupLabel>PREFERENCES</SidebarGroupLabel>

    <SidebarGroupContent>
      <SidebarMenu>
        {navigation
          .filter((item) => item.path === "/settings")
          .map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.path}
                tooltip={item.name}
              >
                <NavLink
                  to={item.path}
                  className="flex items-center gap-2"
                >
                  <item.icon />
                  <span>{item.name}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;