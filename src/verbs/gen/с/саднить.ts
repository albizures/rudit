import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const саднить: PerfectVerb = {
  name: Word('саднить', 4),
  singular1stPerson: Word('садню', 1),
  singular2ndPerson: Word('саднишь', 1),
  singular3rdPerson: Word('саднит', 1),
  plural1stPerson: Word('садним', 1),
  plural2ndPerson: Word('садните', 1),
  plural3rdPerson: Word('саднят', 1),
  masculinePast: Word('саднил', 4),
  femininePast: Word('саднила', 4),
  neuterPast: Word('саднило', 4),
  pluralPast: Word('саднили', 4),
  imperativeInformal: Word('садни', 1),
  imperativeFormal: Word('садните', 1),
  imperfect: [],
};

perfectVerbs.set(саднить.name.text, саднить);

export { саднить };