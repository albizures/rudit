import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полечить: PerfectVerb = {
  name: Word('полечить', 5),
  singular1stPerson: Word('полечу', 5),
  singular2ndPerson: Word('полечишь', 3),
  singular3rdPerson: Word('полечит', 3),
  plural1stPerson: Word('полечим', 3),
  plural2ndPerson: Word('полечите', 3),
  plural3rdPerson: Word('полечат', 3),
  masculinePast: Word('полечил', 5),
  femininePast: Word('полечила', 5),
  neuterPast: Word('полечило', 5),
  pluralPast: Word('полечили', 5),
  imperativeInformal: Word('полечи', 5),
  imperativeFormal: Word('полечите', 5),
  imperfect: [],
};

perfectVerbs.set(полечить.name.text, полечить);

export { полечить };