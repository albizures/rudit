import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таскать: PerfectVerb = {
  name: Word('таскать', 4),
  singular1stPerson: Word('таскаю', 4),
  singular2ndPerson: Word('таскаешь', 4),
  singular3rdPerson: Word('таскает', 4),
  plural1stPerson: Word('таскаем', 4),
  plural2ndPerson: Word('таскаете', 4),
  plural3rdPerson: Word('таскают', 4),
  masculinePast: Word('таскал', 4),
  femininePast: Word('таскала', 4),
  neuterPast: Word('таскало', 4),
  pluralPast: Word('таскали', 4),
  imperativeInformal: Word('таскай', 4),
  imperativeFormal: Word('таскайте', 4),
  imperfect: [],
};

perfectVerbs.set(таскать.name.text, таскать);

export { таскать };