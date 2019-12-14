import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закипать: PerfectVerb = {
  name: Word('закипать', 5),
  singular1stPerson: Word('закипаю', 5),
  singular2ndPerson: Word('закипаешь', 5),
  singular3rdPerson: Word('закипает', 5),
  plural1stPerson: Word('закипаем', 5),
  plural2ndPerson: Word('закипаете', 5),
  plural3rdPerson: Word('закипают', 5),
  masculinePast: Word('закипал', 5),
  femininePast: Word('закипала', 5),
  neuterPast: Word('закипало', 5),
  pluralPast: Word('закипали', 5),
  imperativeInformal: Word('закипай', 5),
  imperativeFormal: Word('закипайте', 5),
  imperfect: [],
};

perfectVerbs.set(закипать.name.text, закипать);

export { закипать };