import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ссасывать: PerfectVerb = {
  name: Word('ссасывать', 2),
  singular1stPerson: Word('ссасываю', 2),
  singular2ndPerson: Word('ссасываешь', 2),
  singular3rdPerson: Word('ссасывает', 2),
  plural1stPerson: Word('ссасываем', 2),
  plural2ndPerson: Word('ссасываете', 2),
  plural3rdPerson: Word('ссасывают', 2),
  masculinePast: Word('ссасывал', 2),
  femininePast: Word('ссасывала', 2),
  neuterPast: Word('ссасывало', 2),
  pluralPast: Word('ссасывали', 2),
  imperativeInformal: Word('ссасывай', 2),
  imperativeFormal: Word('ссасывайте', 2),
  imperfect: [],
};

perfectVerbs.set(ссасывать.name.text, ссасывать);

export { ссасывать };