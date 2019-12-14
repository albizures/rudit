import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обитать: PerfectVerb = {
  name: Word('обитать', 4),
  singular1stPerson: Word('обитаю', 4),
  singular2ndPerson: Word('обитаешь', 4),
  singular3rdPerson: Word('обитает', 4),
  plural1stPerson: Word('обитаем', 4),
  plural2ndPerson: Word('обитаете', 4),
  plural3rdPerson: Word('обитают', 4),
  masculinePast: Word('обитал', 4),
  femininePast: Word('обитала', 4),
  neuterPast: Word('обитало', 4),
  pluralPast: Word('обитали', 4),
  imperativeInformal: Word('обитай', 4),
  imperativeFormal: Word('обитайте', 4),
  imperfect: [],
};

perfectVerbs.set(обитать.name.text, обитать);

export { обитать };