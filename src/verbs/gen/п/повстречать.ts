import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повстречать: PerfectVerb = {
  name: Word('повстречать', 8),
  singular1stPerson: Word('повстречаю', 8),
  singular2ndPerson: Word('повстречаешь', 8),
  singular3rdPerson: Word('повстречает', 8),
  plural1stPerson: Word('повстречаем', 8),
  plural2ndPerson: Word('повстречаете', 8),
  plural3rdPerson: Word('повстречают', 8),
  masculinePast: Word('повстречал', 8),
  femininePast: Word('повстречала', 8),
  neuterPast: Word('повстречало', 8),
  pluralPast: Word('повстречали', 8),
  imperativeInformal: Word('повстречай', 8),
  imperativeFormal: Word('повстречайте', 8),
  imperfect: [],
};

perfectVerbs.set(повстречать.name.text, повстречать);

export { повстречать };