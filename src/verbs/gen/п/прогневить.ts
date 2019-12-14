import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогневить: PerfectVerb = {
  name: Word('прогневить', 7),
  singular1stPerson: Word('прогневлю', 8),
  singular2ndPerson: Word('прогневишь', 7),
  singular3rdPerson: Word('прогневит', 7),
  plural1stPerson: Word('прогневим', 7),
  plural2ndPerson: Word('прогневите', 7),
  plural3rdPerson: Word('прогневят', 7),
  masculinePast: Word('прогневил', 7),
  femininePast: Word('прогневила', 7),
  neuterPast: Word('прогневило', 7),
  pluralPast: Word('прогневили', 7),
  imperativeInformal: Word('прогневи', 7),
  imperativeFormal: Word('прогневите', 7),
  imperfect: [],
};

perfectVerbs.set(прогневить.name.text, прогневить);

export { прогневить };