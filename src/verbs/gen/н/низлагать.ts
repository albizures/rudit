import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const низлагать: PerfectVerb = {
  name: Word('низлагать', 6),
  singular1stPerson: Word('низлагаю', 6),
  singular2ndPerson: Word('низлагаешь', 6),
  singular3rdPerson: Word('низлагает', 6),
  plural1stPerson: Word('низлагаем', 6),
  plural2ndPerson: Word('низлагаете', 6),
  plural3rdPerson: Word('низлагают', 6),
  masculinePast: Word('низлагал', 6),
  femininePast: Word('низлагала', 6),
  neuterPast: Word('низлагало', 6),
  pluralPast: Word('низлагали', 6),
  imperativeInformal: Word('низлагай', 6),
  imperativeFormal: Word('низлагайте', 6),
  imperfect: [],
};

perfectVerbs.set(низлагать.name.text, низлагать);

export { низлагать };