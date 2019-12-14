import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const молить: PerfectVerb = {
  name: Word('молить', 3),
  singular1stPerson: Word('молю', 3),
  singular2ndPerson: Word('молишь', 1),
  singular3rdPerson: Word('молит', 1),
  plural1stPerson: Word('молим', 1),
  plural2ndPerson: Word('молите', 1),
  plural3rdPerson: Word('молят', 1),
  masculinePast: Word('молил', 3),
  femininePast: Word('молила', 3),
  neuterPast: Word('молило', 3),
  pluralPast: Word('молили', 3),
  imperativeInformal: Word('моли', 3),
  imperativeFormal: Word('молите', 3),
  imperfect: [],
};

perfectVerbs.set(молить.name.text, молить);

export { молить };