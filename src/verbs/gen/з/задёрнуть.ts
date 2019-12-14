import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задёрнуть: PerfectVerb = {
  name: Word('задёрнуть', 3),
  singular1stPerson: Word('задёрну', 3),
  singular2ndPerson: Word('задёрнешь', 3),
  singular3rdPerson: Word('задёрнет', 3),
  plural1stPerson: Word('задёрнем', 3),
  plural2ndPerson: Word('задёрнете', 3),
  plural3rdPerson: Word('задёрнут', 3),
  masculinePast: Word('задёрнул', 3),
  femininePast: Word('задёрнула', 3),
  neuterPast: Word('задёрнуло', 3),
  pluralPast: Word('задёрнули', 3),
  imperativeInformal: Word('задёрни', 3),
  imperativeFormal: Word('задёрните', 3),
  imperfect: [],
};

perfectVerbs.set(задёрнуть.name.text, задёрнуть);

export { задёрнуть };