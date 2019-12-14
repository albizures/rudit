import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воскликнуть: PerfectVerb = {
  name: Word('воскликнуть', 5),
  singular1stPerson: Word('воскликну', 5),
  singular2ndPerson: Word('воскликнешь', 5),
  singular3rdPerson: Word('воскликнет', 5),
  plural1stPerson: Word('воскликнем', 5),
  plural2ndPerson: Word('воскликнете', 5),
  plural3rdPerson: Word('воскликнут', 5),
  masculinePast: Word('воскликнул', 5),
  femininePast: Word('воскликнула', 5),
  neuterPast: Word('воскликнуло', 5),
  pluralPast: Word('воскликнули', 5),
  imperativeInformal: Word('воскликни', 5),
  imperativeFormal: Word('воскликните', 5),
  imperfect: ['восклицать'],
};

perfectVerbs.set(воскликнуть.name.text, воскликнуть);

export { воскликнуть };