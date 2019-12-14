import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпростать: PerfectVerb = {
  name: Word('выпростать', 1),
  singular1stPerson: Word('выпростаю', 1),
  singular2ndPerson: Word('выпростаешь', 1),
  singular3rdPerson: Word('выпростает', 1),
  plural1stPerson: Word('выпростаем', 1),
  plural2ndPerson: Word('выпростаете', 1),
  plural3rdPerson: Word('выпростают', 1),
  masculinePast: Word('выпростал', 1),
  femininePast: Word('выпростала', 1),
  neuterPast: Word('выпростало', 1),
  pluralPast: Word('выпростали', 1),
  imperativeInformal: Word('выпростай', 1),
  imperativeFormal: Word('выпростайте', 1),
  imperfect: [],
};

perfectVerbs.set(выпростать.name.text, выпростать);

export { выпростать };