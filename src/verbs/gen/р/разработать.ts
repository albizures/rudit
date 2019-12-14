import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разработать: PerfectVerb = {
  name: Word('разработать', 6),
  singular1stPerson: Word('разработаю', 6),
  singular2ndPerson: Word('разработаешь', 6),
  singular3rdPerson: Word('разработает', 6),
  plural1stPerson: Word('разработаем', 6),
  plural2ndPerson: Word('разработаете', 6),
  plural3rdPerson: Word('разработают', 6),
  masculinePast: Word('разработал', 6),
  femininePast: Word('разработала', 6),
  neuterPast: Word('разработало', 6),
  pluralPast: Word('разработали', 6),
  imperativeInformal: Word('разработай', 6),
  imperativeFormal: Word('разработайте', 6),
  imperfect: ['разрабатывать'],
};

perfectVerbs.set(разработать.name.text, разработать);

export { разработать };