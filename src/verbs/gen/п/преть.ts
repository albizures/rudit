import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преть: PerfectVerb = {
  name: Word('преть', 2),
  singular1stPerson: Word('прею', 2),
  singular2ndPerson: Word('преешь', 2),
  singular3rdPerson: Word('преет', 2),
  plural1stPerson: Word('преем', 2),
  plural2ndPerson: Word('преете', 2),
  plural3rdPerson: Word('преют', 2),
  masculinePast: Word('прел', 2),
  femininePast: Word('прела', 2),
  neuterPast: Word('прело', 2),
  pluralPast: Word('прели', 2),
  imperativeInformal: Word('прей', 2),
  imperativeFormal: Word('прейте', 2),
  imperfect: [],
};

perfectVerbs.set(преть.name.text, преть);

export { преть };