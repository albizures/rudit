import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брызнуть: PerfectVerb = {
  name: Word('брызнуть', 2),
  singular1stPerson: Word('брызну', 2),
  singular2ndPerson: Word('брызнешь', 2),
  singular3rdPerson: Word('брызнет', 2),
  plural1stPerson: Word('брызнем', 2),
  plural2ndPerson: Word('брызнете', 2),
  plural3rdPerson: Word('брызнут', 2),
  masculinePast: Word('брызнул', 2),
  femininePast: Word('брызнула', 2),
  neuterPast: Word('брызнуло', 2),
  pluralPast: Word('брызнули', 2),
  imperativeInformal: Word('брызни', 2),
  imperativeFormal: Word('брызните', 2),
  imperfect: ['брызгать'],
};

perfectVerbs.set(брызнуть.name.text, брызнуть);

export { брызнуть };