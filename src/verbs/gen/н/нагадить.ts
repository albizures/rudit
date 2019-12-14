import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагадить: PerfectVerb = {
  name: Word('нагадить', 3),
  singular1stPerson: Word('нагажу', 3),
  singular2ndPerson: Word('нагадишь', 3),
  singular3rdPerson: Word('нагадит', 3),
  plural1stPerson: Word('нагадим', 3),
  plural2ndPerson: Word('нагадите', 3),
  plural3rdPerson: Word('нагадят', 3),
  masculinePast: Word('нагадил', 3),
  femininePast: Word('нагадила', 3),
  neuterPast: Word('нагадило', 3),
  pluralPast: Word('нагадили', 3),
  imperativeInformal: Word('нагадь', 3),
  imperativeFormal: Word('нагадьте', 3),
  imperfect: [],
};

perfectVerbs.set(нагадить.name.text, нагадить);

export { нагадить };