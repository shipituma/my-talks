﻿#region Using Directives
using System;
#endregion

namespace Product.Engine.Messages
{
    public class MainActivity : IActivity
    {
        public int Id { get; set; }
        public DateTime StartTime { get; set; }
    }
}
