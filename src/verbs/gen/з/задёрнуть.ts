import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задёрнуть: PerfectVerb = {
  name: Word('задёрнуть', 1),
  singular1stPerson: Word('задёрну', 1),
  singular2ndPerson: Word('задёрнешь', 1),
  singular3rdPerson: Word('задёрнет', 1),
  plural1stPerson: Word('задёрнем', 1),
  plural2ndPerson: Word('задёрнете', 1),
  plural3rdPerson: Word('задёрнут', 1),
  masculinePast: Word('задёрнул', 1),
  femininePast: Word('задёрнула', 1),
  neuterPast: Word('задёрнуло', 1),
  pluralPast: Word('задёрнули', 1),
  imperativeInformal: Word('задёрни', 1),
  imperativeFormal: Word('задёрните', 1),
  imperfect: [],
};

perfectVerbs.set(задёрнуть.name.text, задёрнуть);

export { задёрнуть };