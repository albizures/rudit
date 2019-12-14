import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсусоливать: PerfectVerb = {
  name: Word('обсусоливать', 5),
  singular1stPerson: Word('обсусоливаю', 5),
  singular2ndPerson: Word('обсусоливаешь', 5),
  singular3rdPerson: Word('обсусоливает', 5),
  plural1stPerson: Word('обсусоливаем', 5),
  plural2ndPerson: Word('обсусоливаете', 5),
  plural3rdPerson: Word('обсусоливают', 5),
  masculinePast: Word('обсусоливал', 5),
  femininePast: Word('обсусоливала', 5),
  neuterPast: Word('обсусоливало', 5),
  pluralPast: Word('обсусоливали', 5),
  imperativeInformal: Word('обсусоливай', 5),
  imperativeFormal: Word('обсусоливайте', 5),
  imperfect: [],
};

perfectVerbs.set(обсусоливать.name.text, обсусоливать);

export { обсусоливать };