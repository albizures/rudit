import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всеять: PerfectVerb = {
  name: Word('всеять', 2),
  singular1stPerson: Word('всею', 2),
  singular2ndPerson: Word('всеешь', 2),
  singular3rdPerson: Word('всеет', 2),
  plural1stPerson: Word('всеем', 2),
  plural2ndPerson: Word('всеете', 2),
  plural3rdPerson: Word('всеют', 2),
  masculinePast: Word('всеял', 2),
  femininePast: Word('всеяла', 2),
  neuterPast: Word('всеяло', 2),
  pluralPast: Word('всеяли', 2),
  imperativeInformal: Word('всей', 2),
  imperativeFormal: Word('всейте', 2),
  imperfect: [],
};

perfectVerbs.set(всеять.name.text, всеять);

export { всеять };