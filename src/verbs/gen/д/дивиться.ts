import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дивиться: PerfectVerb = {
  name: Word('дивиться', 3),
  singular1stPerson: Word('дивлюсь', 4),
  singular2ndPerson: Word('дивишься', 3),
  singular3rdPerson: Word('дивится', 3),
  plural1stPerson: Word('дивимся', 3),
  plural2ndPerson: Word('дивитесь', 3),
  plural3rdPerson: Word('дивятся', 3),
  masculinePast: Word('дивился', 3),
  femininePast: Word('дивилась', 3),
  neuterPast: Word('дивилось', 3),
  pluralPast: Word('дивились', 3),
  imperativeInformal: Word('дивись', 3),
  imperativeFormal: Word('дивитесь', 3),
  imperfect: [],
};

perfectVerbs.set(дивиться.name.text, дивиться);

export { дивиться };