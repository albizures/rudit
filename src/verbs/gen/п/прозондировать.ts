import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозондировать: PerfectVerb = {
  name: Word('прозондировать', 7),
  singular1stPerson: Word('прозондирую', 7),
  singular2ndPerson: Word('прозондируешь', 7),
  singular3rdPerson: Word('прозондирует', 7),
  plural1stPerson: Word('прозондируем', 7),
  plural2ndPerson: Word('прозондируете', 7),
  plural3rdPerson: Word('прозондируют', 7),
  masculinePast: Word('прозондировал', 7),
  femininePast: Word('прозондировала', 7),
  neuterPast: Word('прозондировало', 7),
  pluralPast: Word('прозондировали', 7),
  imperativeInformal: Word('прозондируй', 7),
  imperativeFormal: Word('прозондируйте', 7),
  imperfect: [],
};

perfectVerbs.set(прозондировать.name.text, прозондировать);

export { прозондировать };