import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освящать: PerfectVerb = {
  name: Word('освящать', 5),
  singular1stPerson: Word('освящаю', 5),
  singular2ndPerson: Word('освящаешь', 5),
  singular3rdPerson: Word('освящает', 5),
  plural1stPerson: Word('освящаем', 5),
  plural2ndPerson: Word('освящаете', 5),
  plural3rdPerson: Word('освящают', 5),
  masculinePast: Word('освящал', 5),
  femininePast: Word('освящала', 5),
  neuterPast: Word('освящало', 5),
  pluralPast: Word('освящали', 5),
  imperativeInformal: Word('освящай', 5),
  imperativeFormal: Word('освящайте', 5),
  imperfect: [],
};

perfectVerbs.set(освящать.name.text, освящать);

export { освящать };