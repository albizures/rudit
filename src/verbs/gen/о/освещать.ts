import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освещать: PerfectVerb = {
  name: Word('освещать', 5),
  singular1stPerson: Word('освещаю', 5),
  singular2ndPerson: Word('освещаешь', 5),
  singular3rdPerson: Word('освещает', 5),
  plural1stPerson: Word('освещаем', 5),
  plural2ndPerson: Word('освещаете', 5),
  plural3rdPerson: Word('освещают', 5),
  masculinePast: Word('освещал', 5),
  femininePast: Word('освещала', 5),
  neuterPast: Word('освещало', 5),
  pluralPast: Word('освещали', 5),
  imperativeInformal: Word('освещай', 5),
  imperativeFormal: Word('освещайте', 5),
  imperfect: [],
};

perfectVerbs.set(освещать.name.text, освещать);

export { освещать };