import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const послышаться: PerfectVerb = {
  name: Word('послышаться', 4),
  singular1stPerson: Word('послышусь', 4),
  singular2ndPerson: Word('послышишься', 4),
  singular3rdPerson: Word('послышится', 4),
  plural1stPerson: Word('послышимся', 4),
  plural2ndPerson: Word('послышитесь', 4),
  plural3rdPerson: Word('послышатся', 4),
  masculinePast: Word('послышался', 4),
  femininePast: Word('послышалась', 4),
  neuterPast: Word('послышалось', 4),
  pluralPast: Word('послышались', 4),
  imperativeInformal: Word('послышься', 4),
  imperativeFormal: Word('послышьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(послышаться.name.text, послышаться);

export { послышаться };