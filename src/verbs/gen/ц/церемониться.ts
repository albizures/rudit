import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const церемониться: PerfectVerb = {
  name: Word('церемониться', 5),
  singular1stPerson: Word('церемонюсь', 5),
  singular2ndPerson: Word('церемонишься', 5),
  singular3rdPerson: Word('церемонится', 5),
  plural1stPerson: Word('церемонимся', 5),
  plural2ndPerson: Word('церемонитесь', 5),
  plural3rdPerson: Word('церемонятся', 5),
  masculinePast: Word('церемонился', 5),
  femininePast: Word('церемонилась', 5),
  neuterPast: Word('церемонилось', 5),
  pluralPast: Word('церемонились', 5),
  imperativeInformal: Word('церемонься', 5),
  imperativeFormal: Word('церемоньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(церемониться.name.text, церемониться);

export { церемониться };