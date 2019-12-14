import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приять: PerfectVerb = {
  name: Word('приять', 3),
  singular1stPerson: Word('-', -1),
  singular2ndPerson: Word('-', -1),
  singular3rdPerson: Word('-', -1),
  plural1stPerson: Word('-', -1),
  plural2ndPerson: Word('-', -1),
  plural3rdPerson: Word('-', -1),
  masculinePast: Word('приял', 3),
  femininePast: Word('прияла', 3),
  neuterPast: Word('прияло', 3),
  pluralPast: Word('прияли', 3),
  imperativeInformal: Word('-', -1),
  imperativeFormal: Word('-', -1),
  imperfect: [],
};

perfectVerbs.set(приять.name.text, приять);

export { приять };