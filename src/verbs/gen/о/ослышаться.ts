import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ослышаться: PerfectVerb = {
  name: Word('ослышаться', 3),
  singular1stPerson: Word('ослышусь', 3),
  singular2ndPerson: Word('ослышишься', 3),
  singular3rdPerson: Word('ослышится', 3),
  plural1stPerson: Word('ослышимся', 3),
  plural2ndPerson: Word('ослышитесь', 3),
  plural3rdPerson: Word('ослышатся', 3),
  masculinePast: Word('ослышался', 3),
  femininePast: Word('ослышалась', 3),
  neuterPast: Word('ослышалось', 3),
  pluralPast: Word('ослышались', 3),
  imperativeInformal: Word('ослышься', 3),
  imperativeFormal: Word('ослышьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(ослышаться.name.text, ослышаться);

export { ослышаться };