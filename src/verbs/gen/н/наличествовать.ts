import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наличествовать: PerfectVerb = {
  name: Word('наличествовать', 3),
  singular1stPerson: Word('наличествую', 3),
  singular2ndPerson: Word('наличествуешь', 3),
  singular3rdPerson: Word('наличествует', 3),
  plural1stPerson: Word('наличествуем', 3),
  plural2ndPerson: Word('наличествуете', 3),
  plural3rdPerson: Word('наличествуют', 3),
  masculinePast: Word('наличествовал', 3),
  femininePast: Word('наличествовала', 3),
  neuterPast: Word('наличествовало', 3),
  pluralPast: Word('наличествовали', 3),
  imperativeInformal: Word('наличествуй', 3),
  imperativeFormal: Word('наличествуйте', 3),
  imperfect: [],
};

perfectVerbs.set(наличествовать.name.text, наличествовать);

export { наличествовать };