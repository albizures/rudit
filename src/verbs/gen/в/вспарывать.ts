import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспарывать: PerfectVerb = {
  name: Word('вспарывать', 3),
  singular1stPerson: Word('вспарываю', 3),
  singular2ndPerson: Word('вспарываешь', 3),
  singular3rdPerson: Word('вспарывает', 3),
  plural1stPerson: Word('вспарываем', 3),
  plural2ndPerson: Word('вспарываете', 3),
  plural3rdPerson: Word('вспарывают', 3),
  masculinePast: Word('вспарывал', 3),
  femininePast: Word('вспарывала', 3),
  neuterPast: Word('вспарывало', 3),
  pluralPast: Word('вспарывали', 3),
  imperativeInformal: Word('вспарывай', 3),
  imperativeFormal: Word('вспарывайте', 3),
  imperfect: [],
};

perfectVerbs.set(вспарывать.name.text, вспарывать);

export { вспарывать };