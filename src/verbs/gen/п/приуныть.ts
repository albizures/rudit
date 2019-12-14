import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приуныть: PerfectVerb = {
  name: Word('приуныть', 5),
  singular1stPerson: Word('приуною', 5),
  singular2ndPerson: Word('приуноешь', 5),
  singular3rdPerson: Word('приуноет', 5),
  plural1stPerson: Word('приуноем', 5),
  plural2ndPerson: Word('приуноете', 5),
  plural3rdPerson: Word('приуноют', 5),
  masculinePast: Word('приуныл', 5),
  femininePast: Word('приуныла', 5),
  neuterPast: Word('приуныло', 5),
  pluralPast: Word('приуныли', 5),
  imperativeInformal: Word('приуной', 5),
  imperativeFormal: Word('приунойте', 5),
  imperfect: [],
};

perfectVerbs.set(приуныть.name.text, приуныть);

export { приуныть };