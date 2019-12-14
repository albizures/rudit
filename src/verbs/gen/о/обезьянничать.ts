import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезьянничать: PerfectVerb = {
  name: Word('обезьянничать', 5),
  singular1stPerson: Word('обезьянничаю', 5),
  singular2ndPerson: Word('обезьянничаешь', 5),
  singular3rdPerson: Word('обезьянничает', 5),
  plural1stPerson: Word('обезьянничаем', 5),
  plural2ndPerson: Word('обезьянничаете', 5),
  plural3rdPerson: Word('обезьянничают', 5),
  masculinePast: Word('обезьянничал', 5),
  femininePast: Word('обезьянничала', 5),
  neuterPast: Word('обезьянничало', 5),
  pluralPast: Word('обезьянничали', 5),
  imperativeInformal: Word('обезьянничай', 5),
  imperativeFormal: Word('обезьянничайте', 5),
  imperfect: ['собезьянничать'],
};

perfectVerbs.set(обезьянничать.name.text, обезьянничать);

export { обезьянничать };