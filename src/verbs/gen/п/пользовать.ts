import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пользовать: PerfectVerb = {
  name: Word('пользовать', 1),
  singular1stPerson: Word('пользую', 1),
  singular2ndPerson: Word('пользуешь', 1),
  singular3rdPerson: Word('пользует', 1),
  plural1stPerson: Word('пользуем', 1),
  plural2ndPerson: Word('пользуете', 1),
  plural3rdPerson: Word('пользуют', 1),
  masculinePast: Word('пользовал', 1),
  femininePast: Word('пользовала', 1),
  neuterPast: Word('пользовало', 1),
  pluralPast: Word('пользовали', 1),
  imperativeInformal: Word('пользуй', 1),
  imperativeFormal: Word('пользуйте', 1),
  imperfect: [],
};

perfectVerbs.set(пользовать.name.text, пользовать);

export { пользовать };