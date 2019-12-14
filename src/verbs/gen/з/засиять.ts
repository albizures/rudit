import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засиять: PerfectVerb = {
  name: Word('засиять', 4),
  singular1stPerson: Word('засияю', 4),
  singular2ndPerson: Word('засияешь', 4),
  singular3rdPerson: Word('засияет', 4),
  plural1stPerson: Word('засияем', 4),
  plural2ndPerson: Word('засияете', 4),
  plural3rdPerson: Word('засияют', 4),
  masculinePast: Word('засиял', 4),
  femininePast: Word('засияла', 4),
  neuterPast: Word('засияло', 4),
  pluralPast: Word('засияли', 4),
  imperativeInformal: Word('засияй', 4),
  imperativeFormal: Word('засияйте', 4),
  imperfect: [],
};

perfectVerbs.set(засиять.name.text, засиять);

export { засиять };