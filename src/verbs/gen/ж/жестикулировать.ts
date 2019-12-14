import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жестикулировать: PerfectVerb = {
  name: Word('жестикулировать', 8),
  singular1stPerson: Word('жестикулирую', 8),
  singular2ndPerson: Word('жестикулируешь', 8),
  singular3rdPerson: Word('жестикулирует', 8),
  plural1stPerson: Word('жестикулируем', 8),
  plural2ndPerson: Word('жестикулируете', 8),
  plural3rdPerson: Word('жестикулируют', 8),
  masculinePast: Word('жестикулировал', 8),
  femininePast: Word('жестикулировала', 8),
  neuterPast: Word('жестикулировало', 8),
  pluralPast: Word('жестикулировали', 8),
  imperativeInformal: Word('жестикулируй', 8),
  imperativeFormal: Word('жестикулируйте', 8),
  imperfect: [],
};

perfectVerbs.set(жестикулировать.name.text, жестикулировать);

export { жестикулировать };