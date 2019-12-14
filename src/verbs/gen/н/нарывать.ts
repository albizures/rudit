import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарывать: PerfectVerb = {
  name: Word('нарывать', 5),
  singular1stPerson: Word('нарываю', 5),
  singular2ndPerson: Word('нарываешь', 5),
  singular3rdPerson: Word('нарывает', 5),
  plural1stPerson: Word('нарываем', 5),
  plural2ndPerson: Word('нарываете', 5),
  plural3rdPerson: Word('нарывают', 5),
  masculinePast: Word('нарывал', 5),
  femininePast: Word('нарывала', 5),
  neuterPast: Word('нарывало', 5),
  pluralPast: Word('нарывали', 5),
  imperativeInformal: Word('нарывай', 5),
  imperativeFormal: Word('нарывайте', 5),
  imperfect: [],
};

perfectVerbs.set(нарывать.name.text, нарывать);

export { нарывать };