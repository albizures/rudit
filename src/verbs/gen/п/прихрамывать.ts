import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прихрамывать: PerfectVerb = {
  name: Word('прихрамывать', 5),
  singular1stPerson: Word('прихрамываю', 5),
  singular2ndPerson: Word('прихрамываешь', 5),
  singular3rdPerson: Word('прихрамывает', 5),
  plural1stPerson: Word('прихрамываем', 5),
  plural2ndPerson: Word('прихрамываете', 5),
  plural3rdPerson: Word('прихрамывают', 5),
  masculinePast: Word('прихрамывал', 5),
  femininePast: Word('прихрамывала', 5),
  neuterPast: Word('прихрамывало', 5),
  pluralPast: Word('прихрамывали', 5),
  imperativeInformal: Word('прихрамывай', 5),
  imperativeFormal: Word('прихрамывайте', 5),
  imperfect: [],
};

perfectVerbs.set(прихрамывать.name.text, прихрамывать);

export { прихрамывать };