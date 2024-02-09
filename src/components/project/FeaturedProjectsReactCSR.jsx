import React, { useState, useEffect } from 'react';
import { Icon } from 'astro-icon/components';

export default function FeaturedProjectReactCSR ({ projects }) {
    const [tabkeeperUserCount, setTabkeeperUserCount] = useState(() => {
        const savedData = localStorage.getItem('tabKeeperUserCountData');
        if (savedData) {
            const { count, timestamp } = JSON.parse(savedData);
            const currentDate = new Date();
            const lastFetchedDate = new Date(timestamp);
            if (currentDate.toDateString() === lastFetchedDate.toDateString()) {
                return count;
            }
        }
        return '520';
    });

    useEffect(() => {
        const fetchUserCount = async () => {
            const savedData = localStorage.getItem('tabKeeperUserCountData');
            if (savedData) {
                const { timestamp } = JSON.parse(savedData);
                const currentDate = new Date();
                const lastFetchedDate = new Date(timestamp);
                if (currentDate.toDateString() === lastFetchedDate.toDateString()) {
                    return;
                }
            }
            try {
                const response = await fetch('https://project-metrics-flask.fly.dev/projects/usercount?name=tab-keeper-react-chrome-extension');
                const data = await response.json();
                const userCount = data.users || projects.filter((p) => p.title === "Tab Keeper (Featured on Web Store)")[0]?.metrics?.users || '520';
                setTabkeeperUserCount(userCount);
                localStorage.setItem('tabKeeperUserCountData', JSON.stringify({ count: userCount, timestamp: new Date() }));
            } catch (error) {
                console.error('Failed to fetch user count:', error);
            }
        };
        fetchUserCount();
    }, [projects]);

    return (
        <ul className="list-inside list-disc space-y-8">
            {projects.map((project) => (
                <li className="group flex list-none flex-col-reverse items-start gap-y-2 sm:flex-row sm:gap-x-4" key={project.title}>
                    <a
                        className="mb-2 sm:mb-0"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.links.github}
                    >
                        <img
                            className="flex h-fit w-[14rem] min-w-[12rem] transition-all sm:w-[12rem] sm:brightness-90 sm:group-hover:brightness-100"
                            src={project.thumbnail}
                            alt={project.title}
                        />
                    </a>
                    <div className="flex flex-col items-start">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cactus-link-mobile inline-block flex-row group-hover:cactus-link-mobile sm:cactus-link"
                            href={project.links.github}
                        >
                            {project.title}
                            <Icon
                                className="inline-block h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                                name="ri:arrow-right-up-line"
                                aria-hidden="true"
                                focusable="false"
                            />
                        </a>
                        <p className="project-description mt-2 line-clamp-3 block">{project.description}</p>
                        {project.metrics && project.metrics.users && (
                            <a
                                className="mb-2 mt-2 flex flex-row items-center justify-start sm:hover:text-accent"
                                href={project.links.storepage}
                                target="_blank"
                                rel={`noopener noreferrer`}
                            >
                                <Icon
                                    className="me-2 h-4 w-4"
                                    name="ri:group-fill"
                                    aria-hidden="true"
                                    focusable="false"
                                />
                                <p className="project-metrics">
                                    {project.title === "Tab Keeper (Featured on Web Store)"
                                        ? `${tabkeeperUserCount} `
                                        : project.metrics.users}
                                    weekly active users
                                </p>
                                <span className="sr-only">{"Weekly Active Users Count"}</span>
                            </a>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
};