import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const диссонировать: PerfectVerb = {
  name: Word('диссонировать', 6),
  singular1stPerson: Word('диссонирую', 6),
  singular2ndPerson: Word('диссонируешь', 6),
  singular3rdPerson: Word('диссонирует', 6),
  plural1stPerson: Word('диссонируем', 6),
  plural2ndPerson: Word('диссонируете', 6),
  plural3rdPerson: Word('диссонируют', 6),
  masculinePast: Word('диссонировал', 6),
  femininePast: Word('диссонировала', 6),
  neuterPast: Word('диссонировало', 6),
  pluralPast: Word('диссонировали', 6),
  imperativeInformal: Word('диссонируй', 6),
  imperativeFormal: Word('диссонируйте', 6),
  imperfect: [],
};

perfectVerbs.set(диссонировать.name.text, диссонировать);

export { диссонировать };