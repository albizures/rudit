import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вникать: PerfectVerb = {
  name: Word('вникать', 4),
  singular1stPerson: Word('вникаю', 4),
  singular2ndPerson: Word('вникаешь', 4),
  singular3rdPerson: Word('вникает', 4),
  plural1stPerson: Word('вникаем', 4),
  plural2ndPerson: Word('вникаете', 4),
  plural3rdPerson: Word('вникают', 4),
  masculinePast: Word('вникал', 4),
  femininePast: Word('вникала', 4),
  neuterPast: Word('вникало', 4),
  pluralPast: Word('вникали', 4),
  imperativeInformal: Word('вникай', 4),
  imperativeFormal: Word('вникайте', 4),
  imperfect: [],
};

perfectVerbs.set(вникать.name.text, вникать);

export { вникать };