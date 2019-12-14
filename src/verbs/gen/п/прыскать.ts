import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прыскать: PerfectVerb = {
  name: Word('прыскать', 2),
  singular1stPerson: Word('прыскаю', 2),
  singular2ndPerson: Word('прыскаешь', 2),
  singular3rdPerson: Word('прыскает', 2),
  plural1stPerson: Word('прыскаем', 2),
  plural2ndPerson: Word('прыскаете', 2),
  plural3rdPerson: Word('прыскают', 2),
  masculinePast: Word('прыскал', 2),
  femininePast: Word('прыскала', 2),
  neuterPast: Word('прыскало', 2),
  pluralPast: Word('прыскали', 2),
  imperativeInformal: Word('прыскай', 2),
  imperativeFormal: Word('прыскайте', 2),
  imperfect: [],
};

perfectVerbs.set(прыскать.name.text, прыскать);

export { прыскать };