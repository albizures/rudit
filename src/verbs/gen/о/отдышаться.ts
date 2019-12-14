import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдышаться: PerfectVerb = {
  name: Word('отдышаться', 5),
  singular1stPerson: Word('отдышусь', 5),
  singular2ndPerson: Word('отдышишься', 3),
  singular3rdPerson: Word('отдышится', 3),
  plural1stPerson: Word('отдышимся', 3),
  plural2ndPerson: Word('отдышитесь', 3),
  plural3rdPerson: Word('отдышатся', 3),
  masculinePast: Word('отдышался', 5),
  femininePast: Word('отдышалась', 5),
  neuterPast: Word('отдышалось', 5),
  pluralPast: Word('отдышались', 5),
  imperativeInformal: Word('отдышись', 5),
  imperativeFormal: Word('отдышитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отдышаться.name.text, отдышаться);

export { отдышаться };