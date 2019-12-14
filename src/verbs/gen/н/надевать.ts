import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надевать: PerfectVerb = {
  name: Word('надевать', 5),
  singular1stPerson: Word('надеваю', 5),
  singular2ndPerson: Word('надеваешь', 5),
  singular3rdPerson: Word('надевает', 5),
  plural1stPerson: Word('надеваем', 5),
  plural2ndPerson: Word('надеваете', 5),
  plural3rdPerson: Word('надевают', 5),
  masculinePast: Word('надевал', 5),
  femininePast: Word('надевала', 5),
  neuterPast: Word('надевало', 5),
  pluralPast: Word('надевали', 5),
  imperativeInformal: Word('надевай', 5),
  imperativeFormal: Word('надевайте', 5),
  imperfect: ['надеть'],
};

perfectVerbs.set(надевать.name.text, надевать);

export { надевать };