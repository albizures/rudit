import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наработать: PerfectVerb = {
  name: Word('наработать', 5),
  singular1stPerson: Word('наработаю', 5),
  singular2ndPerson: Word('наработаешь', 5),
  singular3rdPerson: Word('наработает', 5),
  plural1stPerson: Word('наработаем', 5),
  plural2ndPerson: Word('наработаете', 5),
  plural3rdPerson: Word('наработают', 5),
  masculinePast: Word('наработал', 5),
  femininePast: Word('наработала', 5),
  neuterPast: Word('наработало', 5),
  pluralPast: Word('наработали', 5),
  imperativeInformal: Word('наработай', 5),
  imperativeFormal: Word('наработайте', 5),
  imperfect: [],
};

perfectVerbs.set(наработать.name.text, наработать);

export { наработать };