import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const буйствовать: PerfectVerb = {
  name: Word('буйствовать', 1),
  singular1stPerson: Word('буйствую', 1),
  singular2ndPerson: Word('буйствуешь', 1),
  singular3rdPerson: Word('буйствует', 1),
  plural1stPerson: Word('буйствуем', 1),
  plural2ndPerson: Word('буйствуете', 1),
  plural3rdPerson: Word('буйствуют', 1),
  masculinePast: Word('буйствовал', 1),
  femininePast: Word('буйствовала', 1),
  neuterPast: Word('буйствовало', 1),
  pluralPast: Word('буйствовали', 1),
  imperativeInformal: Word('буйствуй', 1),
  imperativeFormal: Word('буйствуйте', 1),
  imperfect: [],
};

perfectVerbs.set(буйствовать.name.text, буйствовать);

export { буйствовать };