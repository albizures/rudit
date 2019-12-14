import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загнить: PerfectVerb = {
  name: Word('загнить', 4),
  singular1stPerson: Word('загнию', 5),
  singular2ndPerson: Word('загниёшь', 5),
  singular3rdPerson: Word('загниёт', 5),
  plural1stPerson: Word('загниём', 5),
  plural2ndPerson: Word('загниёте', 5),
  plural3rdPerson: Word('загниют', 5),
  masculinePast: Word('загнил', 4),
  femininePast: Word('загнила', 6),
  neuterPast: Word('загнило', 4),
  pluralPast: Word('загнили', 4),
  imperativeInformal: Word('загний', 1),
  imperativeFormal: Word('загнийте', 1),
  imperfect: [],
};

perfectVerbs.set(загнить.name.text, загнить);

export { загнить };