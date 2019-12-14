import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предназначить: PerfectVerb = {
  name: Word('предназначить', 8),
  singular1stPerson: Word('предназначу', 8),
  singular2ndPerson: Word('предназначишь', 8),
  singular3rdPerson: Word('предназначит', 8),
  plural1stPerson: Word('предназначим', 8),
  plural2ndPerson: Word('предназначите', 8),
  plural3rdPerson: Word('предназначат', 8),
  masculinePast: Word('предназначил', 8),
  femininePast: Word('предназначила', 8),
  neuterPast: Word('предназначило', 8),
  pluralPast: Word('предназначили', 8),
  imperativeInformal: Word('предназначь', 8),
  imperativeFormal: Word('предназначьте', 8),
  imperfect: ['предназначать'],
};

perfectVerbs.set(предназначить.name.text, предназначить);

export { предназначить };