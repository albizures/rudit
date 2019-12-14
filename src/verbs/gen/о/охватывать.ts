import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const охватывать: PerfectVerb = {
  name: Word('охватывать', 3),
  singular1stPerson: Word('охватываю', 3),
  singular2ndPerson: Word('охватываешь', 3),
  singular3rdPerson: Word('охватывает', 3),
  plural1stPerson: Word('охватываем', 3),
  plural2ndPerson: Word('охватываете', 3),
  plural3rdPerson: Word('охватывают', 3),
  masculinePast: Word('охватывал', 3),
  femininePast: Word('охватывала', 3),
  neuterPast: Word('охватывало', 3),
  pluralPast: Word('охватывали', 3),
  imperativeInformal: Word('охватывай', 3),
  imperativeFormal: Word('охватывайте', 3),
  imperfect: [],
};

perfectVerbs.set(охватывать.name.text, охватывать);

export { охватывать };