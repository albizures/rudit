import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const роднить: PerfectVerb = {
  name: Word('роднить', 4),
  singular1stPerson: Word('родню', 4),
  singular2ndPerson: Word('роднишь', 4),
  singular3rdPerson: Word('роднит', 4),
  plural1stPerson: Word('родним', 4),
  plural2ndPerson: Word('родните', 4),
  plural3rdPerson: Word('роднят', 4),
  masculinePast: Word('роднил', 4),
  femininePast: Word('роднила', 4),
  neuterPast: Word('роднило', 4),
  pluralPast: Word('роднили', 4),
  imperativeInformal: Word('родни', 4),
  imperativeFormal: Word('родните', 4),
  imperfect: [],
};

perfectVerbs.set(роднить.name.text, роднить);

export { роднить };