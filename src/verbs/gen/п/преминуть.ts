import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преминуть: PerfectVerb = {
  name: Word('преминуть', 4),
  singular1stPerson: Word('премину', 4),
  singular2ndPerson: Word('преминешь', 4),
  singular3rdPerson: Word('преминет', 4),
  plural1stPerson: Word('преминем', 4),
  plural2ndPerson: Word('преминете', 4),
  plural3rdPerson: Word('преминут', 4),
  masculinePast: Word('преминул', 4),
  femininePast: Word('преминула', 4),
  neuterPast: Word('преминуло', 4),
  pluralPast: Word('преминули', 4),
  imperativeInformal: Word('преминь', 4),
  imperativeFormal: Word('преминьте', 4),
  imperfect: [],
};

perfectVerbs.set(преминуть.name.text, преминуть);

export { преминуть };