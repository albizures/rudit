import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обчищать: PerfectVerb = {
  name: Word('обчищать', 5),
  singular1stPerson: Word('обчищаю', 5),
  singular2ndPerson: Word('обчищаешь', 5),
  singular3rdPerson: Word('обчищает', 5),
  plural1stPerson: Word('обчищаем', 5),
  plural2ndPerson: Word('обчищаете', 5),
  plural3rdPerson: Word('обчищают', 5),
  masculinePast: Word('обчищал', 5),
  femininePast: Word('обчищала', 5),
  neuterPast: Word('обчищало', 5),
  pluralPast: Word('обчищали', 5),
  imperativeInformal: Word('обчищай', 5),
  imperativeFormal: Word('обчищайте', 5),
  imperfect: [],
};

perfectVerbs.set(обчищать.name.text, обчищать);

export { обчищать };