import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выработать: PerfectVerb = {
  name: Word('выработать', 1),
  singular1stPerson: Word('выработаю', 1),
  singular2ndPerson: Word('выработаешь', 1),
  singular3rdPerson: Word('выработает', 1),
  plural1stPerson: Word('выработаем', 1),
  plural2ndPerson: Word('выработаете', 1),
  plural3rdPerson: Word('выработают', 1),
  masculinePast: Word('выработал', 1),
  femininePast: Word('выработала', 1),
  neuterPast: Word('выработало', 1),
  pluralPast: Word('выработали', 1),
  imperativeInformal: Word('выработай', 1),
  imperativeFormal: Word('выработайте', 1),
  imperfect: [],
};

perfectVerbs.set(выработать.name.text, выработать);

export { выработать };