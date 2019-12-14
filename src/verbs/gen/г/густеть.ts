import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const густеть: PerfectVerb = {
  name: Word('густеть', 4),
  singular1stPerson: Word('густею', 4),
  singular2ndPerson: Word('густеешь', 4),
  singular3rdPerson: Word('густеет', 4),
  plural1stPerson: Word('густеем', 4),
  plural2ndPerson: Word('густеете', 4),
  plural3rdPerson: Word('густеют', 4),
  masculinePast: Word('густел', 4),
  femininePast: Word('густела', 4),
  neuterPast: Word('густело', 4),
  pluralPast: Word('густели', 4),
  imperativeInformal: Word('густей', 4),
  imperativeFormal: Word('густейте', 4),
  imperfect: [],
};

perfectVerbs.set(густеть.name.text, густеть);

export { густеть };