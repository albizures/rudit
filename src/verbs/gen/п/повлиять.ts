import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повлиять: PerfectVerb = {
  name: Word('повлиять', 5),
  singular1stPerson: Word('повлияю', 5),
  singular2ndPerson: Word('повлияешь', 5),
  singular3rdPerson: Word('повлияет', 5),
  plural1stPerson: Word('повлияем', 5),
  plural2ndPerson: Word('повлияете', 5),
  plural3rdPerson: Word('повлияют', 5),
  masculinePast: Word('повлиял', 5),
  femininePast: Word('повлияла', 5),
  neuterPast: Word('повлияло', 5),
  pluralPast: Word('повлияли', 5),
  imperativeInformal: Word('повлияй', 5),
  imperativeFormal: Word('повлияйте', 5),
  imperfect: [],
};

perfectVerbs.set(повлиять.name.text, повлиять);

export { повлиять };