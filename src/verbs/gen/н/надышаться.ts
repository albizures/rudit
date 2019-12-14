import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надышаться: PerfectVerb = {
  name: Word('надышаться', 5),
  singular1stPerson: Word('надышусь', 5),
  singular2ndPerson: Word('надышишься', 3),
  singular3rdPerson: Word('надышится', 3),
  plural1stPerson: Word('надышимся', 3),
  plural2ndPerson: Word('надышитесь', 3),
  plural3rdPerson: Word('надышатся', 3),
  masculinePast: Word('надышался', 5),
  femininePast: Word('надышалась', 5),
  neuterPast: Word('надышалось', 5),
  pluralPast: Word('надышались', 5),
  imperativeInformal: Word('надышись', 5),
  imperativeFormal: Word('надышитесь', 5),
  imperfect: [],
};

perfectVerbs.set(надышаться.name.text, надышаться);

export { надышаться };