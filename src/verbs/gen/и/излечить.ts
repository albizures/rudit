import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const излечить: PerfectVerb = {
  name: Word('излечить', 5),
  singular1stPerson: Word('излечу', 5),
  singular2ndPerson: Word('излечишь', 3),
  singular3rdPerson: Word('излечит', 3),
  plural1stPerson: Word('излечим', 3),
  plural2ndPerson: Word('излечите', 3),
  plural3rdPerson: Word('излечат', 3),
  masculinePast: Word('излечил', 5),
  femininePast: Word('излечила', 5),
  neuterPast: Word('излечило', 5),
  pluralPast: Word('излечили', 5),
  imperativeInformal: Word('излечи', 5),
  imperativeFormal: Word('излечите', 5),
  imperfect: [],
};

perfectVerbs.set(излечить.name.text, излечить);

export { излечить };