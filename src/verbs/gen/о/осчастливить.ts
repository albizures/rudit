import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осчастливить: PerfectVerb = {
  name: Word('осчастливить', 7),
  singular1stPerson: Word('осчастливлю', 7),
  singular2ndPerson: Word('осчастливишь', 7),
  singular3rdPerson: Word('осчастливит', 7),
  plural1stPerson: Word('осчастливим', 7),
  plural2ndPerson: Word('осчастливите', 7),
  plural3rdPerson: Word('осчастливят', 7),
  masculinePast: Word('осчастливил', 7),
  femininePast: Word('осчастливила', 7),
  neuterPast: Word('осчастливило', 7),
  pluralPast: Word('осчастливили', 7),
  imperativeInformal: Word('осчастливь', 7),
  imperativeFormal: Word('осчастливьте', 7),
  imperfect: [],
};

perfectVerbs.set(осчастливить.name.text, осчастливить);

export { осчастливить };