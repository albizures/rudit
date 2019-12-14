import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поработать: PerfectVerb = {
  name: Word('поработать', 5),
  singular1stPerson: Word('поработаю', 5),
  singular2ndPerson: Word('поработаешь', 5),
  singular3rdPerson: Word('поработает', 5),
  plural1stPerson: Word('поработаем', 5),
  plural2ndPerson: Word('поработаете', 5),
  plural3rdPerson: Word('поработают', 5),
  masculinePast: Word('поработал', 5),
  femininePast: Word('поработала', 5),
  neuterPast: Word('поработало', 5),
  pluralPast: Word('поработали', 5),
  imperativeInformal: Word('поработай', 5),
  imperativeFormal: Word('поработайте', 5),
  imperfect: [],
};

perfectVerbs.set(поработать.name.text, поработать);

export { поработать };