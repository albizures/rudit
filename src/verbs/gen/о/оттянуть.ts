import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттянуть: PerfectVerb = {
  name: Word('оттянуть', 5),
  singular1stPerson: Word('оттяну', 5),
  singular2ndPerson: Word('оттянешь', 3),
  singular3rdPerson: Word('оттянет', 3),
  plural1stPerson: Word('оттянем', 3),
  plural2ndPerson: Word('оттянете', 3),
  plural3rdPerson: Word('оттянут', 3),
  masculinePast: Word('оттянул', 5),
  femininePast: Word('оттянула', 5),
  neuterPast: Word('оттянуло', 5),
  pluralPast: Word('оттянули', 5),
  imperativeInformal: Word('оттяни', 5),
  imperativeFormal: Word('оттяните', 5),
  imperfect: ['оттягивать'],
};

perfectVerbs.set(оттянуть.name.text, оттянуть);

export { оттянуть };