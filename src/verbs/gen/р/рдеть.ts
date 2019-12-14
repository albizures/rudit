import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рдеть: PerfectVerb = {
  name: Word('рдеть', 2),
  singular1stPerson: Word('рдею', 2),
  singular2ndPerson: Word('рдеешь', 2),
  singular3rdPerson: Word('рдеет', 2),
  plural1stPerson: Word('рдеем', 2),
  plural2ndPerson: Word('рдеете', 2),
  plural3rdPerson: Word('рдеют', 2),
  masculinePast: Word('рдел', 2),
  femininePast: Word('рдела', 2),
  neuterPast: Word('рдело', 2),
  pluralPast: Word('рдели', 2),
  imperativeInformal: Word('рдей', 2),
  imperativeFormal: Word('рдейте', 2),
  imperfect: [],
};

perfectVerbs.set(рдеть.name.text, рдеть);

export { рдеть };