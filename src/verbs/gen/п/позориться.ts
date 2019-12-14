import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позориться: PerfectVerb = {
  name: Word('позориться', 3),
  singular1stPerson: Word('позорюсь', 3),
  singular2ndPerson: Word('позоришься', 3),
  singular3rdPerson: Word('позорится', 3),
  plural1stPerson: Word('позоримся', 3),
  plural2ndPerson: Word('позоритесь', 3),
  plural3rdPerson: Word('позорятся', 3),
  masculinePast: Word('позорился', 3),
  femininePast: Word('позорилась', 3),
  neuterPast: Word('позорилось', 3),
  pluralPast: Word('позорились', 3),
  imperativeInformal: Word('позорься', 3),
  imperativeFormal: Word('позорьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(позориться.name.text, позориться);

export { позориться };