import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пьянеть: PerfectVerb = {
  name: Word('пьянеть', 4),
  singular1stPerson: Word('пьянею', 4),
  singular2ndPerson: Word('пьянеешь', 4),
  singular3rdPerson: Word('пьянеет', 4),
  plural1stPerson: Word('пьянеем', 4),
  plural2ndPerson: Word('пьянеете', 4),
  plural3rdPerson: Word('пьянеют', 4),
  masculinePast: Word('пьянел', 4),
  femininePast: Word('пьянела', 4),
  neuterPast: Word('пьянело', 4),
  pluralPast: Word('пьянели', 4),
  imperativeInformal: Word('пьяней', 4),
  imperativeFormal: Word('пьянейте', 4),
  imperfect: [],
};

perfectVerbs.set(пьянеть.name.text, пьянеть);

export { пьянеть };