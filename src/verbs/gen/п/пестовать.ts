import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пестовать: PerfectVerb = {
  name: Word('пестовать', 1),
  singular1stPerson: Word('пестую', 1),
  singular2ndPerson: Word('пестуешь', 1),
  singular3rdPerson: Word('пестует', 1),
  plural1stPerson: Word('пестуем', 1),
  plural2ndPerson: Word('пестуете', 1),
  plural3rdPerson: Word('пестуют', 1),
  masculinePast: Word('пестовал', 1),
  femininePast: Word('пестовала', 1),
  neuterPast: Word('пестовало', 1),
  pluralPast: Word('пестовали', 1),
  imperativeInformal: Word('пестуй', 1),
  imperativeFormal: Word('пестуйте', 1),
  imperfect: [],
};

perfectVerbs.set(пестовать.name.text, пестовать);

export { пестовать };