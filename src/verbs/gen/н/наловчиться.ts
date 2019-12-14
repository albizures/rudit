import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наловчиться: PerfectVerb = {
  name: Word('наловчиться', 6),
  singular1stPerson: Word('наловчусь', 6),
  singular2ndPerson: Word('наловчишься', 6),
  singular3rdPerson: Word('наловчится', 6),
  plural1stPerson: Word('наловчимся', 6),
  plural2ndPerson: Word('наловчитесь', 6),
  plural3rdPerson: Word('наловчатся', 6),
  masculinePast: Word('наловчился', 6),
  femininePast: Word('наловчилась', 6),
  neuterPast: Word('наловчилось', 6),
  pluralPast: Word('наловчились', 6),
  imperativeInformal: Word('наловчись', 6),
  imperativeFormal: Word('наловчитесь', 6),
  imperfect: [],
};

perfectVerbs.set(наловчиться.name.text, наловчиться);

export { наловчиться };