import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заглотать: PerfectVerb = {
  name: Word('заглотать', 6),
  singular1stPerson: Word('заглотаю', 6),
  singular2ndPerson: Word('заглотаешь', 6),
  singular3rdPerson: Word('заглотает', 6),
  plural1stPerson: Word('заглотаем', 6),
  plural2ndPerson: Word('заглотаете', 6),
  plural3rdPerson: Word('заглотают', 6),
  masculinePast: Word('заглотал', 6),
  femininePast: Word('заглотала', 6),
  neuterPast: Word('заглотало', 6),
  pluralPast: Word('заглотали', 6),
  imperativeInformal: Word('заглотай', 6),
  imperativeFormal: Word('заглотайте', 6),
  imperfect: [],
};

perfectVerbs.set(заглотать.name.text, заглотать);

export { заглотать };