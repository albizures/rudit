import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дёрнуться: PerfectVerb = {
  name: Word('дёрнуться', 8),
  singular1stPerson: Word('дёрнусь', 4),
  singular2ndPerson: Word('дёрнешься', 4),
  singular3rdPerson: Word('дёрнется', 4),
  plural1stPerson: Word('дёрнемся', 4),
  plural2ndPerson: Word('дёрнетесь', 4),
  plural3rdPerson: Word('дёрнутся', 7),
  masculinePast: Word('дёрнулся', 7),
  femininePast: Word('дёрнулась', 6),
  neuterPast: Word('дёрнулось', 6),
  pluralPast: Word('дёрнулись', 6),
  imperativeInformal: Word('дёрнись', 4),
  imperativeFormal: Word('дёрнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(дёрнуться.name.text, дёрнуться);

export { дёрнуться };