import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const характеризовать: PerfectVerb = {
  name: Word('характеризовать', 12),
  singular1stPerson: Word('характеризую', 10),
  singular2ndPerson: Word('характеризуешь', 10),
  singular3rdPerson: Word('характеризует', 10),
  plural1stPerson: Word('характеризуем', 10),
  plural2ndPerson: Word('характеризуете', 10),
  plural3rdPerson: Word('характеризуют', 10),
  masculinePast: Word('характеризовал', 12),
  femininePast: Word('характеризовала', 12),
  neuterPast: Word('характеризовало', 12),
  pluralPast: Word('характеризовали', 12),
  imperativeInformal: Word('характеризуй', 10),
  imperativeFormal: Word('характеризуйте', 10),
  imperfect: [],
};

perfectVerbs.set(характеризовать.name.text, характеризовать);

export { характеризовать };