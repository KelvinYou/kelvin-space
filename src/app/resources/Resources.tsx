import React, { FC } from 'react'

const resources = [
  [
    {
      id: "title",
      name: "Title",
      content: "HyperUI",
    },
    {
      id: "link",
      name: "Link",
      content: "https://www.hyperui.dev",
      type: "link",
    },
    {
      id: "description",
      name: "Description",
      content: "Tailwind CSS UI",
    },
  ],
  [
    {
      id: "title",
      name: "Title",
      content: "Shadcn UI",
    },
    {
      id: "link",
      name: "Link",
      content: "https://ui.shadcn.com/docs",
      type: "link",
    },
    {
      id: "description",
      name: "Description",
      content: "Re-usable components built using Radix UI and Tailwind CSS",
    },
  ],
]

const ResourceCard: FC<any> = (props) => {
  const { resource } = props;

  return (
    <div className="flow-root rounded-lg border border-gray-200 py-3 shadow-sm">

      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        {resource.map((list: any, index: number) => {
          return (
            <div
              key={index}
              className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4"
            >
              <dt className="font-medium text-gray-900">{list.name}</dt>
              <dd className="text-gray-700 sm:col-span-2">{list.content}</dd>
            </div>
          )

        })}
        
      </dl>
    </div>
  )
}

const Resources: FC = () => {
  return (
    <div>
      {resources.map((resource, index) => (
        <div className="mb-3">
          <ResourceCard 
            key={index} 
            resource={resource}
          />
        </div>

      ))}
      
    </div>
  )
}

export default Resources