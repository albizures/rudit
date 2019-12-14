import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окопать: PerfectVerb = {
  name: Word('окопать', 4),
  singular1stPerson: Word('окопаю', 4),
  singular2ndPerson: Word('окопаешь', 4),
  singular3rdPerson: Word('окопает', 4),
  plural1stPerson: Word('окопаем', 4),
  plural2ndPerson: Word('окопаете', 4),
  plural3rdPerson: Word('окопают', 4),
  masculinePast: Word('окопал', 4),
  femininePast: Word('окопала', 4),
  neuterPast: Word('окопало', 4),
  pluralPast: Word('окопали', 4),
  imperativeInformal: Word('окопай', 4),
  imperativeFormal: Word('окопайте', 4),
  imperfect: [],
};

perfectVerbs.set(окопать.name.text, окопать);

export { окопать };