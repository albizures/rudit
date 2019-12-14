import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкалывать: PerfectVerb = {
  name: Word('выкалывать', 3),
  singular1stPerson: Word('выкалываю', 3),
  singular2ndPerson: Word('выкалываешь', 3),
  singular3rdPerson: Word('выкалывает', 3),
  plural1stPerson: Word('выкалываем', 3),
  plural2ndPerson: Word('выкалываете', 3),
  plural3rdPerson: Word('выкалывают', 3),
  masculinePast: Word('выкалывал', 3),
  femininePast: Word('выкалывала', 3),
  neuterPast: Word('выкалывало', 3),
  pluralPast: Word('выкалывали', 3),
  imperativeInformal: Word('выкалывай', 3),
  imperativeFormal: Word('выкалывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выкалывать.name.text, выкалывать);

export { выкалывать };