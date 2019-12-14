import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const регламентировать: PerfectVerb = {
  name: Word('регламентировать', 9),
  singular1stPerson: Word('регламентирую', 9),
  singular2ndPerson: Word('регламентируешь', 9),
  singular3rdPerson: Word('регламентирует', 9),
  plural1stPerson: Word('регламентируем', 9),
  plural2ndPerson: Word('регламентируете', 9),
  plural3rdPerson: Word('регламентируют', 9),
  masculinePast: Word('регламентировал', 9),
  femininePast: Word('регламентировала', 9),
  neuterPast: Word('регламентировало', 9),
  pluralPast: Word('регламентировали', 9),
  imperativeInformal: Word('регламентируй', 9),
  imperativeFormal: Word('регламентируйте', 9),
  imperfect: [],
};

perfectVerbs.set(регламентировать.name.text, регламентировать);

export { регламентировать };