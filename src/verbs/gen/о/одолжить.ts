import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одолжить: PerfectVerb = {
  name: Word('одолжить', 5),
  singular1stPerson: Word('одолжу', 5),
  singular2ndPerson: Word('одолжишь', 5),
  singular3rdPerson: Word('одолжит', 5),
  plural1stPerson: Word('одолжим', 5),
  plural2ndPerson: Word('одолжите', 5),
  plural3rdPerson: Word('одолжат', 5),
  masculinePast: Word('одолжил', 5),
  femininePast: Word('одолжила', 5),
  neuterPast: Word('одолжило', 5),
  pluralPast: Word('одолжили', 5),
  imperativeInformal: Word('одолжи', 5),
  imperativeFormal: Word('одолжите', 5),
  imperfect: [],
};

perfectVerbs.set(одолжить.name.text, одолжить);

export { одолжить };