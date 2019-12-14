import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повергнуть: PerfectVerb = {
  name: Word('повергнуть', 3),
  singular1stPerson: Word('повергну', 3),
  singular2ndPerson: Word('повергнешь', 3),
  singular3rdPerson: Word('повергнет', 3),
  plural1stPerson: Word('повергнем', 3),
  plural2ndPerson: Word('повергнете', 3),
  plural3rdPerson: Word('повергнут', 3),
  masculinePast: Word('поверг//пове'ргнул', 3),
  femininePast: Word('повергла', 3),
  neuterPast: Word('повергло', 3),
  pluralPast: Word('повергли', 3),
  imperativeInformal: Word('повергни', 3),
  imperativeFormal: Word('повергните', 3),
  imperfect: [],
};

perfectVerbs.set(повергнуть.name.text, повергнуть);

export { повергнуть };