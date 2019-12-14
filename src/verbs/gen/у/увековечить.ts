import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увековечить: PerfectVerb = {
  name: Word('увековечить', 6),
  singular1stPerson: Word('увековечу', 6),
  singular2ndPerson: Word('увековечишь', 6),
  singular3rdPerson: Word('увековечит', 6),
  plural1stPerson: Word('увековечим', 6),
  plural2ndPerson: Word('увековечите', 6),
  plural3rdPerson: Word('увековечат', 6),
  masculinePast: Word('увековечил', 6),
  femininePast: Word('увековечила', 6),
  neuterPast: Word('увековечило', 6),
  pluralPast: Word('увековечили', 6),
  imperativeInformal: Word('увековечь', 6),
  imperativeFormal: Word('увековечьте', 6),
  imperfect: [],
};

perfectVerbs.set(увековечить.name.text, увековечить);

export { увековечить };