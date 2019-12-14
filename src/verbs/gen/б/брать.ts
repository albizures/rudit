import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const брать: PerfectVerb = {
  name: Word('брать', 2),
  singular1stPerson: Word('беру', 3),
  singular2ndPerson: Word('берёшь', 1),
  singular3rdPerson: Word('берёт', 1),
  plural1stPerson: Word('берём', 1),
  plural2ndPerson: Word('берёте', 1),
  plural3rdPerson: Word('берут', 3),
  masculinePast: Word('брал', 2),
  femininePast: Word('брала', 4),
  neuterPast: Word('брало', 2),
  pluralPast: Word('брали', 2),
  imperativeInformal: Word('бери', 3),
  imperativeFormal: Word('берите', 3),
  imperfect: ['взять'],
};

perfectVerbs.set(брать.name.text, брать);

export { брать };