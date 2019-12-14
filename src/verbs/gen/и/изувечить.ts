import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изувечить: PerfectVerb = {
  name: Word('изувечить', 4),
  singular1stPerson: Word('изувечу', 4),
  singular2ndPerson: Word('изувечишь', 4),
  singular3rdPerson: Word('изувечит', 4),
  plural1stPerson: Word('изувечим', 4),
  plural2ndPerson: Word('изувечите', 4),
  plural3rdPerson: Word('изувечат', 4),
  masculinePast: Word('изувечил', 4),
  femininePast: Word('изувечила', 4),
  neuterPast: Word('изувечило', 4),
  pluralPast: Word('изувечили', 4),
  imperativeInformal: Word('изувечь', 4),
  imperativeFormal: Word('изувечьте', 4),
  imperfect: [],
};

perfectVerbs.set(изувечить.name.text, изувечить);

export { изувечить };