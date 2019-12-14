import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const седеть: PerfectVerb = {
  name: Word('седеть', 3),
  singular1stPerson: Word('седею', 3),
  singular2ndPerson: Word('седеешь', 3),
  singular3rdPerson: Word('седеет', 3),
  plural1stPerson: Word('седеем', 3),
  plural2ndPerson: Word('седеете', 3),
  plural3rdPerson: Word('седеют', 3),
  masculinePast: Word('седел', 3),
  femininePast: Word('седела', 3),
  neuterPast: Word('седело', 3),
  pluralPast: Word('седели', 3),
  imperativeInformal: Word('седей', 3),
  imperativeFormal: Word('седейте', 3),
  imperfect: [],
};

perfectVerbs.set(седеть.name.text, седеть);

export { седеть };