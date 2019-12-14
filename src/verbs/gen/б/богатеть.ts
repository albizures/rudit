import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const богатеть: PerfectVerb = {
  name: Word('богатеть', 5),
  singular1stPerson: Word('богатею', 5),
  singular2ndPerson: Word('богатеешь', 5),
  singular3rdPerson: Word('богатеет', 5),
  plural1stPerson: Word('богатеем', 5),
  plural2ndPerson: Word('богатеете', 5),
  plural3rdPerson: Word('богатеют', 5),
  masculinePast: Word('богател', 5),
  femininePast: Word('богатела', 5),
  neuterPast: Word('богатело', 5),
  pluralPast: Word('богатели', 5),
  imperativeInformal: Word('богатей', 5),
  imperativeFormal: Word('богатейте', 5),
  imperfect: [],
};

perfectVerbs.set(богатеть.name.text, богатеть);

export { богатеть };