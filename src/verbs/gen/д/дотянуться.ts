import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотянуться: PerfectVerb = {
  name: Word('дотянуться', 5),
  singular1stPerson: Word('дотянусь', 5),
  singular2ndPerson: Word('дотянешься', 3),
  singular3rdPerson: Word('дотянется', 3),
  plural1stPerson: Word('дотянемся', 3),
  plural2ndPerson: Word('дотянетесь', 3),
  plural3rdPerson: Word('дотянутся', 3),
  masculinePast: Word('дотянулся', 5),
  femininePast: Word('дотянулась', 5),
  neuterPast: Word('дотянулось', 5),
  pluralPast: Word('дотянулись', 5),
  imperativeInformal: Word('дотянись', 5),
  imperativeFormal: Word('дотянитесь', 5),
  imperfect: [],
};

perfectVerbs.set(дотянуться.name.text, дотянуться);

export { дотянуться };