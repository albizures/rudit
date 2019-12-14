import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удушать: PerfectVerb = {
  name: Word('удушать', 4),
  singular1stPerson: Word('удушаю', 4),
  singular2ndPerson: Word('удушаешь', 4),
  singular3rdPerson: Word('удушает', 4),
  plural1stPerson: Word('удушаем', 4),
  plural2ndPerson: Word('удушаете', 4),
  plural3rdPerson: Word('удушают', 4),
  masculinePast: Word('удушал', 4),
  femininePast: Word('удушала', 4),
  neuterPast: Word('удушало', 4),
  pluralPast: Word('удушали', 4),
  imperativeInformal: Word('удушай', 4),
  imperativeFormal: Word('удушайте', 4),
  imperfect: [],
};

perfectVerbs.set(удушать.name.text, удушать);

export { удушать };