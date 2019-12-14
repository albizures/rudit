import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшибить: PerfectVerb = {
  name: Word('отшибить', 5),
  singular1stPerson: Word('отшибу', 5),
  singular2ndPerson: Word('отшибёшь', 3),
  singular3rdPerson: Word('отшибёт', 3),
  plural1stPerson: Word('отшибём', 3),
  plural2ndPerson: Word('отшибёте', 7),
  plural3rdPerson: Word('отшибут', 5),
  masculinePast: Word('отшиб', 3),
  femininePast: Word('отшибла', 3),
  neuterPast: Word('отшибло', 3),
  pluralPast: Word('отшибли', 3),
  imperativeInformal: Word('отшиби', 5),
  imperativeFormal: Word('отшибите', 5),
  imperfect: [],
};

perfectVerbs.set(отшибить.name.text, отшибить);

export { отшибить };