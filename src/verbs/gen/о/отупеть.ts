import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отупеть: PerfectVerb = {
  name: Word('отупеть', 4),
  singular1stPerson: Word('отупею', 4),
  singular2ndPerson: Word('отупеешь', 4),
  singular3rdPerson: Word('отупеет', 4),
  plural1stPerson: Word('отупеем', 4),
  plural2ndPerson: Word('отупеете', 4),
  plural3rdPerson: Word('отупеют', 4),
  masculinePast: Word('отупел', 4),
  femininePast: Word('отупела', 4),
  neuterPast: Word('отупело', 4),
  pluralPast: Word('отупели', 4),
  imperativeInformal: Word('отупей', 4),
  imperativeFormal: Word('отупейте', 4),
  imperfect: [],
};

perfectVerbs.set(отупеть.name.text, отупеть);

export { отупеть };