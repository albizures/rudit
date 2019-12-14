import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подштопать: PerfectVerb = {
  name: Word('подштопать', 5),
  singular1stPerson: Word('подштопаю', 5),
  singular2ndPerson: Word('подштопаешь', 5),
  singular3rdPerson: Word('подштопает', 5),
  plural1stPerson: Word('подштопаем', 5),
  plural2ndPerson: Word('подштопаете', 5),
  plural3rdPerson: Word('подштопают', 5),
  masculinePast: Word('подштопал', 5),
  femininePast: Word('подштопала', 5),
  neuterPast: Word('подштопало', 5),
  pluralPast: Word('подштопали', 5),
  imperativeInformal: Word('подштопай', 5),
  imperativeFormal: Word('подштопайте', 5),
  imperfect: [],
};

perfectVerbs.set(подштопать.name.text, подштопать);

export { подштопать };