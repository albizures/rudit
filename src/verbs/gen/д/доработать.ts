import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доработать: PerfectVerb = {
  name: Word('доработать', 5),
  singular1stPerson: Word('доработаю', 5),
  singular2ndPerson: Word('доработаешь', 5),
  singular3rdPerson: Word('доработает', 5),
  plural1stPerson: Word('доработаем', 5),
  plural2ndPerson: Word('доработаете', 5),
  plural3rdPerson: Word('доработают', 5),
  masculinePast: Word('доработал', 5),
  femininePast: Word('доработала', 5),
  neuterPast: Word('доработало', 5),
  pluralPast: Word('доработали', 5),
  imperativeInformal: Word('доработай', 5),
  imperativeFormal: Word('доработайте', 5),
  imperfect: [],
};

perfectVerbs.set(доработать.name.text, доработать);

export { доработать };