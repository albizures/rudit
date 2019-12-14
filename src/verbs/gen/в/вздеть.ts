import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вздеть: PerfectVerb = {
  name: Word('вздеть', 3),
  singular1stPerson: Word('вздену', 3),
  singular2ndPerson: Word('взденешь', 3),
  singular3rdPerson: Word('взденет', 3),
  plural1stPerson: Word('взденем', 3),
  plural2ndPerson: Word('взденете', 3),
  plural3rdPerson: Word('взденут', 3),
  masculinePast: Word('вздел', 3),
  femininePast: Word('вздела', 3),
  neuterPast: Word('вздело', 3),
  pluralPast: Word('вздели', 3),
  imperativeInformal: Word('вздень', 3),
  imperativeFormal: Word('взденьте', 3),
  imperfect: [],
};

perfectVerbs.set(вздеть.name.text, вздеть);

export { вздеть };