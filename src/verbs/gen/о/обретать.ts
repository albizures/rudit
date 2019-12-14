import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обретать: PerfectVerb = {
  name: Word('обретать', 5),
  singular1stPerson: Word('обретаю', 5),
  singular2ndPerson: Word('обретаешь', 5),
  singular3rdPerson: Word('обретает', 5),
  plural1stPerson: Word('обретаем', 5),
  plural2ndPerson: Word('обретаете', 5),
  plural3rdPerson: Word('обретают', 5),
  masculinePast: Word('обретал', 5),
  femininePast: Word('обретала', 5),
  neuterPast: Word('обретало', 5),
  pluralPast: Word('обретали', 5),
  imperativeInformal: Word('обретай', 5),
  imperativeFormal: Word('обретайте', 5),
  imperfect: [],
};

perfectVerbs.set(обретать.name.text, обретать);

export { обретать };