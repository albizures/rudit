import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задеваться: PerfectVerb = {
  name: Word('задеваться', 5),
  singular1stPerson: Word('задеваюсь', 5),
  singular2ndPerson: Word('задеваешься', 5),
  singular3rdPerson: Word('задевается', 5),
  plural1stPerson: Word('задеваемся', 5),
  plural2ndPerson: Word('задеваетесь', 5),
  plural3rdPerson: Word('задеваются', 5),
  masculinePast: Word('задевался', 5),
  femininePast: Word('задевалась', 5),
  neuterPast: Word('задевалось', 5),
  pluralPast: Word('задевались', 5),
  imperativeInformal: Word('задевайся', 5),
  imperativeFormal: Word('задевайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(задеваться.name.text, задеваться);

export { задеваться };