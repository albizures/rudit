import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передёрнуть: PerfectVerb = {
  name: Word('передёрнуть', 5),
  singular1stPerson: Word('передёрну', 5),
  singular2ndPerson: Word('передёрнешь', 5),
  singular3rdPerson: Word('передёрнет', 5),
  plural1stPerson: Word('передёрнем', 5),
  plural2ndPerson: Word('передёрнете', 5),
  plural3rdPerson: Word('передёрнут', 5),
  masculinePast: Word('передёрнул', 5),
  femininePast: Word('передёрнула', 5),
  neuterPast: Word('передёрнуло', 5),
  pluralPast: Word('передёрнули', 5),
  imperativeInformal: Word('передёрни', 5),
  imperativeFormal: Word('передёрните', 5),
  imperfect: [],
};

perfectVerbs.set(передёрнуть.name.text, передёрнуть);

export { передёрнуть };