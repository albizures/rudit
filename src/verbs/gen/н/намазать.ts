import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намазать: PerfectVerb = {
  name: Word('намазать', 3),
  singular1stPerson: Word('намажу', 3),
  singular2ndPerson: Word('намажешь', 3),
  singular3rdPerson: Word('намажет', 3),
  plural1stPerson: Word('намажем', 3),
  plural2ndPerson: Word('намажете', 3),
  plural3rdPerson: Word('намажут', 3),
  masculinePast: Word('намазал', 3),
  femininePast: Word('намазала', 3),
  neuterPast: Word('намазало', 3),
  pluralPast: Word('намазали', 3),
  imperativeInformal: Word('намажь', 3),
  imperativeFormal: Word('намажьте', 3),
  imperfect: [],
};

perfectVerbs.set(намазать.name.text, намазать);

export { намазать };