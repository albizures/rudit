import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растолковать: PerfectVerb = {
  name: Word('растолковать', 9),
  singular1stPerson: Word('растолкую', 7),
  singular2ndPerson: Word('растолкуешь', 7),
  singular3rdPerson: Word('растолкует', 7),
  plural1stPerson: Word('растолкуем', 7),
  plural2ndPerson: Word('растолкуете', 7),
  plural3rdPerson: Word('растолкуют', 7),
  masculinePast: Word('растолковал', 9),
  femininePast: Word('растолковала', 9),
  neuterPast: Word('растолковало', 9),
  pluralPast: Word('растолковали', 9),
  imperativeInformal: Word('растолкуй', 7),
  imperativeFormal: Word('растолкуйте', 7),
  imperfect: [],
};

perfectVerbs.set(растолковать.name.text, растолковать);

export { растолковать };