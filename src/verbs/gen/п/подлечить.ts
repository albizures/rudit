import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлечить: PerfectVerb = {
  name: Word('подлечить', 6),
  singular1stPerson: Word('подлечу', 6),
  singular2ndPerson: Word('подлечишь', 4),
  singular3rdPerson: Word('подлечит', 4),
  plural1stPerson: Word('подлечим', 4),
  plural2ndPerson: Word('подлечите', 4),
  plural3rdPerson: Word('подлечат', 4),
  masculinePast: Word('подлечил', 6),
  femininePast: Word('подлечила', 6),
  neuterPast: Word('подлечило', 6),
  pluralPast: Word('подлечили', 6),
  imperativeInformal: Word('подлечи', 6),
  imperativeFormal: Word('подлечите', 6),
  imperfect: [],
};

perfectVerbs.set(подлечить.name.text, подлечить);

export { подлечить };