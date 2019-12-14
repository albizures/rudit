import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассеять: PerfectVerb = {
  name: Word('рассеять', 4),
  singular1stPerson: Word('рассею', 4),
  singular2ndPerson: Word('рассеешь', 4),
  singular3rdPerson: Word('рассеет', 4),
  plural1stPerson: Word('рассеем', 4),
  plural2ndPerson: Word('рассеете', 4),
  plural3rdPerson: Word('рассеют', 4),
  masculinePast: Word('рассеял', 4),
  femininePast: Word('рассеяла', 4),
  neuterPast: Word('рассеяло', 4),
  pluralPast: Word('рассеяли', 4),
  imperativeInformal: Word('рассей', 4),
  imperativeFormal: Word('рассейте', 4),
  imperfect: [],
};

perfectVerbs.set(рассеять.name.text, рассеять);

export { рассеять };