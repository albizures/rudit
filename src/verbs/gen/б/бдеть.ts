import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бдеть: PerfectVerb = {
  name: Word('бдеть', 2),
  singular1stPerson: Word('бжу', 2),
  singular2ndPerson: Word('бдишь', 2),
  singular3rdPerson: Word('бдит', 2),
  plural1stPerson: Word('бдим', 2),
  plural2ndPerson: Word('бдите', 2),
  plural3rdPerson: Word('бдят', 2),
  masculinePast: Word('бдел', 2),
  femininePast: Word('бдела', 2),
  neuterPast: Word('бдело', 2),
  pluralPast: Word('бдели', 2),
  imperativeInformal: Word('бди', 2),
  imperativeFormal: Word('бдите', 2),
  imperfect: [],
};

perfectVerbs.set(бдеть.name.text, бдеть);

export { бдеть };