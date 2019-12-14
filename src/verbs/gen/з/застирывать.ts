import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застирывать: PerfectVerb = {
  name: Word('застирывать', 4),
  singular1stPerson: Word('застирываю', 4),
  singular2ndPerson: Word('застирываешь', 4),
  singular3rdPerson: Word('застирывает', 4),
  plural1stPerson: Word('застирываем', 4),
  plural2ndPerson: Word('застирываете', 4),
  plural3rdPerson: Word('застирывают', 4),
  masculinePast: Word('застирывал', 4),
  femininePast: Word('застирывала', 4),
  neuterPast: Word('застирывало', 4),
  pluralPast: Word('застирывали', 4),
  imperativeInformal: Word('застирывай', 4),
  imperativeFormal: Word('застирывайте', 4),
  imperfect: [],
};

perfectVerbs.set(застирывать.name.text, застирывать);

export { застирывать };