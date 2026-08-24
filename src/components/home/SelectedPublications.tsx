'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Publication } from '@/types/publication';
import { useMessages } from '@/lib/i18n/useMessages';
import FormattedBibTeXText from '@/components/publications/FormattedBibTeXText';

interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
    enableOnePageMode?: boolean;
}

export default function SelectedPublications({ publications, title, enableOnePageMode = false }: SelectedPublicationsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.selectedPublications;

    return (
        <motion.section initial={false}>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif font-bold text-primary">{resolvedTitle}</h2>
                <Link
                    href={enableOnePageMode ? "/#publications" : "/publications"}
                    prefetch={true}
                    className="text-accent hover:text-accent-dark text-sm font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
                >
                    {messages.home.viewAll} →
                </Link>
            </div>
            <div className="space-y-4">
                {publications.map((pub) => (
                    <motion.div
                        key={pub.id}
                        initial={false}
                        className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-[rgba(148,163,184,0.24)] hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                    >
                        <div className="flex flex-row gap-4">
                            {pub.preview && (
                                <div className="w-24 sm:w-36 flex-shrink-0">
                                    <a
                                        href={pub.url || pub.doi ? (pub.url || `https://doi.org/${pub.doi}`) : undefined}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block h-16 sm:h-20 relative rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700"
                                    >
                                        <Image
                                            src={`/paper-previews/${pub.preview}`}
                                            alt={pub.title}
                                            fill
                                            className="object-contain p-1"
                                            sizes="(max-width: 640px) 100vw, 144px"
                                        />
                                    </a>
                                </div>
                            )}
                            <div className="min-w-0">
                                <h3 className="font-semibold text-primary mb-2 leading-tight">
                                    {pub.url || pub.doi ? (
                                        <a
                                            href={pub.url || `https://doi.org/${pub.doi}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-accent transition-colors"
                                        >
                                            <FormattedBibTeXText nodes={pub.titleNodes} fallback={pub.title} />
                                        </a>
                                    ) : (
                                        <FormattedBibTeXText nodes={pub.titleNodes} fallback={pub.title} />
                                    )}
                                </h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-1">
                                    {pub.authors.map((author, idx) => (
                                        <span key={idx}>
                                            <span className={`${author.isHighlighted ? 'font-semibold text-accent' : ''} ${author.isCoAuthor ? `underline underline-offset-4 ${author.isHighlighted ? 'decoration-accent' : 'decoration-neutral-400'}` : ''}`}>
                                                {author.name}
                                            </span>
                                            {author.isEqualContribution && (
                                                <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-500'}`}>*</sup>
                                            )}
                                            {idx < pub.authors.length - 1 && ', '}
                                        </span>
                                    ))}
                                    {pub.authors.some(author => author.isEqualContribution) && (
                                        <span className="block text-xs mt-1">* Equal contribution</span>
                                    )}
                                </p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-2">
                                    {pub.journal || pub.conference}
                                </p>
                                {pub.description && (
                                    <p className="text-sm text-neutral-500 dark:text-neutral-500 line-clamp-2">
                                        {pub.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
