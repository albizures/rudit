import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грубеть: PerfectVerb = {
  name: Word('грубеть', 4),
  singular1stPerson: Word('грубею', 4),
  singular2ndPerson: Word('грубеешь', 4),
  singular3rdPerson: Word('грубеет', 4),
  plural1stPerson: Word('грубеем', 4),
  plural2ndPerson: Word('грубеете', 4),
  plural3rdPerson: Word('грубеют', 4),
  masculinePast: Word('грубел', 4),
  femininePast: Word('грубела', 4),
  neuterPast: Word('грубело', 4),
  pluralPast: Word('грубели', 4),
  imperativeInformal: Word('грубей', 4),
  imperativeFormal: Word('грубейте', 4),
  imperfect: [],
};

perfectVerbs.set(грубеть.name.text, грубеть);

export { грубеть };