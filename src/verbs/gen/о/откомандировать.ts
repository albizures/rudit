import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откомандировать: PerfectVerb = {
  name: Word('откомандировать', 12),
  singular1stPerson: Word('откомандирую', 10),
  singular2ndPerson: Word('откомандируешь', 10),
  singular3rdPerson: Word('откомандирует', 10),
  plural1stPerson: Word('откомандируем', 10),
  plural2ndPerson: Word('откомандируете', 10),
  plural3rdPerson: Word('откомандируют', 10),
  masculinePast: Word('откомандировал', 12),
  femininePast: Word('откомандировала', 12),
  neuterPast: Word('откомандировало', 12),
  pluralPast: Word('откомандировали', 12),
  imperativeInformal: Word('откомандируй', 10),
  imperativeFormal: Word('откомандируйте', 10),
  imperfect: [],
};

perfectVerbs.set(откомандировать.name.text, откомандировать);

export { откомандировать };