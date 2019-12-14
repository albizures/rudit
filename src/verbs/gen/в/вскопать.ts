import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскопать: PerfectVerb = {
  name: Word('вскопать', 5),
  singular1stPerson: Word('вскопаю', 5),
  singular2ndPerson: Word('вскопаешь', 5),
  singular3rdPerson: Word('вскопает', 5),
  plural1stPerson: Word('вскопаем', 5),
  plural2ndPerson: Word('вскопаете', 5),
  plural3rdPerson: Word('вскопают', 5),
  masculinePast: Word('вскопал', 5),
  femininePast: Word('вскопала', 5),
  neuterPast: Word('вскопало', 5),
  pluralPast: Word('вскопали', 5),
  imperativeInformal: Word('вскопай', 5),
  imperativeFormal: Word('вскопайте', 5),
  imperfect: [],
};

perfectVerbs.set(вскопать.name.text, вскопать);

export { вскопать };