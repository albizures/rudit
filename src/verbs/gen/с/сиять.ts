import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сиять: PerfectVerb = {
  name: Word('сиять', 2),
  singular1stPerson: Word('сияю', 2),
  singular2ndPerson: Word('сияешь', 2),
  singular3rdPerson: Word('сияет', 2),
  plural1stPerson: Word('сияем', 2),
  plural2ndPerson: Word('сияете', 2),
  plural3rdPerson: Word('сияют', 2),
  masculinePast: Word('сиял', 2),
  femininePast: Word('сияла', 2),
  neuterPast: Word('сияло', 2),
  pluralPast: Word('сияли', 2),
  imperativeInformal: Word('сияй', 2),
  imperativeFormal: Word('сияйте', 2),
  imperfect: [],
};

perfectVerbs.set(сиять.name.text, сиять);

export { сиять };