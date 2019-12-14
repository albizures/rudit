import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дуться: PerfectVerb = {
  name: Word('дуться', 1),
  singular1stPerson: Word('дуюсь', 1),
  singular2ndPerson: Word('дуешься', 1),
  singular3rdPerson: Word('дуется', 1),
  plural1stPerson: Word('дуемся', 1),
  plural2ndPerson: Word('дуетесь', 1),
  plural3rdPerson: Word('дуются', 1),
  masculinePast: Word('дулся', 1),
  femininePast: Word('дулась', 1),
  neuterPast: Word('дулось', 1),
  pluralPast: Word('дулись', 1),
  imperativeInformal: Word('дуйся', 1),
  imperativeFormal: Word('дуйтесь', 1),
  imperfect: [],
};

perfectVerbs.set(дуться.name.text, дуться);

export { дуться };