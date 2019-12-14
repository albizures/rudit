import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпарировать: PerfectVerb = {
  name: Word('отпарировать', 5),
  singular1stPerson: Word('отпарирую', 5),
  singular2ndPerson: Word('отпарируешь', 5),
  singular3rdPerson: Word('отпарирует', 5),
  plural1stPerson: Word('отпарируем', 5),
  plural2ndPerson: Word('отпарируете', 5),
  plural3rdPerson: Word('отпарируют', 5),
  masculinePast: Word('отпарировал', 5),
  femininePast: Word('отпарировала', 5),
  neuterPast: Word('отпарировало', 5),
  pluralPast: Word('отпарировали', 5),
  imperativeInformal: Word('отпарируй', 5),
  imperativeFormal: Word('отпарируйте', 5),
  imperfect: [],
};

perfectVerbs.set(отпарировать.name.text, отпарировать);

export { отпарировать };