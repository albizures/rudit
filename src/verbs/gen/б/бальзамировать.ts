import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бальзамировать: PerfectVerb = {
  name: Word('бальзамировать', 7),
  singular1stPerson: Word('бальзамирую', 7),
  singular2ndPerson: Word('бальзамируешь', 7),
  singular3rdPerson: Word('бальзамирует', 7),
  plural1stPerson: Word('бальзамируем', 7),
  plural2ndPerson: Word('бальзамируете', 7),
  plural3rdPerson: Word('бальзамируют', 7),
  masculinePast: Word('бальзамировал', 7),
  femininePast: Word('бальзамировала', 7),
  neuterPast: Word('бальзамировало', 7),
  pluralPast: Word('бальзамировали', 7),
  imperativeInformal: Word('бальзамируй', 7),
  imperativeFormal: Word('бальзамируйте', 7),
  imperfect: [],
};

perfectVerbs.set(бальзамировать.name.text, бальзамировать);

export { бальзамировать };