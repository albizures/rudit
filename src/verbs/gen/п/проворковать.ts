import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проворковать: PerfectVerb = {
  name: Word('проворковать', 9),
  singular1stPerson: Word('проворкую', 7),
  singular2ndPerson: Word('проворкуешь', 7),
  singular3rdPerson: Word('проворкует', 7),
  plural1stPerson: Word('проворкуем', 7),
  plural2ndPerson: Word('проворкуете', 7),
  plural3rdPerson: Word('проворкуют', 7),
  masculinePast: Word('проворковал', 9),
  femininePast: Word('проворковала', 9),
  neuterPast: Word('проворковало', 9),
  pluralPast: Word('проворковали', 9),
  imperativeInformal: Word('проворкуй', 7),
  imperativeFormal: Word('проворкуйте', 7),
  imperfect: [],
};

perfectVerbs.set(проворковать.name.text, проворковать);

export { проворковать };