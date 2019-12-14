import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избегать: PerfectVerb = {
  name: Word('избегать', 3),
  singular1stPerson: Word('избегаю', 3),
  singular2ndPerson: Word('избегаешь', 3),
  singular3rdPerson: Word('избегает', 3),
  plural1stPerson: Word('избегаем', 3),
  plural2ndPerson: Word('избегаете', 3),
  plural3rdPerson: Word('избегают', 3),
  masculinePast: Word('избегал', 3),
  femininePast: Word('избегала', 3),
  neuterPast: Word('избегало', 3),
  pluralPast: Word('избегали', 3),
  imperativeInformal: Word('избегай', 3),
  imperativeFormal: Word('избегайте', 3),
  imperfect: [],
};

perfectVerbs.set(избегать.name.text, избегать);

export { избегать };