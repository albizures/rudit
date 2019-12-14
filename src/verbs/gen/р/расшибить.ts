import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшибить: PerfectVerb = {
  name: Word('расшибить', 6),
  singular1stPerson: Word('расшибу', 6),
  singular2ndPerson: Word('расшибёшь', 6),
  singular3rdPerson: Word('расшибёт', 6),
  plural1stPerson: Word('расшибём', 6),
  plural2ndPerson: Word('расшибёте', 6),
  plural3rdPerson: Word('расшибут', 6),
  masculinePast: Word('расшиб', 4),
  femininePast: Word('расшибла', 4),
  neuterPast: Word('расшибло', 4),
  pluralPast: Word('расшибли', 4),
  imperativeInformal: Word('расшиби', 6),
  imperativeFormal: Word('расшибите', 6),
  imperfect: [],
};

perfectVerbs.set(расшибить.name.text, расшибить);

export { расшибить };