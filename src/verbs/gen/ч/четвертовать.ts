import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const четвертовать: PerfectVerb = {
  name: Word('четвертовать', 9),
  singular1stPerson: Word('четвертую', 7),
  singular2ndPerson: Word('четвертуешь', 7),
  singular3rdPerson: Word('четвертует', 7),
  plural1stPerson: Word('четвертуем', 7),
  plural2ndPerson: Word('четвертуете', 7),
  plural3rdPerson: Word('четвертуют', 7),
  masculinePast: Word('четвертовал', 9),
  femininePast: Word('четвертовала', 9),
  neuterPast: Word('четвертовало', 9),
  pluralPast: Word('четвертовали', 9),
  imperativeInformal: Word('четвертуй', 7),
  imperativeFormal: Word('четвертуйте', 7),
  imperfect: [],
};

perfectVerbs.set(четвертовать.name.text, четвертовать);

export { четвертовать };