import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const маять: PerfectVerb = {
  name: Word('маять', 1),
  singular1stPerson: Word('маю', 1),
  singular2ndPerson: Word('маешь', 1),
  singular3rdPerson: Word('мает', 1),
  plural1stPerson: Word('маем', 1),
  plural2ndPerson: Word('маете', 1),
  plural3rdPerson: Word('мают', 1),
  masculinePast: Word('маял', 1),
  femininePast: Word('маяла', 1),
  neuterPast: Word('маяло', 1),
  pluralPast: Word('маяли', 1),
  imperativeInformal: Word('май', 1),
  imperativeFormal: Word('майте', 1),
  imperfect: [],
};

perfectVerbs.set(маять.name.text, маять);

export { маять };