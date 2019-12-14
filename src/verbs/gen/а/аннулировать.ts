import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аннулировать: PerfectVerb = {
  name: Word('аннулировать', 5),
  singular1stPerson: Word('аннулирую', 5),
  singular2ndPerson: Word('аннулируешь', 5),
  singular3rdPerson: Word('аннулирует', 5),
  plural1stPerson: Word('аннулируем', 5),
  plural2ndPerson: Word('аннулируете', 5),
  plural3rdPerson: Word('аннулируют', 5),
  masculinePast: Word('аннулировал', 5),
  femininePast: Word('аннулировала', 5),
  neuterPast: Word('аннулировало', 5),
  pluralPast: Word('аннулировали', 5),
  imperativeInformal: Word('аннулируй', 5),
  imperativeFormal: Word('аннулируйте', 5),
  imperfect: [],
};

perfectVerbs.set(аннулировать.name.text, аннулировать);

export { аннулировать };