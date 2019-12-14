import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хорохориться: PerfectVerb = {
  name: Word('хорохориться', 5),
  singular1stPerson: Word('хорохорюсь', 5),
  singular2ndPerson: Word('хорохоришься', 5),
  singular3rdPerson: Word('хорохорится', 5),
  plural1stPerson: Word('хорохоримся', 5),
  plural2ndPerson: Word('хорохоритесь', 5),
  plural3rdPerson: Word('хорохорятся', 5),
  masculinePast: Word('хорохорился', 5),
  femininePast: Word('хорохорилась', 5),
  neuterPast: Word('хорохорилось', 5),
  pluralPast: Word('хорохорились', 5),
  imperativeInformal: Word('хорохорься', 5),
  imperativeFormal: Word('хорохорьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(хорохориться.name.text, хорохориться);

export { хорохориться };