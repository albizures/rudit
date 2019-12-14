import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простирывать: PerfectVerb = {
  name: Word('простирывать', 5),
  singular1stPerson: Word('простирываю', 5),
  singular2ndPerson: Word('простирываешь', 5),
  singular3rdPerson: Word('простирывает', 5),
  plural1stPerson: Word('простирываем', 5),
  plural2ndPerson: Word('простирываете', 5),
  plural3rdPerson: Word('простирывают', 5),
  masculinePast: Word('простирывал', 5),
  femininePast: Word('простирывала', 5),
  neuterPast: Word('простирывало', 5),
  pluralPast: Word('простирывали', 5),
  imperativeInformal: Word('простирывай', 5),
  imperativeFormal: Word('простирывайте', 5),
  imperfect: [],
};

perfectVerbs.set(простирывать.name.text, простирывать);

export { простирывать };