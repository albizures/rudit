import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обработать: PerfectVerb = {
  name: Word('обработать', 5),
  singular1stPerson: Word('обработаю', 5),
  singular2ndPerson: Word('обработаешь', 5),
  singular3rdPerson: Word('обработает', 5),
  plural1stPerson: Word('обработаем', 5),
  plural2ndPerson: Word('обработаете', 5),
  plural3rdPerson: Word('обработают', 5),
  masculinePast: Word('обработал', 5),
  femininePast: Word('обработала', 5),
  neuterPast: Word('обработало', 5),
  pluralPast: Word('обработали', 5),
  imperativeInformal: Word('обработай', 5),
  imperativeFormal: Word('обработайте', 5),
  imperfect: [],
};

perfectVerbs.set(обработать.name.text, обработать);

export { обработать };