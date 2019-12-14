import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просиять: PerfectVerb = {
  name: Word('просиять', 5),
  singular1stPerson: Word('просияю', 5),
  singular2ndPerson: Word('просияешь', 5),
  singular3rdPerson: Word('просияет', 5),
  plural1stPerson: Word('просияем', 5),
  plural2ndPerson: Word('просияете', 5),
  plural3rdPerson: Word('просияют', 5),
  masculinePast: Word('просиял', 5),
  femininePast: Word('просияла', 5),
  neuterPast: Word('просияло', 5),
  pluralPast: Word('просияли', 5),
  imperativeInformal: Word('просияй', 5),
  imperativeFormal: Word('просияйте', 5),
  imperfect: [],
};

perfectVerbs.set(просиять.name.text, просиять);

export { просиять };