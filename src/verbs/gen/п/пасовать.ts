import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пасовать: PerfectVerb = {
  name: Word('пасовать', 5),
  singular1stPerson: Word('пасую', 3),
  singular2ndPerson: Word('пасуешь', 3),
  singular3rdPerson: Word('пасует', 3),
  plural1stPerson: Word('пасуем', 3),
  plural2ndPerson: Word('пасуете', 3),
  plural3rdPerson: Word('пасуют', 3),
  masculinePast: Word('пасовал', 5),
  femininePast: Word('пасовала', 5),
  neuterPast: Word('пасовало', 5),
  pluralPast: Word('пасовали', 5),
  imperativeInformal: Word('пасуй', 3),
  imperativeFormal: Word('пасуйте', 3),
  imperfect: [],
};

perfectVerbs.set(пасовать.name.text, пасовать);

export { пасовать };