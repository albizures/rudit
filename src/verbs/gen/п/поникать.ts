import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поникать: PerfectVerb = {
  name: Word('поникать', 5),
  singular1stPerson: Word('поникаю', 5),
  singular2ndPerson: Word('поникаешь', 5),
  singular3rdPerson: Word('поникает', 5),
  plural1stPerson: Word('поникаем', 5),
  plural2ndPerson: Word('поникаете', 5),
  plural3rdPerson: Word('поникают', 5),
  masculinePast: Word('поникал', 5),
  femininePast: Word('поникала', 5),
  neuterPast: Word('поникало', 5),
  pluralPast: Word('поникали', 5),
  imperativeInformal: Word('поникай', 5),
  imperativeFormal: Word('поникайте', 5),
  imperfect: [],
};

perfectVerbs.set(поникать.name.text, поникать);

export { поникать };