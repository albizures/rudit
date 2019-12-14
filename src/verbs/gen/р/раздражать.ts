import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздражать: PerfectVerb = {
  name: Word('раздражать', 7),
  singular1stPerson: Word('раздражаю', 7),
  singular2ndPerson: Word('раздражаешь', 7),
  singular3rdPerson: Word('раздражает', 7),
  plural1stPerson: Word('раздражаем', 7),
  plural2ndPerson: Word('раздражаете', 7),
  plural3rdPerson: Word('раздражают', 7),
  masculinePast: Word('раздражал', 7),
  femininePast: Word('раздражала', 7),
  neuterPast: Word('раздражало', 7),
  pluralPast: Word('раздражали', 7),
  imperativeInformal: Word('раздражай', 7),
  imperativeFormal: Word('раздражайте', 7),
  imperfect: ['раздражить'],
};

perfectVerbs.set(раздражать.name.text, раздражать);

export { раздражать };