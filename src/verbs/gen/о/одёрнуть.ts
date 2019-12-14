import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одёрнуть: PerfectVerb = {
  name: Word('одёрнуть', 0),
  singular1stPerson: Word('одёрну', 0),
  singular2ndPerson: Word('одёрнешь', 5),
  singular3rdPerson: Word('одёрнет', 5),
  plural1stPerson: Word('одёрнем', 5),
  plural2ndPerson: Word('одёрнете', 5),
  plural3rdPerson: Word('одёрнут', 0),
  masculinePast: Word('одёрнул', 0),
  femininePast: Word('одёрнула', 7),
  neuterPast: Word('одёрнуло', 0),
  pluralPast: Word('одёрнули', 7),
  imperativeInformal: Word('одёрни', 5),
  imperativeFormal: Word('одёрните', 7),
  imperfect: [],
};

perfectVerbs.set(одёрнуть.name.text, одёрнуть);

export { одёрнуть };