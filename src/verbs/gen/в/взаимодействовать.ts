import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взаимодействовать: PerfectVerb = {
  name: Word('взаимодействовать', 7),
  singular1stPerson: Word('взаимодействую', 7),
  singular2ndPerson: Word('взаимодействуешь', 7),
  singular3rdPerson: Word('взаимодействует', 7),
  plural1stPerson: Word('взаимодействуем', 7),
  plural2ndPerson: Word('взаимодействуете', 7),
  plural3rdPerson: Word('взаимодействуют', 7),
  masculinePast: Word('взаимодействовал', 7),
  femininePast: Word('взаимодействовала', 7),
  neuterPast: Word('взаимодействовало', 7),
  pluralPast: Word('взаимодействовали', 7),
  imperativeInformal: Word('взаимодействуй', 7),
  imperativeFormal: Word('взаимодействуйте', 7),
  imperfect: [],
};

perfectVerbs.set(взаимодействовать.name.text, взаимодействовать);

export { взаимодействовать };