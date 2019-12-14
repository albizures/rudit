import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сшибить: PerfectVerb = {
  name: Word('сшибить', 4),
  singular1stPerson: Word('сшибу', 4),
  singular2ndPerson: Word('сшибёшь', 4),
  singular3rdPerson: Word('сшибёт', 4),
  plural1stPerson: Word('сшибём', 4),
  plural2ndPerson: Word('сшибёте', 4),
  plural3rdPerson: Word('сшибут', 4),
  masculinePast: Word('сшиб', 2),
  femininePast: Word('сшибла', 2),
  neuterPast: Word('сшибло', 2),
  pluralPast: Word('сшибли', 2),
  imperativeInformal: Word('сшиби', 4),
  imperativeFormal: Word('сшибите', 4),
  imperfect: [],
};

perfectVerbs.set(сшибить.name.text, сшибить);

export { сшибить };