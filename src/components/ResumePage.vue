<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Resume</h3>
                <hr />
                <h4>Certifications</h4>
                <ul>
                    <li>AWS Certified Solutions Architect - Professional</li>
                    <li>AWS Certified DevOps Engineer - Professional</li>
                    <li>AWS Certified Big Data - Specialty</li>
                    <li>AWS Certified Solutions Architect - Associate</li>
                    <li>AWS Certified Developer - Associate</li>
                    <li>AWS Certified SysOps Administrator - Associate</li>
                    <li>AWS Certified Cloud Practitioner</li>
                    <li>Docker Certified Associate (Expired)</li>
                </ul>
                <hr />
                <h4>Work</h4>
                <ul>
                    <li><h5>Cloud Computing Engineer - Gerber Technology (May 2018 - Present)</h5>
                        <ul>
                            <li><b>EC2Archiver – Serverless application for compressing and archiving virtual machines.</b>
                                <ul>
                                    <li>Designed and implemented a completely serverless EC2 archiving backend.</li>
                                    <li>Written in Node.JS using Lambda, Step-functions, and both the EBS Data Api and DD for backups.</li>
                                    <li>Frontend written in Vue.js.</li>
                                </ul>
                            </li>
                            <li><b>Gerber SSO – Company wide identity and permission management system for employees and customers.</b>
                                <ul>
                                    <li>Built on top of Cognito.</li>
                                    <li>Utilizing DynamoDB, Lambda, and custom endpoints to provide company entities with user privilege management.</li>
                                </ul>
                            </li>
                            <li><b>AccuMark Cloud – Virtual Desktop service for providing AccuMark in the browser.</b>
                                <ul>
                                    <li>Designed, developmented, and maintained AccuMark Cloud.</li>
                                    <li>Implemented a custom S3 backed file-system based on Dokan for maintaining persistent storage across ephemeral virtual desktops.</li>
                                    <li>Built infrastructure management code for allocating, resizing, and removing customer environments.</li>
                                    <li>Wrote the tenant and user management APIs as well as the frontend.</li>
                                </ul>
                            </li>
                            <li><b>Digital Solutions – Company-wide common APIs</b>
                                <ul>
                                    <li>Wrote an application-agnostic translation service.</li>
                                    <li>Implemented a multi-tiered settings service providing persistent settings for customers across products and organizations.</li>
                                    <li>Wrote an infrastructure status notification system.</li>
                                </ul>
                            </li>
                            <li><b>Project Skylight – A project intended to deliver core AccuMark APIs as web services.</b>
                                <ul>
                                    <li>Provided the base architecture and deployment pipelines.</li>
                                    <li>Assisted with the design for converting business logic DLLs into web endpoints utilizing Docker containers.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><h5>SAP Developer - TechMates Group (Sep 2017 - May 2018)</h5>
                        <ul>
                            <li><b>Environment Manager</b>
                                <ul>
                                    <li>Managed the Jenkins build environment and deployment pipelines.</li>
                                    <li>Handled deployments of new versions of B2B website.</li>
                                </ul>
                            </li>
                            <li><b>AWS Migration</b>
                                <ul>
                                    <li>Assisted in the planning of an on-premise datacenter to AWS cloud migration for a major equipment manufacturer.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><h5>Software Engineer - Gerber Technology (Sep 2015 - Aug 2017)</h5>
                        <ul>
                            <li><b>AccuManager – A web service delivering real-time metrics for customer’s manufacturing floors.</b>
                                <ul>
                                    <li>Designed and developed AccuManager.</li>
                                    <li>Wrote an on-premise agent for syncing customer’s status changes to the cloud.</li>
                                    <li>Built a framework allowing for customized analytics based on historical data.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><h5>Software Engineer - VRSim (May 2014 - Sep 2015)</h5>
                        <ul>
                            <li><b>SimSpray, VRTEX 360 and SimBuild.</b>
                                <ul>
                                    <li>Added student profiles and progress reports to SimSpray.</li>
                                    <li>Added new painting modes and parts to SimSpray.</li>
                                    <li>Added student profiles and progress reports to VRTEX 360.</li>
                                    <li>Developed new installers and background processes for SimBuild and its accompanying learning management system.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><h5>Software Engineer - Tools Plus (Jul 2013 - May 2014)</h5>
                        <ul>
                            <li><b>PO/Inv</b>
                                <ul>
                                    <li>Added a RESTful API to their in-house inventory management system.</li>
                                    <li>Designed and implemented an app for reporting inventory variances and receiving shipments.</li>
                                    <li>Created a mobile app allowing customers to scan UPC codes and display the matching item from the Tools Plus inventory.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <hr />
                <h4>Freelance</h4>
                <ul>
                    <li><h5>Linguicity - A Multilingual multiplayer word game</h5>
                        <ul>
                            <li><b>-</b>
                                <ul>
                                    <li>-</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><h5>T-Time Education - An LMS centering around devliering books, videos, and games</h5>
                        <ul>
                            <li><b>-</b>
                                <ul>
                                    <li>-</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li><h5>Abc4Restaurants - Restaurant broker intermediary website</h5>
                        <ul>
                            <li><b>-</b>
                                <ul>
                                    <li>-</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ResumePage',
}
</script>
