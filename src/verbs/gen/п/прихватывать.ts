import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прихватывать: PerfectVerb = {
  name: Word('прихватывать', 5),
  singular1stPerson: Word('прихватываю', 5),
  singular2ndPerson: Word('прихватываешь', 5),
  singular3rdPerson: Word('прихватывает', 5),
  plural1stPerson: Word('прихватываем', 5),
  plural2ndPerson: Word('прихватываете', 5),
  plural3rdPerson: Word('прихватывают', 5),
  masculinePast: Word('прихватывал', 5),
  femininePast: Word('прихватывала', 5),
  neuterPast: Word('прихватывало', 5),
  pluralPast: Word('прихватывали', 5),
  imperativeInformal: Word('прихватывай', 5),
  imperativeFormal: Word('прихватывайте', 5),
  imperfect: [],
};

perfectVerbs.set(прихватывать.name.text, прихватывать);

export { прихватывать };