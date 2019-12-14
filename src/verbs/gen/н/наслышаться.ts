import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наслышаться: PerfectVerb = {
  name: Word('наслышаться', 4),
  singular1stPerson: Word('наслышусь', 4),
  singular2ndPerson: Word('наслышишься', 4),
  singular3rdPerson: Word('наслышится', 4),
  plural1stPerson: Word('наслышимся', 4),
  plural2ndPerson: Word('наслышитесь', 4),
  plural3rdPerson: Word('наслышатся', 4),
  masculinePast: Word('наслышался', 4),
  femininePast: Word('наслышалась', 4),
  neuterPast: Word('наслышалось', 4),
  pluralPast: Word('наслышались', 4),
  imperativeInformal: Word('наслышься', 4),
  imperativeFormal: Word('наслышьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наслышаться.name.text, наслышаться);

export { наслышаться };