import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заставать: PerfectVerb = {
  name: Word('заставать', 6),
  singular1stPerson: Word('застаю', 5),
  singular2ndPerson: Word('застаёшь', 5),
  singular3rdPerson: Word('застаёт', 5),
  plural1stPerson: Word('застаём', 5),
  plural2ndPerson: Word('застаёте', 5),
  plural3rdPerson: Word('застают', 5),
  masculinePast: Word('заставал', 6),
  femininePast: Word('заставала', 6),
  neuterPast: Word('заставало', 6),
  pluralPast: Word('заставали', 6),
  imperativeInformal: Word('заставай', 6),
  imperativeFormal: Word('заставайте', 6),
  imperfect: [],
};

perfectVerbs.set(заставать.name.text, заставать);

export { заставать };