import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дёрнуться: PerfectVerb = {
  name: Word('дёрнуться', 1),
  singular1stPerson: Word('дёрнусь', 1),
  singular2ndPerson: Word('дёрнешься', 1),
  singular3rdPerson: Word('дёрнется', 1),
  plural1stPerson: Word('дёрнемся', 1),
  plural2ndPerson: Word('дёрнетесь', 1),
  plural3rdPerson: Word('дёрнутся', 1),
  masculinePast: Word('дёрнулся', 1),
  femininePast: Word('дёрнулась', 1),
  neuterPast: Word('дёрнулось', 1),
  pluralPast: Word('дёрнулись', 1),
  imperativeInformal: Word('дёрнись', 1),
  imperativeFormal: Word('дёрнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(дёрнуться.name.text, дёрнуться);

export { дёрнуться };