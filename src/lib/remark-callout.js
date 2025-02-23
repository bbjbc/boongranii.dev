import { visit } from 'unist-util-visit';

export const remarkCallout = () => {
  return tree => {
    visit(tree, node => {
      if (
        node.type === 'containerDirective' ||
        node.type === 'textDirective' ||
        node.type === 'leafDirective'
      ) {
        if (!isValidCalloutType(node.name)) {
          return;
        }

        const data = node.data || (node.data = {});
        const attributes = node.attributes || {};

        const type = node.name;
        const title = attributes.title || '';

        // 노드를 JSX 엘리먼트로 변환
        data.hName = 'Callout';
        data.hProperties = {
          type,
          title,
        };
      }
    });
  };
};

const isValidCalloutType = type => {
  return ['note', 'warning', 'info', 'danger'].includes(type);
};
