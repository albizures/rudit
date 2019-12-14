import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замарать: PerfectVerb = {
  name: Word('замарать', 5),
  singular1stPerson: Word('замараю', 5),
  singular2ndPerson: Word('замараешь', 5),
  singular3rdPerson: Word('замарает', 5),
  plural1stPerson: Word('замараем', 5),
  plural2ndPerson: Word('замараете', 5),
  plural3rdPerson: Word('замарают', 5),
  masculinePast: Word('замарал', 5),
  femininePast: Word('замарала', 5),
  neuterPast: Word('замарало', 5),
  pluralPast: Word('замарали', 5),
  imperativeInformal: Word('замарай', 5),
  imperativeFormal: Word('замарайте', 5),
  imperfect: [],
};

perfectVerbs.set(замарать.name.text, замарать);

export { замарать };