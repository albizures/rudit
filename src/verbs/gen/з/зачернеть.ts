import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачернеть: PerfectVerb = {
  name: Word('зачернеть', 6),
  singular1stPerson: Word('зачернею', 6),
  singular2ndPerson: Word('зачернеешь', 6),
  singular3rdPerson: Word('зачернеет', 6),
  plural1stPerson: Word('зачернеем', 6),
  plural2ndPerson: Word('зачернеете', 6),
  plural3rdPerson: Word('зачернеют', 6),
  masculinePast: Word('зачернел', 6),
  femininePast: Word('зачернела', 6),
  neuterPast: Word('зачернело', 6),
  pluralPast: Word('зачернели', 6),
  imperativeInformal: Word('зачерней', 6),
  imperativeFormal: Word('зачернейте', 6),
  imperfect: [],
};

perfectVerbs.set(зачернеть.name.text, зачернеть);

export { зачернеть };