import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const компрометировать: PerfectVerb = {
  name: Word('компрометировать', 9),
  singular1stPerson: Word('компрометирую', 9),
  singular2ndPerson: Word('компрометируешь', 9),
  singular3rdPerson: Word('компрометирует', 9),
  plural1stPerson: Word('компрометируем', 9),
  plural2ndPerson: Word('компрометируете', 9),
  plural3rdPerson: Word('компрометируют', 9),
  masculinePast: Word('компрометировал', 9),
  femininePast: Word('компрометировала', 9),
  neuterPast: Word('компрометировало', 9),
  pluralPast: Word('компрометировали', 9),
  imperativeInformal: Word('компрометируй', 9),
  imperativeFormal: Word('компрометируйте', 9),
  imperfect: [],
};

perfectVerbs.set(компрометировать.name.text, компрометировать);

export { компрометировать };