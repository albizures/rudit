import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обожать: PerfectVerb = {
  name: Word('обожать', 4),
  singular1stPerson: Word('обожаю', 4),
  singular2ndPerson: Word('обожаешь', 4),
  singular3rdPerson: Word('обожает', 4),
  plural1stPerson: Word('обожаем', 4),
  plural2ndPerson: Word('обожаете', 4),
  plural3rdPerson: Word('обожают', 4),
  masculinePast: Word('обожал', 4),
  femininePast: Word('обожала', 4),
  neuterPast: Word('обожало', 4),
  pluralPast: Word('обожали', 4),
  imperativeInformal: Word('обожай', 4),
  imperativeFormal: Word('обожайте', 4),
  imperfect: [],
};

perfectVerbs.set(обожать.name.text, обожать);

export { обожать };