import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заболтать: PerfectVerb = {
  name: Word('заболтать', 6),
  singular1stPerson: Word('заболтаю', 6),
  singular2ndPerson: Word('заболтаешь', 6),
  singular3rdPerson: Word('заболтает', 6),
  plural1stPerson: Word('заболтаем', 6),
  plural2ndPerson: Word('заболтаете', 6),
  plural3rdPerson: Word('заболтают', 6),
  masculinePast: Word('заболтал', 6),
  femininePast: Word('заболтала', 6),
  neuterPast: Word('заболтало', 6),
  pluralPast: Word('заболтали', 6),
  imperativeInformal: Word('заболтай', 6),
  imperativeFormal: Word('заболтайте', 6),
  imperfect: [],
};

perfectVerbs.set(заболтать.name.text, заболтать);

export { заболтать };