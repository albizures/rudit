import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передёрнуть: PerfectVerb = {
  name: Word('передёрнуть', 1),
  singular1stPerson: Word('передёрну', 1),
  singular2ndPerson: Word('передёрнешь', 1),
  singular3rdPerson: Word('передёрнет', 1),
  plural1stPerson: Word('передёрнем', 1),
  plural2ndPerson: Word('передёрнете', 1),
  plural3rdPerson: Word('передёрнут', 1),
  masculinePast: Word('передёрнул', 1),
  femininePast: Word('передёрнула', 10),
  neuterPast: Word('передёрнуло', 1),
  pluralPast: Word('передёрнули', 1),
  imperativeInformal: Word('передёрни', 1),
  imperativeFormal: Word('передёрните', 1),
  imperfect: [],
};

perfectVerbs.set(передёрнуть.name.text, передёрнуть);

export { передёрнуть };