import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const схватывать: PerfectVerb = {
  name: Word('схватывать', 3),
  singular1stPerson: Word('схватываю', 3),
  singular2ndPerson: Word('схватываешь', 3),
  singular3rdPerson: Word('схватывает', 3),
  plural1stPerson: Word('схватываем', 3),
  plural2ndPerson: Word('схватываете', 3),
  plural3rdPerson: Word('схватывают', 3),
  masculinePast: Word('схватывал', 3),
  femininePast: Word('схватывала', 3),
  neuterPast: Word('схватывало', 3),
  pluralPast: Word('схватывали', 3),
  imperativeInformal: Word('схватывай', 3),
  imperativeFormal: Word('схватывайте', 3),
  imperfect: [],
};

perfectVerbs.set(схватывать.name.text, схватывать);

export { схватывать };