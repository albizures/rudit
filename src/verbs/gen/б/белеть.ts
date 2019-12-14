import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const белеть: PerfectVerb = {
  name: Word('белеть', 3),
  singular1stPerson: Word('белею', 3),
  singular2ndPerson: Word('белеешь', 3),
  singular3rdPerson: Word('белеет', 3),
  plural1stPerson: Word('белеем', 3),
  plural2ndPerson: Word('белеете', 3),
  plural3rdPerson: Word('белеют', 3),
  masculinePast: Word('белел', 3),
  femininePast: Word('белела', 3),
  neuterPast: Word('белело', 3),
  pluralPast: Word('белели', 3),
  imperativeInformal: Word('белей', 3),
  imperativeFormal: Word('белейте', 3),
  imperfect: [],
};

perfectVerbs.set(белеть.name.text, белеть);

export { белеть };