import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const циркулировать: PerfectVerb = {
  name: Word('циркулировать', 6),
  singular1stPerson: Word('циркулирую', 6),
  singular2ndPerson: Word('циркулируешь', 6),
  singular3rdPerson: Word('циркулирует', 6),
  plural1stPerson: Word('циркулируем', 6),
  plural2ndPerson: Word('циркулируете', 6),
  plural3rdPerson: Word('циркулируют', 6),
  masculinePast: Word('циркулировал', 6),
  femininePast: Word('циркулировала', 6),
  neuterPast: Word('циркулировало', 6),
  pluralPast: Word('циркулировали', 6),
  imperativeInformal: Word('циркулируй', 6),
  imperativeFormal: Word('циркулируйте', 6),
  imperfect: [],
};

perfectVerbs.set(циркулировать.name.text, циркулировать);

export { циркулировать };