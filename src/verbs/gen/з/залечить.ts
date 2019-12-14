import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залечить: PerfectVerb = {
  name: Word('залечить', 5),
  singular1stPerson: Word('залечу', 5),
  singular2ndPerson: Word('залечишь', 3),
  singular3rdPerson: Word('залечит', 3),
  plural1stPerson: Word('залечим', 3),
  plural2ndPerson: Word('залечите', 3),
  plural3rdPerson: Word('залечат', 3),
  masculinePast: Word('залечил', 5),
  femininePast: Word('залечила', 5),
  neuterPast: Word('залечило', 5),
  pluralPast: Word('залечили', 5),
  imperativeInformal: Word('залечи', 5),
  imperativeFormal: Word('залечите', 5),
  imperfect: [],
};

perfectVerbs.set(залечить.name.text, залечить);

export { залечить };