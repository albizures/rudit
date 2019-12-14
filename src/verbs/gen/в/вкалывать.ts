import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вкалывать: PerfectVerb = {
  name: Word('вкалывать', 2),
  singular1stPerson: Word('вкалываю', 2),
  singular2ndPerson: Word('вкалываешь', 2),
  singular3rdPerson: Word('вкалывает', 2),
  plural1stPerson: Word('вкалываем', 2),
  plural2ndPerson: Word('вкалываете', 2),
  plural3rdPerson: Word('вкалывают', 2),
  masculinePast: Word('вкалывал', 2),
  femininePast: Word('вкалывала', 2),
  neuterPast: Word('вкалывало', 2),
  pluralPast: Word('вкалывали', 2),
  imperativeInformal: Word('вкалывай', 2),
  imperativeFormal: Word('вкалывайте', 2),
  imperfect: [],
};

perfectVerbs.set(вкалывать.name.text, вкалывать);

export { вкалывать };