import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сеять: PerfectVerb = {
  name: Word('сеять', 1),
  singular1stPerson: Word('сею', 1),
  singular2ndPerson: Word('сеешь', 1),
  singular3rdPerson: Word('сеет', 1),
  plural1stPerson: Word('сеем', 1),
  plural2ndPerson: Word('сеете', 1),
  plural3rdPerson: Word('сеют', 1),
  masculinePast: Word('сеял', 1),
  femininePast: Word('сеяла', 1),
  neuterPast: Word('сеяло', 1),
  pluralPast: Word('сеяли', 1),
  imperativeInformal: Word('сей', 1),
  imperativeFormal: Word('сейте', 1),
  imperfect: ['посеять'],
};

perfectVerbs.set(сеять.name.text, сеять);

export { сеять };