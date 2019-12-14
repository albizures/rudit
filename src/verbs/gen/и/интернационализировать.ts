import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интернационализировать: PerfectVerb = {
  name: Word('интернационализировать', 15),
  singular1stPerson: Word('интернационализирую', 15),
  singular2ndPerson: Word('интернационализируешь', 15),
  singular3rdPerson: Word('интернационализирует', 15),
  plural1stPerson: Word('интернационализируем', 15),
  plural2ndPerson: Word('интернационализируете', 15),
  plural3rdPerson: Word('интернационализируют', 15),
  masculinePast: Word('интернационализировал', 15),
  femininePast: Word('интернационализировала', 15),
  neuterPast: Word('интернационализировало', 15),
  pluralPast: Word('интернационализировали', 15),
  imperativeInformal: Word('интернационализируй', 15),
  imperativeFormal: Word('интернационализируйте', 15),
  imperfect: [],
};

perfectVerbs.set(интернационализировать.name.text, интернационализировать);

export { интернационализировать };