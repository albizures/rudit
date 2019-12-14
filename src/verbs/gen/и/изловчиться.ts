import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изловчиться: PerfectVerb = {
  name: Word('изловчиться', 6),
  singular1stPerson: Word('изловчусь', 6),
  singular2ndPerson: Word('изловчишься', 6),
  singular3rdPerson: Word('изловчится', 6),
  plural1stPerson: Word('изловчимся', 6),
  plural2ndPerson: Word('изловчитесь', 6),
  plural3rdPerson: Word('изловчатся', 6),
  masculinePast: Word('изловчился', 6),
  femininePast: Word('изловчилась', 6),
  neuterPast: Word('изловчилось', 6),
  pluralPast: Word('изловчились', 6),
  imperativeInformal: Word('изловчись', 6),
  imperativeFormal: Word('изловчитесь', 6),
  imperfect: [],
};

perfectVerbs.set(изловчиться.name.text, изловчиться);

export { изловчиться };