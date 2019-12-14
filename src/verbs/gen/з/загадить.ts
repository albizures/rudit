import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загадить: PerfectVerb = {
  name: Word('загадить', 3),
  singular1stPerson: Word('загажу', 3),
  singular2ndPerson: Word('загадишь', 3),
  singular3rdPerson: Word('загадит', 3),
  plural1stPerson: Word('загадим', 3),
  plural2ndPerson: Word('загадите', 3),
  plural3rdPerson: Word('загадят', 3),
  masculinePast: Word('загадил', 3),
  femininePast: Word('загадила', 3),
  neuterPast: Word('загадило', 3),
  pluralPast: Word('загадили', 3),
  imperativeInformal: Word('загадь', 3),
  imperativeFormal: Word('загадьте', 3),
  imperfect: [],
};

perfectVerbs.set(загадить.name.text, загадить);

export { загадить };