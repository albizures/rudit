import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const деть: PerfectVerb = {
  name: Word('деть', 1),
  singular1stPerson: Word('дену', 1),
  singular2ndPerson: Word('денешь', 1),
  singular3rdPerson: Word('денет', 1),
  plural1stPerson: Word('денем', 1),
  plural2ndPerson: Word('денете', 1),
  plural3rdPerson: Word('денут', 1),
  masculinePast: Word('дел', 1),
  femininePast: Word('дела', 1),
  neuterPast: Word('дело', 1),
  pluralPast: Word('дели', 1),
  imperativeInformal: Word('день', 1),
  imperativeFormal: Word('деньте', 1),
  imperfect: ['девать'],
};

perfectVerbs.set(деть.name.text, деть);

export { деть };