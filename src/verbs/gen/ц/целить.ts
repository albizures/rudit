import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const целить: PerfectVerb = {
  name: Word('целить', 1),
  singular1stPerson: Word('целю', 1),
  singular2ndPerson: Word('целишь', 1),
  singular3rdPerson: Word('целит', 1),
  plural1stPerson: Word('целим', 1),
  plural2ndPerson: Word('целите', 1),
  plural3rdPerson: Word('целят', 1),
  masculinePast: Word('целил', 1),
  femininePast: Word('целила', 1),
  neuterPast: Word('целило', 1),
  pluralPast: Word('целили', 1),
  imperativeInformal: Word('цель', 1),
  imperativeFormal: Word('цельте', 1),
  imperfect: [],
};

perfectVerbs.set(целить.name.text, целить);

export { целить };