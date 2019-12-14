import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашибить: PerfectVerb = {
  name: Word('зашибить', 5),
  singular1stPerson: Word('зашибу', 5),
  singular2ndPerson: Word('зашибёшь', 5),
  singular3rdPerson: Word('зашибёт', 5),
  plural1stPerson: Word('зашибём', 5),
  plural2ndPerson: Word('зашибёте', 5),
  plural3rdPerson: Word('зашибут', 5),
  masculinePast: Word('зашиб', 3),
  femininePast: Word('зашибла', 3),
  neuterPast: Word('зашибло', 3),
  pluralPast: Word('зашибли', 3),
  imperativeInformal: Word('зашиби', 5),
  imperativeFormal: Word('зашибите', 5),
  imperfect: [],
};

perfectVerbs.set(зашибить.name.text, зашибить);

export { зашибить };