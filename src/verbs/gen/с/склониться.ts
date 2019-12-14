import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склониться: PerfectVerb = {
  name: Word('склониться', 5),
  singular1stPerson: Word('склонюсь', 5),
  singular2ndPerson: Word('склонишься', 3),
  singular3rdPerson: Word('склонится', 3),
  plural1stPerson: Word('склонимся', 3),
  plural2ndPerson: Word('склонитесь', 3),
  plural3rdPerson: Word('склонятся', 3),
  masculinePast: Word('склонился', 5),
  femininePast: Word('склонилась', 5),
  neuterPast: Word('склонилось', 5),
  pluralPast: Word('склонились', 5),
  imperativeInformal: Word('склонись', 5),
  imperativeFormal: Word('склонитесь', 5),
  imperfect: [],
};

perfectVerbs.set(склониться.name.text, склониться);

export { склониться };