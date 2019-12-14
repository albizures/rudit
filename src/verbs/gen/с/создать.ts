import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const создать: PerfectVerb = {
  name: Word('создать', 4),
  singular1stPerson: Word('создам', 4),
  singular2ndPerson: Word('создашь', 4),
  singular3rdPerson: Word('создаст', 4),
  plural1stPerson: Word('создадим', 6),
  plural2ndPerson: Word('создадите', 6),
  plural3rdPerson: Word('создадут', 6),
  masculinePast: Word('создал,со'здал', 4),
  femininePast: Word('создала', 6),
  neuterPast: Word('создало,создало'', 4),
  pluralPast: Word('создали,со'здали', 4),
  imperativeInformal: Word('создай', 4),
  imperativeFormal: Word('создайте', 4),
  imperfect: ['создавать'],
};

perfectVerbs.set(создать.name.text, создать);

export { создать };