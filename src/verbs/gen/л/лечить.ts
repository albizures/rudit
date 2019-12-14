import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лечить: PerfectVerb = {
  name: Word('лечить', 3),
  singular1stPerson: Word('лечу', 3),
  singular2ndPerson: Word('лечишь', 1),
  singular3rdPerson: Word('лечит', 1),
  plural1stPerson: Word('лечим', 1),
  plural2ndPerson: Word('лечите', 1),
  plural3rdPerson: Word('лечат', 1),
  masculinePast: Word('лечил', 3),
  femininePast: Word('лечила', 3),
  neuterPast: Word('лечило', 3),
  pluralPast: Word('лечили', 3),
  imperativeInformal: Word('лечи', 3),
  imperativeFormal: Word('лечите', 3),
  imperfect: ['полечить'],
};

perfectVerbs.set(лечить.name.text, лечить);

export { лечить };