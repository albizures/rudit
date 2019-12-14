import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выволочь: PerfectVerb = {
  name: Word('выволочь', 1),
  singular1stPerson: Word('выволоку', 1),
  singular2ndPerson: Word('выволочешь', 1),
  singular3rdPerson: Word('выволочет', 1),
  plural1stPerson: Word('выволочем', 1),
  plural2ndPerson: Word('выволочете', 1),
  plural3rdPerson: Word('выволокут', 1),
  masculinePast: Word('выволок', 1),
  femininePast: Word('выволокла', 1),
  neuterPast: Word('выволокло', 1),
  pluralPast: Word('выволокли', 1),
  imperativeInformal: Word('выволоки', 1),
  imperativeFormal: Word('выволоките', 1),
  imperfect: [],
};

perfectVerbs.set(выволочь.name.text, выволочь);

export { выволочь };