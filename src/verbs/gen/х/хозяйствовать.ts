import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хозяйствовать: PerfectVerb = {
  name: Word('хозяйствовать', 3),
  singular1stPerson: Word('хозяйствую', 3),
  singular2ndPerson: Word('хозяйствуешь', 3),
  singular3rdPerson: Word('хозяйствует', 3),
  plural1stPerson: Word('хозяйствуем', 3),
  plural2ndPerson: Word('хозяйствуете', 3),
  plural3rdPerson: Word('хозяйствуют', 3),
  masculinePast: Word('хозяйствовал', 3),
  femininePast: Word('хозяйствовала', 3),
  neuterPast: Word('хозяйствовало', 3),
  pluralPast: Word('хозяйствовали', 3),
  imperativeInformal: Word('хозяйствуй', 3),
  imperativeFormal: Word('хозяйствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(хозяйствовать.name.text, хозяйствовать);

export { хозяйствовать };