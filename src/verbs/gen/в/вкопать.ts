import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкопать: PerfectVerb = {
  name: Word('вкопать', 4),
  singular1stPerson: Word('вкопаю', 4),
  singular2ndPerson: Word('вкопаешь', 4),
  singular3rdPerson: Word('вкопает', 4),
  plural1stPerson: Word('вкопаем', 4),
  plural2ndPerson: Word('вкопаете', 4),
  plural3rdPerson: Word('вкопают', 4),
  masculinePast: Word('вкопал', 4),
  femininePast: Word('вкопала', 4),
  neuterPast: Word('вкопало', 4),
  pluralPast: Word('вкопали', 4),
  imperativeInformal: Word('вкопай', 4),
  imperativeFormal: Word('вкопайте', 4),
  imperfect: [],
};

perfectVerbs.set(вкопать.name.text, вкопать);

export { вкопать };