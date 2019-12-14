import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слышаться: PerfectVerb = {
  name: Word('слышаться', 2),
  singular1stPerson: Word('слышусь', 2),
  singular2ndPerson: Word('слышишься', 2),
  singular3rdPerson: Word('слышится', 2),
  plural1stPerson: Word('слышимся', 2),
  plural2ndPerson: Word('слышитесь', 2),
  plural3rdPerson: Word('слышатся', 2),
  masculinePast: Word('слышался', 2),
  femininePast: Word('слышалась', 2),
  neuterPast: Word('слышалось', 2),
  pluralPast: Word('слышались', 2),
  imperativeInformal: Word('слышься', 2),
  imperativeFormal: Word('слышьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(слышаться.name.text, слышаться);

export { слышаться };