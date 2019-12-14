import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провоцировать: PerfectVerb = {
  name: Word('провоцировать', 6),
  singular1stPerson: Word('провоцирую', 6),
  singular2ndPerson: Word('провоцируешь', 6),
  singular3rdPerson: Word('провоцирует', 6),
  plural1stPerson: Word('провоцируем', 6),
  plural2ndPerson: Word('провоцируете', 6),
  plural3rdPerson: Word('провоцируют', 6),
  masculinePast: Word('провоцировал', 6),
  femininePast: Word('провоцировала', 6),
  neuterPast: Word('провоцировало', 6),
  pluralPast: Word('провоцировали', 6),
  imperativeInformal: Word('провоцируй', 6),
  imperativeFormal: Word('провоцируйте', 6),
  imperfect: [],
};

perfectVerbs.set(провоцировать.name.text, провоцировать);

export { провоцировать };