import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылизывать: PerfectVerb = {
  name: Word('вылизывать', 3),
  singular1stPerson: Word('вылизываю', 3),
  singular2ndPerson: Word('вылизываешь', 3),
  singular3rdPerson: Word('вылизывает', 3),
  plural1stPerson: Word('вылизываем', 3),
  plural2ndPerson: Word('вылизываете', 3),
  plural3rdPerson: Word('вылизывают', 3),
  masculinePast: Word('вылизывал', 3),
  femininePast: Word('вылизывала', 3),
  neuterPast: Word('вылизывало', 3),
  pluralPast: Word('вылизывали', 3),
  imperativeInformal: Word('вылизывай', 3),
  imperativeFormal: Word('вылизывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вылизывать.name.text, вылизывать);

export { вылизывать };