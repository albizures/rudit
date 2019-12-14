import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повиниться: PerfectVerb = {
  name: Word('повиниться', 5),
  singular1stPerson: Word('повинюсь', 5),
  singular2ndPerson: Word('повинишься', 5),
  singular3rdPerson: Word('повинится', 5),
  plural1stPerson: Word('повинимся', 5),
  plural2ndPerson: Word('повинитесь', 5),
  plural3rdPerson: Word('повинятся', 5),
  masculinePast: Word('повинился', 5),
  femininePast: Word('повинилась', 5),
  neuterPast: Word('повинилось', 5),
  pluralPast: Word('повинились', 5),
  imperativeInformal: Word('повинись', 5),
  imperativeFormal: Word('повинитесь', 5),
  imperfect: [],
};

perfectVerbs.set(повиниться.name.text, повиниться);

export { повиниться };