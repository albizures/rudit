import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заинтересовать: PerfectVerb = {
  name: Word('заинтересовать', 11),
  singular1stPerson: Word('заинтересую', 9),
  singular2ndPerson: Word('заинтересуешь', 9),
  singular3rdPerson: Word('заинтересует', 9),
  plural1stPerson: Word('заинтересуем', 9),
  plural2ndPerson: Word('заинтересуете', 9),
  plural3rdPerson: Word('заинтересуют', 9),
  masculinePast: Word('заинтересовал', 11),
  femininePast: Word('заинтересовала', 11),
  neuterPast: Word('заинтересовало', 11),
  pluralPast: Word('заинтересовали', 11),
  imperativeInformal: Word('заинтересуй', 9),
  imperativeFormal: Word('заинтересуйте', 9),
  imperfect: [],
};

perfectVerbs.set(заинтересовать.name.text, заинтересовать);

export { заинтересовать };