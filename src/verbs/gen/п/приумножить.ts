import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приумножить: PerfectVerb = {
  name: Word('приумножить', 6),
  singular1stPerson: Word('приумножу', 6),
  singular2ndPerson: Word('приумножишь', 6),
  singular3rdPerson: Word('приумножит', 6),
  plural1stPerson: Word('приумножим', 6),
  plural2ndPerson: Word('приумножите', 6),
  plural3rdPerson: Word('приумножат', 6),
  masculinePast: Word('приумножил', 6),
  femininePast: Word('приумножила', 6),
  neuterPast: Word('приумножило', 6),
  pluralPast: Word('приумножили', 6),
  imperativeInformal: Word('приумножь', 6),
  imperativeFormal: Word('приумножьте', 6),
  imperfect: [],
};

perfectVerbs.set(приумножить.name.text, приумножить);

export { приумножить };