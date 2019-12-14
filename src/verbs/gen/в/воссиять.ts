import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссиять: PerfectVerb = {
  name: Word('воссиять', 5),
  singular1stPerson: Word('воссияю', 5),
  singular2ndPerson: Word('воссияешь', 5),
  singular3rdPerson: Word('воссияет', 5),
  plural1stPerson: Word('воссияем', 5),
  plural2ndPerson: Word('воссияете', 5),
  plural3rdPerson: Word('воссияют', 5),
  masculinePast: Word('воссиял', 5),
  femininePast: Word('воссияла', 5),
  neuterPast: Word('воссияло', 5),
  pluralPast: Word('воссияли', 5),
  imperativeInformal: Word('воссияй', 5),
  imperativeFormal: Word('воссияйте', 5),
  imperfect: [],
};

perfectVerbs.set(воссиять.name.text, воссиять);

export { воссиять };