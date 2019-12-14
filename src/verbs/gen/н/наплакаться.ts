import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наплакаться: PerfectVerb = {
  name: Word('наплакаться', 4),
  singular1stPerson: Word('наплачусь', 4),
  singular2ndPerson: Word('наплачешься', 4),
  singular3rdPerson: Word('наплачется', 4),
  plural1stPerson: Word('наплачемся', 4),
  plural2ndPerson: Word('наплачетесь', 4),
  plural3rdPerson: Word('наплачутся', 4),
  masculinePast: Word('наплакался', 4),
  femininePast: Word('наплакалась', 4),
  neuterPast: Word('наплакалось', 4),
  pluralPast: Word('наплакались', 4),
  imperativeInformal: Word('наплачься', 4),
  imperativeFormal: Word('наплачьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(наплакаться.name.text, наплакаться);

export { наплакаться };