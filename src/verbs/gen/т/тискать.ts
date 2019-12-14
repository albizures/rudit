import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тискать: PerfectVerb = {
  name: Word('тискать', 1),
  singular1stPerson: Word('тискаю', 1),
  singular2ndPerson: Word('тискаешь', 1),
  singular3rdPerson: Word('тискает', 1),
  plural1stPerson: Word('тискаем', 1),
  plural2ndPerson: Word('тискаете', 1),
  plural3rdPerson: Word('тискают', 1),
  masculinePast: Word('тискал', 1),
  femininePast: Word('тискала', 1),
  neuterPast: Word('тискало', 1),
  pluralPast: Word('тискали', 1),
  imperativeInformal: Word('тискай', 1),
  imperativeFormal: Word('тискайте', 1),
  imperfect: ['тиснуть'],
};

perfectVerbs.set(тискать.name.text, тискать);

export { тискать };