import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задеть: PerfectVerb = {
  name: Word('задеть', 3),
  singular1stPerson: Word('задену', 3),
  singular2ndPerson: Word('заденешь', 3),
  singular3rdPerson: Word('заденет', 3),
  plural1stPerson: Word('заденем', 3),
  plural2ndPerson: Word('заденете', 3),
  plural3rdPerson: Word('заденут', 3),
  masculinePast: Word('задел', 3),
  femininePast: Word('задела', 3),
  neuterPast: Word('задело', 3),
  pluralPast: Word('задели', 3),
  imperativeInformal: Word('задень', 3),
  imperativeFormal: Word('заденьте', 3),
  imperfect: [],
};

perfectVerbs.set(задеть.name.text, задеть);

export { задеть };