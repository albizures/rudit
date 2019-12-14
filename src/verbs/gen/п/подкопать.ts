import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкопать: PerfectVerb = {
  name: Word('подкопать', 6),
  singular1stPerson: Word('подкопаю', 6),
  singular2ndPerson: Word('подкопаешь', 6),
  singular3rdPerson: Word('подкопает', 6),
  plural1stPerson: Word('подкопаем', 6),
  plural2ndPerson: Word('подкопаете', 6),
  plural3rdPerson: Word('подкопают', 6),
  masculinePast: Word('подкопал', 6),
  femininePast: Word('подкопала', 6),
  neuterPast: Word('подкопало', 6),
  pluralPast: Word('подкопали', 6),
  imperativeInformal: Word('подкопай', 6),
  imperativeFormal: Word('подкопайте', 6),
  imperfect: [],
};

perfectVerbs.set(подкопать.name.text, подкопать);

export { подкопать };