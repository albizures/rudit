import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свыкнуться: PerfectVerb = {
  name: Word('свыкнуться', 2),
  singular1stPerson: Word('свыкнусь', 2),
  singular2ndPerson: Word('свыкнешься', 2),
  singular3rdPerson: Word('свыкнется', 2),
  plural1stPerson: Word('свыкнемся', 2),
  plural2ndPerson: Word('свыкнетесь', 2),
  plural3rdPerson: Word('свыкнутся', 2),
  masculinePast: Word('свыкся', 2),
  femininePast: Word('свыклась', 2),
  neuterPast: Word('свыклось', 2),
  pluralPast: Word('свыклись', 2),
  imperativeInformal: Word('свыкнись', 2),
  imperativeFormal: Word('свыкнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(свыкнуться.name.text, свыкнуться);

export { свыкнуться };