import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измарать: PerfectVerb = {
  name: Word('измарать', 5),
  singular1stPerson: Word('измараю', 5),
  singular2ndPerson: Word('измараешь', 5),
  singular3rdPerson: Word('измарает', 5),
  plural1stPerson: Word('измараем', 5),
  plural2ndPerson: Word('измараете', 5),
  plural3rdPerson: Word('измарают', 5),
  masculinePast: Word('измарал', 5),
  femininePast: Word('измарала', 5),
  neuterPast: Word('измарало', 5),
  pluralPast: Word('измарали', 5),
  imperativeInformal: Word('измарай', 5),
  imperativeFormal: Word('измарайте', 5),
  imperfect: [],
};

perfectVerbs.set(измарать.name.text, измарать);

export { измарать };