import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интернировать: PerfectVerb = {
  name: Word('интернировать', 6),
  singular1stPerson: Word('интернирую', 6),
  singular2ndPerson: Word('интернируешь', 6),
  singular3rdPerson: Word('интернирует', 6),
  plural1stPerson: Word('интернируем', 6),
  plural2ndPerson: Word('интернируете', 6),
  plural3rdPerson: Word('интернируют', 6),
  masculinePast: Word('интернировал', 6),
  femininePast: Word('интернировала', 6),
  neuterPast: Word('интернировало', 6),
  pluralPast: Word('интернировали', 6),
  imperativeInformal: Word('интернируй', 6),
  imperativeFormal: Word('интернируйте', 6),
  imperfect: [],
};

perfectVerbs.set(интернировать.name.text, интернировать);

export { интернировать };