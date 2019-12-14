import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накопать: PerfectVerb = {
  name: Word('накопать', 5),
  singular1stPerson: Word('накопаю', 5),
  singular2ndPerson: Word('накопаешь', 5),
  singular3rdPerson: Word('накопает', 5),
  plural1stPerson: Word('накопаем', 5),
  plural2ndPerson: Word('накопаете', 5),
  plural3rdPerson: Word('накопают', 5),
  masculinePast: Word('накопал', 5),
  femininePast: Word('накопала', 5),
  neuterPast: Word('накопало', 5),
  pluralPast: Word('накопали', 5),
  imperativeInformal: Word('накопай', 5),
  imperativeFormal: Word('накопайте', 5),
  imperfect: [],
};

perfectVerbs.set(накопать.name.text, накопать);

export { накопать };