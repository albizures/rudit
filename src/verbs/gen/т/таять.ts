import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таять: PerfectVerb = {
  name: Word('таять', 1),
  singular1stPerson: Word('таю', 1),
  singular2ndPerson: Word('таешь', 1),
  singular3rdPerson: Word('тает', 1),
  plural1stPerson: Word('таем', 1),
  plural2ndPerson: Word('таете', 1),
  plural3rdPerson: Word('тают', 1),
  masculinePast: Word('таял', 1),
  femininePast: Word('таяла', 1),
  neuterPast: Word('таяло', 1),
  pluralPast: Word('таяли', 1),
  imperativeInformal: Word('тай', 1),
  imperativeFormal: Word('тайте', 1),
  imperfect: [],
};

perfectVerbs.set(таять.name.text, таять);

export { таять };