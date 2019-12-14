import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогорать: PerfectVerb = {
  name: Word('прогорать', 6),
  singular1stPerson: Word('прогораю', 6),
  singular2ndPerson: Word('прогораешь', 6),
  singular3rdPerson: Word('прогорает', 6),
  plural1stPerson: Word('прогораем', 6),
  plural2ndPerson: Word('прогораете', 6),
  plural3rdPerson: Word('прогорают', 6),
  masculinePast: Word('прогорал', 6),
  femininePast: Word('прогорала', 6),
  neuterPast: Word('прогорало', 6),
  pluralPast: Word('прогорали', 6),
  imperativeInformal: Word('прогорай', 6),
  imperativeFormal: Word('прогорайте', 6),
  imperfect: [],
};

perfectVerbs.set(прогорать.name.text, прогорать);

export { прогорать };