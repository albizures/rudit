import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычесть: PerfectVerb = {
  name: Word('вычесть', 1),
  singular1stPerson: Word('вычту', 1),
  singular2ndPerson: Word('вычтешь', 1),
  singular3rdPerson: Word('вычтет', 1),
  plural1stPerson: Word('вычтем', 1),
  plural2ndPerson: Word('вычтете', 1),
  plural3rdPerson: Word('вычтут', 1),
  masculinePast: Word('вычел', 1),
  femininePast: Word('вычла', 1),
  neuterPast: Word('вычло', 1),
  pluralPast: Word('вычли', 1),
  imperativeInformal: Word('вычти', 1),
  imperativeFormal: Word('вычтите', 1),
  imperfect: ['вычитать'],
};

perfectVerbs.set(вычесть.name.text, вычесть);

export { вычесть };