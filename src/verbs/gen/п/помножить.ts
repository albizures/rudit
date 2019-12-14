import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помножить: PerfectVerb = {
  name: Word('помножить', 4),
  singular1stPerson: Word('помножу', 4),
  singular2ndPerson: Word('помножишь', 4),
  singular3rdPerson: Word('помножит', 4),
  plural1stPerson: Word('помножим', 4),
  plural2ndPerson: Word('помножите', 4),
  plural3rdPerson: Word('помножат', 4),
  masculinePast: Word('помножил', 4),
  femininePast: Word('помножила', 4),
  neuterPast: Word('помножило', 4),
  pluralPast: Word('помножили', 4),
  imperativeInformal: Word('помножь', 4),
  imperativeFormal: Word('помножьте', 4),
  imperfect: [],
};

perfectVerbs.set(помножить.name.text, помножить);

export { помножить };