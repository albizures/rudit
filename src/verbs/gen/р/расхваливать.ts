import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхваливать: PerfectVerb = {
  name: Word('расхваливать', 5),
  singular1stPerson: Word('расхваливаю', 5),
  singular2ndPerson: Word('расхваливаешь', 5),
  singular3rdPerson: Word('расхваливает', 5),
  plural1stPerson: Word('расхваливаем', 5),
  plural2ndPerson: Word('расхваливаете', 5),
  plural3rdPerson: Word('расхваливают', 5),
  masculinePast: Word('расхваливал', 5),
  femininePast: Word('расхваливала', 5),
  neuterPast: Word('расхваливало', 5),
  pluralPast: Word('расхваливали', 5),
  imperativeInformal: Word('расхваливай', 5),
  imperativeFormal: Word('расхваливайте', 5),
  imperfect: [],
};

perfectVerbs.set(расхваливать.name.text, расхваливать);

export { расхваливать };