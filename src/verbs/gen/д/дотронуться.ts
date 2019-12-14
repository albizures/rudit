import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотронуться: PerfectVerb = {
  name: Word('дотронуться', 4),
  singular1stPerson: Word('дотронусь', 4),
  singular2ndPerson: Word('дотронешься', 4),
  singular3rdPerson: Word('дотронется', 4),
  plural1stPerson: Word('дотронемся', 4),
  plural2ndPerson: Word('дотронетесь', 4),
  plural3rdPerson: Word('дотронутся', 4),
  masculinePast: Word('дотронулся', 4),
  femininePast: Word('дотронулась', 4),
  neuterPast: Word('дотронулось', 4),
  pluralPast: Word('дотронулись', 4),
  imperativeInformal: Word('дотронься', 4),
  imperativeFormal: Word('дотроньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(дотронуться.name.text, дотронуться);

export { дотронуться };