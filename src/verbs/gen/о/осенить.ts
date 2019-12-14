import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осенить: PerfectVerb = {
  name: Word('осенить', 4),
  singular1stPerson: Word('осеню', 4),
  singular2ndPerson: Word('осенишь', 4),
  singular3rdPerson: Word('осенит', 4),
  plural1stPerson: Word('осеним', 4),
  plural2ndPerson: Word('осените', 4),
  plural3rdPerson: Word('осенят', 4),
  masculinePast: Word('осенил', 4),
  femininePast: Word('осенила', 4),
  neuterPast: Word('осенило', 4),
  pluralPast: Word('осенили', 4),
  imperativeInformal: Word('осени', 4),
  imperativeFormal: Word('осените', 4),
  imperfect: [],
};

perfectVerbs.set(осенить.name.text, осенить);

export { осенить };