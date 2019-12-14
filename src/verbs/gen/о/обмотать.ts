import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмотать: PerfectVerb = {
  name: Word('обмотать', 5),
  singular1stPerson: Word('обмотаю', 5),
  singular2ndPerson: Word('обмотаешь', 5),
  singular3rdPerson: Word('обмотает', 5),
  plural1stPerson: Word('обмотаем', 5),
  plural2ndPerson: Word('обмотаете', 5),
  plural3rdPerson: Word('обмотают', 5),
  masculinePast: Word('обмотал', 5),
  femininePast: Word('обмотала', 5),
  neuterPast: Word('обмотало', 5),
  pluralPast: Word('обмотали', 5),
  imperativeInformal: Word('обмотай', 5),
  imperativeFormal: Word('обмотайте', 5),
  imperfect: [],
};

perfectVerbs.set(обмотать.name.text, обмотать);

export { обмотать };