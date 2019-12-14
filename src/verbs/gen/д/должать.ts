import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const должать: PerfectVerb = {
  name: Word('должать', 4),
  singular1stPerson: Word('должаю', 4),
  singular2ndPerson: Word('должаешь', 4),
  singular3rdPerson: Word('должает', 4),
  plural1stPerson: Word('должаем', 4),
  plural2ndPerson: Word('должаете', 4),
  plural3rdPerson: Word('должают', 4),
  masculinePast: Word('должал', 4),
  femininePast: Word('должала', 4),
  neuterPast: Word('должало', 4),
  pluralPast: Word('должали', 4),
  imperativeInformal: Word('должай', 4),
  imperativeFormal: Word('должайте', 4),
  imperfect: [],
};

perfectVerbs.set(должать.name.text, должать);

export { должать };