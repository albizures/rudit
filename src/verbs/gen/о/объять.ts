import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const объять: PerfectVerb = {
  name: Word('объять', 3),
  singular1stPerson: Word('-', -1),
  singular2ndPerson: Word('-', -1),
  singular3rdPerson: Word('-', -1),
  plural1stPerson: Word('-', -1),
  plural2ndPerson: Word('-', -1),
  plural3rdPerson: Word('-', -1),
  masculinePast: Word('объял', 3),
  femininePast: Word('объяла', 3),
  neuterPast: Word('объяло', 3),
  pluralPast: Word('объяли', 3),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(объять.name.text, объять);

export { объять };