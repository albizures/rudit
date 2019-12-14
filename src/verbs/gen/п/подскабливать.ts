import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подскабливать: PerfectVerb = {
  name: Word('подскабливать', 5),
  singular1stPerson: Word('подскабливаю', 5),
  singular2ndPerson: Word('подскабливаешь', 5),
  singular3rdPerson: Word('подскабливает', 5),
  plural1stPerson: Word('подскабливаем', 5),
  plural2ndPerson: Word('подскабливаете', 5),
  plural3rdPerson: Word('подскабливают', 5),
  masculinePast: Word('подскабливал', 5),
  femininePast: Word('подскабливала', 5),
  neuterPast: Word('подскабливало', 5),
  pluralPast: Word('подскабливали', 5),
  imperativeInformal: Word('подскабливай', 5),
  imperativeFormal: Word('подскабливайте', 5),
  imperfect: [],
};

perfectVerbs.set(подскабливать.name.text, подскабливать);

export { подскабливать };