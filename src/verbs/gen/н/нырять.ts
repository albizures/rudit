import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нырять: PerfectVerb = {
  name: Word('нырять', 3),
  singular1stPerson: Word('ныряю', 3),
  singular2ndPerson: Word('ныряешь', 3),
  singular3rdPerson: Word('ныряет', 3),
  plural1stPerson: Word('ныряем', 3),
  plural2ndPerson: Word('ныряете', 3),
  plural3rdPerson: Word('ныряют', 3),
  masculinePast: Word('нырял', 3),
  femininePast: Word('ныряла', 3),
  neuterPast: Word('ныряло', 3),
  pluralPast: Word('ныряли', 3),
  imperativeInformal: Word('ныряй', 3),
  imperativeFormal: Word('ныряйте', 3),
  imperfect: ['нырнуть'],
};

perfectVerbs.set(нырять.name.text, нырять);

export { нырять };