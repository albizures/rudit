import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потянуть: PerfectVerb = {
  name: Word('потянуть', 5),
  singular1stPerson: Word('потяну', 5),
  singular2ndPerson: Word('потянешь', 3),
  singular3rdPerson: Word('потянет', 3),
  plural1stPerson: Word('потянем', 3),
  plural2ndPerson: Word('потянете', 3),
  plural3rdPerson: Word('потянут', 3),
  masculinePast: Word('потянул', 5),
  femininePast: Word('потянула', 5),
  neuterPast: Word('потянуло', 5),
  pluralPast: Word('потянули', 5),
  imperativeInformal: Word('потяни', 5),
  imperativeFormal: Word('потяните', 5),
  imperfect: [],
};

perfectVerbs.set(потянуть.name.text, потянуть);

export { потянуть };