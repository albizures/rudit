import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прихлопывать: PerfectVerb = {
  name: Word('прихлопывать', 5),
  singular1stPerson: Word('прихлопываю', 5),
  singular2ndPerson: Word('прихлопываешь', 5),
  singular3rdPerson: Word('прихлопывает', 5),
  plural1stPerson: Word('прихлопываем', 5),
  plural2ndPerson: Word('прихлопываете', 5),
  plural3rdPerson: Word('прихлопывают', 5),
  masculinePast: Word('прихлопывал', 5),
  femininePast: Word('прихлопывала', 5),
  neuterPast: Word('прихлопывало', 5),
  pluralPast: Word('прихлопывали', 5),
  imperativeInformal: Word('прихлопывай', 5),
  imperativeFormal: Word('прихлопывайте', 5),
  imperfect: [],
};

perfectVerbs.set(прихлопывать.name.text, прихлопывать);

export { прихлопывать };