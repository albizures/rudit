import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одеколониться: PerfectVerb = {
  name: Word('одеколониться', 6),
  singular1stPerson: Word('одеколонюсь', 6),
  singular2ndPerson: Word('одеколонишься', 6),
  singular3rdPerson: Word('одеколонится', 6),
  plural1stPerson: Word('одеколонимся', 6),
  plural2ndPerson: Word('одеколонитесь', 6),
  plural3rdPerson: Word('одеколонятся', 6),
  masculinePast: Word('одеколонился', 6),
  femininePast: Word('одеколонилась', 6),
  neuterPast: Word('одеколонилось', 6),
  pluralPast: Word('одеколонились', 6),
  imperativeInformal: Word('одеколонься', 6),
  imperativeFormal: Word('одеколоньтесь', 6),
  imperfect: [],
};

perfectVerbs.set(одеколониться.name.text, одеколониться);

export { одеколониться };