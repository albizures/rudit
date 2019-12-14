import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отговариваться: PerfectVerb = {
  name: Word('отговариваться', 5),
  singular1stPerson: Word('отговариваюсь', 5),
  singular2ndPerson: Word('отговариваешься', 5),
  singular3rdPerson: Word('отговаривается', 5),
  plural1stPerson: Word('отговариваемся', 5),
  plural2ndPerson: Word('отговариваетесь', 5),
  plural3rdPerson: Word('отговариваются', 5),
  masculinePast: Word('отговаривался', 5),
  femininePast: Word('отговаривалась', 5),
  neuterPast: Word('отговаривалось', 5),
  pluralPast: Word('отговаривались', 5),
  imperativeInformal: Word('отговаривайся', 5),
  imperativeFormal: Word('отговаривайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отговариваться.name.text, отговариваться);

export { отговариваться };