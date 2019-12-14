import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const агитировать: PerfectVerb = {
  name: Word('агитировать', 4),
  singular1stPerson: Word('агитирую', 4),
  singular2ndPerson: Word('агитируешь', 4),
  singular3rdPerson: Word('агитирует', 4),
  plural1stPerson: Word('агитируем', 4),
  plural2ndPerson: Word('агитируете', 4),
  plural3rdPerson: Word('агитируют', 4),
  masculinePast: Word('агитировал', 4),
  femininePast: Word('агитировала', 4),
  neuterPast: Word('агитировало', 4),
  pluralPast: Word('агитировали', 4),
  imperativeInformal: Word('агитируй', 4),
  imperativeFormal: Word('агитируйте', 4),
  imperfect: ['сагитировать'],
};

perfectVerbs.set(агитировать.name.text, агитировать);

export { агитировать };