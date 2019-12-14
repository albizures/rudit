import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одёрнуть: PerfectVerb = {
  name: Word('одёрнуть', 2),
  singular1stPerson: Word('одёрну', 2),
  singular2ndPerson: Word('одёрнешь', 2),
  singular3rdPerson: Word('одёрнет', 2),
  plural1stPerson: Word('одёрнем', 2),
  plural2ndPerson: Word('одёрнете', 2),
  plural3rdPerson: Word('одёрнут', 2),
  masculinePast: Word('одёрнул', 2),
  femininePast: Word('одёрнула', 2),
  neuterPast: Word('одёрнуло', 2),
  pluralPast: Word('одёрнули', 2),
  imperativeInformal: Word('одёрни', 2),
  imperativeFormal: Word('одёрните', 2),
  imperfect: [],
};

perfectVerbs.set(одёрнуть.name.text, одёрнуть);

export { одёрнуть };