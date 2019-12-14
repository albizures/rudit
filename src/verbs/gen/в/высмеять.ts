import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высмеять: PerfectVerb = {
  name: Word('высмеять', 1),
  singular1stPerson: Word('высмею', 1),
  singular2ndPerson: Word('высмеешь', 1),
  singular3rdPerson: Word('высмеет', 1),
  plural1stPerson: Word('высмеем', 1),
  plural2ndPerson: Word('высмеете', 1),
  plural3rdPerson: Word('высмеют', 1),
  masculinePast: Word('высмеял', 1),
  femininePast: Word('высмеяла', 1),
  neuterPast: Word('высмеяло', 1),
  pluralPast: Word('высмеяли', 1),
  imperativeInformal: Word('высмей', 1),
  imperativeFormal: Word('высмейте', 1),
  imperfect: [],
};

perfectVerbs.set(высмеять.name.text, высмеять);

export { высмеять };