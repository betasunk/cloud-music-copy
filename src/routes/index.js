import React, { Component, Suspense } from 'react'

import { Redirect } from 'react-router-dom'

const SuspenseComponent = Component => props => {
    return (
        <Suspense>
            <Component>
            </Component>
        </Suspense>
    )
}