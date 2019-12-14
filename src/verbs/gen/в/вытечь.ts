import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытечь: PerfectVerb = {
  name: Word('вытечь', 1),
  singular1stPerson: Word('вытеку', 1),
  singular2ndPerson: Word('вытечешь', 1),
  singular3rdPerson: Word('вытечет', 1),
  plural1stPerson: Word('вытечем', 1),
  plural2ndPerson: Word('вытечете', 1),
  plural3rdPerson: Word('вытекут', 1),
  masculinePast: Word('вытек', 1),
  femininePast: Word('вытекла', 1),
  neuterPast: Word('вытекло', 1),
  pluralPast: Word('вытекли', 1),
  imperativeInformal: Word('вытеки', 1),
  imperativeFormal: Word('вытеките', 1),
  imperfect: ['вытекать','течь'],
};

perfectVerbs.set(вытечь.name.text, вытечь);

export { вытечь };