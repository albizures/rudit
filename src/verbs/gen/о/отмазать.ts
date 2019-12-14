import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмазать: PerfectVerb = {
  name: Word('отмазать', 3),
  singular1stPerson: Word('отмажу', 3),
  singular2ndPerson: Word('отмажешь', 3),
  singular3rdPerson: Word('отмажет', 3),
  plural1stPerson: Word('отмажем', 3),
  plural2ndPerson: Word('отмажете', 3),
  plural3rdPerson: Word('отмажут', 3),
  masculinePast: Word('отмазал', 3),
  femininePast: Word('отмазала', 3),
  neuterPast: Word('отмазало', 3),
  pluralPast: Word('отмазали', 3),
  imperativeInformal: Word('отмажь', 3),
  imperativeFormal: Word('отмажьте', 3),
  imperfect: [],
};

perfectVerbs.set(отмазать.name.text, отмазать);

export { отмазать };