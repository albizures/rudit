import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкопать: PerfectVerb = {
  name: Word('обкопать', 5),
  singular1stPerson: Word('обкопаю', 5),
  singular2ndPerson: Word('обкопаешь', 5),
  singular3rdPerson: Word('обкопает', 5),
  plural1stPerson: Word('обкопаем', 5),
  plural2ndPerson: Word('обкопаете', 5),
  plural3rdPerson: Word('обкопают', 5),
  masculinePast: Word('обкопал', 5),
  femininePast: Word('обкопала', 5),
  neuterPast: Word('обкопало', 5),
  pluralPast: Word('обкопали', 5),
  imperativeInformal: Word('обкопай', 5),
  imperativeFormal: Word('обкопайте', 5),
  imperfect: [],
};

perfectVerbs.set(обкопать.name.text, обкопать);

export { обкопать };