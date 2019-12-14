import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отработать: PerfectVerb = {
  name: Word('отработать', 5),
  singular1stPerson: Word('отработаю', 5),
  singular2ndPerson: Word('отработаешь', 5),
  singular3rdPerson: Word('отработает', 5),
  plural1stPerson: Word('отработаем', 5),
  plural2ndPerson: Word('отработаете', 5),
  plural3rdPerson: Word('отработают', 5),
  masculinePast: Word('отработал', 5),
  femininePast: Word('отработала', 5),
  neuterPast: Word('отработало', 5),
  pluralPast: Word('отработали', 5),
  imperativeInformal: Word('отработай', 5),
  imperativeFormal: Word('отработайте', 5),
  imperfect: [],
};

perfectVerbs.set(отработать.name.text, отработать);

export { отработать };