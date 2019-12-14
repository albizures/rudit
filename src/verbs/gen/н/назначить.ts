import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const назначить: PerfectVerb = {
  name: Word('назначить', 4),
  singular1stPerson: Word('назначу', 4),
  singular2ndPerson: Word('назначишь', 4),
  singular3rdPerson: Word('назначит', 4),
  plural1stPerson: Word('назначим', 4),
  plural2ndPerson: Word('назначите', 4),
  plural3rdPerson: Word('назначат', 4),
  masculinePast: Word('назначил', 4),
  femininePast: Word('назначила', 4),
  neuterPast: Word('назначило', 4),
  pluralPast: Word('назначили', 4),
  imperativeInformal: Word('назначь', 4),
  imperativeFormal: Word('назначьте', 4),
  imperfect: ['назначать'],
};

perfectVerbs.set(назначить.name.text, назначить);

export { назначить };