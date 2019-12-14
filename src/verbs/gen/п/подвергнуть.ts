import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвергнуть: PerfectVerb = {
  name: Word('подвергнуть', 4),
  singular1stPerson: Word('подвергну', 4),
  singular2ndPerson: Word('подвергнешь', 4),
  singular3rdPerson: Word('подвергнет', 4),
  plural1stPerson: Word('подвергнем', 4),
  plural2ndPerson: Word('подвергнете', 4),
  plural3rdPerson: Word('подвергнут', 4),
  masculinePast: Word('подверг,подве'ргнул', 4),
  femininePast: Word('подвергла,подве'ргнула', 4),
  neuterPast: Word('подвергло,подве'ргнуло', 4),
  pluralPast: Word('подвергли,подве'ргнули', 4),
  imperativeInformal: Word('подвергни', 4),
  imperativeFormal: Word('подвергните', 4),
  imperfect: ['подвергать'],
};

perfectVerbs.set(подвергнуть.name.text, подвергнуть);

export { подвергнуть };