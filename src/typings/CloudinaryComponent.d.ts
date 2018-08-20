import * as React from 'react'
import { Transformation } from 'cloudinary-core'
import CloudinaryComponent from '../components/CloudinaryComponent/CloudinaryComponent';

interface CloudinaryOptions {
    [key: string]: any
}

interface Foo {
    [x: string]: any
    transformation: any[]
}

interface CloudinaryComponentProps {
    publicId: string
    responsive: boolean
}

declare module 'cloudinary-react' {
    class CloudinaryComponent extends React.Component<CloudinaryComponentProps> {
        protected getURL(options: CloudinaryOptions): string

        static protected normalizeOptions(options: any[]): any

        getChildContext(): {}

        render(): null

        protected getTransformation(option: CloudinaryOptions)
        getChildTransformations(children?: React.ReactChildren): Foo[]

        static VALID_OPTIONS: any
        static contextTypes: any

        static propTypes: CloudinaryComponentProps
    }
}
