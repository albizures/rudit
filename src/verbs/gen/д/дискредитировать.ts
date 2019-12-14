import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дискредитировать: PerfectVerb = {
  name: Word('дискредитировать', 9),
  singular1stPerson: Word('дискредитирую', 9),
  singular2ndPerson: Word('дискредитируешь', 9),
  singular3rdPerson: Word('дискредитирует', 9),
  plural1stPerson: Word('дискредитируем', 9),
  plural2ndPerson: Word('дискредитируете', 9),
  plural3rdPerson: Word('дискредитируют', 9),
  masculinePast: Word('дискредитировал', 9),
  femininePast: Word('дискредитировала', 9),
  neuterPast: Word('дискредитировало', 9),
  pluralPast: Word('дискредитировали', 9),
  imperativeInformal: Word('дискредитируй', 9),
  imperativeFormal: Word('дискредитируйте', 9),
  imperfect: [],
};

perfectVerbs.set(дискредитировать.name.text, дискредитировать);

export { дискредитировать };