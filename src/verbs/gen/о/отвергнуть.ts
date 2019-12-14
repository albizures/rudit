import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвергнуть: PerfectVerb = {
  name: Word('отвергнуть', 3),
  singular1stPerson: Word('отвергну', 3),
  singular2ndPerson: Word('отвергнешь', 3),
  singular3rdPerson: Word('отвергнет', 3),
  plural1stPerson: Word('отвергнем', 3),
  plural2ndPerson: Word('отвергнете', 3),
  plural3rdPerson: Word('отвергнут', 3),
  masculinePast: Word('отверг//отве'ргнул', 3),
  femininePast: Word('отвергла', 3),
  neuterPast: Word('отвергло', 3),
  pluralPast: Word('отвергли', 3),
  imperativeInformal: Word('отвергни', 3),
  imperativeFormal: Word('отвергните', 3),
  imperfect: [],
};

perfectVerbs.set(отвергнуть.name.text, отвергнуть);

export { отвергнуть };