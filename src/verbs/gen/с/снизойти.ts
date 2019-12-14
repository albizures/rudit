import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снизойти: PerfectVerb = {
  name: Word('снизойти', 7),
  singular1stPerson: Word('снизойду', 7),
  singular2ndPerson: Word('снизойдёшь', 7),
  singular3rdPerson: Word('снизойдёт', 7),
  plural1stPerson: Word('снизойдём', 7),
  plural2ndPerson: Word('снизойдёте', 7),
  plural3rdPerson: Word('снизойдут', 7),
  masculinePast: Word('снизошёл', 6),
  femininePast: Word('снизошла', 7),
  neuterPast: Word('снизошло', 7),
  pluralPast: Word('снизошли', 7),
  imperativeInformal: Word('снизойди', 7),
  imperativeFormal: Word('снизойдите', 7),
  imperfect: [],
};

perfectVerbs.set(снизойти.name.text, снизойти);

export { снизойти };