import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const счищать: PerfectVerb = {
  name: Word('счищать', 4),
  singular1stPerson: Word('счищаю', 4),
  singular2ndPerson: Word('счищаешь', 4),
  singular3rdPerson: Word('счищает', 4),
  plural1stPerson: Word('счищаем', 4),
  plural2ndPerson: Word('счищаете', 4),
  plural3rdPerson: Word('счищают', 4),
  masculinePast: Word('счищал', 4),
  femininePast: Word('счищала', 4),
  neuterPast: Word('счищало', 4),
  pluralPast: Word('счищали', 4),
  imperativeInformal: Word('счищай', 4),
  imperativeFormal: Word('счищайте', 4),
  imperfect: [],
};

perfectVerbs.set(счищать.name.text, счищать);

export { счищать };