import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсылать: PerfectVerb = {
  name: Word('подсылать', 6),
  singular1stPerson: Word('подсылаю', 6),
  singular2ndPerson: Word('подсылаешь', 6),
  singular3rdPerson: Word('подсылает', 6),
  plural1stPerson: Word('подсылаем', 6),
  plural2ndPerson: Word('подсылаете', 6),
  plural3rdPerson: Word('подсылают', 6),
  masculinePast: Word('подсылал', 6),
  femininePast: Word('подсылала', 6),
  neuterPast: Word('подсылало', 6),
  pluralPast: Word('подсылали', 6),
  imperativeInformal: Word('подсылай', 6),
  imperativeFormal: Word('подсылайте', 6),
  imperfect: [],
};

perfectVerbs.set(подсылать.name.text, подсылать);

export { подсылать };