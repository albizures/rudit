import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрезать: PerfectVerb = {
  name: Word('обрезать', 5),
  singular1stPerson: Word('обрезаю', 5),
  singular2ndPerson: Word('обрезаешь', 5),
  singular3rdPerson: Word('обрезает', 5),
  plural1stPerson: Word('обрезаем', 5),
  plural2ndPerson: Word('обрезаете', 5),
  plural3rdPerson: Word('обрезают', 5),
  masculinePast: Word('обрезал', 5),
  femininePast: Word('обрезала', 5),
  neuterPast: Word('обрезало', 5),
  pluralPast: Word('обрезали', 5),
  imperativeInformal: Word('обрезай', 5),
  imperativeFormal: Word('обрезайте', 5),
  imperfect: [],
};

perfectVerbs.set(обрезать.name.text, обрезать);

export { обрезать };