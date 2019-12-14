import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспарять: PerfectVerb = {
  name: Word('воспарять', 6),
  singular1stPerson: Word('воспаряю', 6),
  singular2ndPerson: Word('воспаряешь', 6),
  singular3rdPerson: Word('воспаряет', 6),
  plural1stPerson: Word('воспаряем', 6),
  plural2ndPerson: Word('воспаряете', 6),
  plural3rdPerson: Word('воспаряют', 6),
  masculinePast: Word('воспарял', 6),
  femininePast: Word('воспаряла', 6),
  neuterPast: Word('воспаряло', 6),
  pluralPast: Word('воспаряли', 6),
  imperativeInformal: Word('воспаряй', 6),
  imperativeFormal: Word('воспаряйте', 6),
  imperfect: [],
};

perfectVerbs.set(воспарять.name.text, воспарять);

export { воспарять };