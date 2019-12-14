import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запугать: PerfectVerb = {
  name: Word('запугать', 5),
  singular1stPerson: Word('запугаю', 5),
  singular2ndPerson: Word('запугаешь', 5),
  singular3rdPerson: Word('запугает', 5),
  plural1stPerson: Word('запугаем', 5),
  plural2ndPerson: Word('запугаете', 5),
  plural3rdPerson: Word('запугают', 5),
  masculinePast: Word('запугал', 5),
  femininePast: Word('запугала', 5),
  neuterPast: Word('запугало', 5),
  pluralPast: Word('запугали', 5),
  imperativeInformal: Word('запугай', 5),
  imperativeFormal: Word('запугайте', 5),
  imperfect: [],
};

perfectVerbs.set(запугать.name.text, запугать);

export { запугать };