import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плакаться: PerfectVerb = {
  name: Word('плакаться', 2),
  singular1stPerson: Word('плачусь', 2),
  singular2ndPerson: Word('плачешься', 2),
  singular3rdPerson: Word('плачется', 2),
  plural1stPerson: Word('плачемся', 2),
  plural2ndPerson: Word('плачетесь', 2),
  plural3rdPerson: Word('плачутся', 2),
  masculinePast: Word('плакался', 2),
  femininePast: Word('плакалась', 2),
  neuterPast: Word('плакалось', 2),
  pluralPast: Word('плакались', 2),
  imperativeInformal: Word('плачься', 2),
  imperativeFormal: Word('плачьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(плакаться.name.text, плакаться);

export { плакаться };