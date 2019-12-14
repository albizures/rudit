import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обучать: PerfectVerb = {
  name: Word('обучать', 4),
  singular1stPerson: Word('обучаю', 4),
  singular2ndPerson: Word('обучаешь', 4),
  singular3rdPerson: Word('обучает', 4),
  plural1stPerson: Word('обучаем', 4),
  plural2ndPerson: Word('обучаете', 4),
  plural3rdPerson: Word('обучают', 4),
  masculinePast: Word('обучал', 4),
  femininePast: Word('обучала', 4),
  neuterPast: Word('обучало', 4),
  pluralPast: Word('обучали', 4),
  imperativeInformal: Word('обучай', 4),
  imperativeFormal: Word('обучайте', 4),
  imperfect: ['обучить'],
};

perfectVerbs.set(обучать.name.text, обучать);

export { обучать };