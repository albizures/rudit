import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычитывать: PerfectVerb = {
  name: Word('вычитывать', 3),
  singular1stPerson: Word('вычитываю', 3),
  singular2ndPerson: Word('вычитываешь', 3),
  singular3rdPerson: Word('вычитывает', 3),
  plural1stPerson: Word('вычитываем', 3),
  plural2ndPerson: Word('вычитываете', 3),
  plural3rdPerson: Word('вычитывают', 3),
  masculinePast: Word('вычитывал', 3),
  femininePast: Word('вычитывала', 3),
  neuterPast: Word('вычитывало', 3),
  pluralPast: Word('вычитывали', 3),
  imperativeInformal: Word('вычитывай', 3),
  imperativeFormal: Word('вычитывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вычитывать.name.text, вычитывать);

export { вычитывать };