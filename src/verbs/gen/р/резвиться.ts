import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const резвиться: PerfectVerb = {
  name: Word('резвиться', 4),
  singular1stPerson: Word('резвлюсь', 5),
  singular2ndPerson: Word('резвишься', 4),
  singular3rdPerson: Word('резвится', 4),
  plural1stPerson: Word('резвимся', 4),
  plural2ndPerson: Word('резвитесь', 4),
  plural3rdPerson: Word('резвятся', 4),
  masculinePast: Word('резвился', 4),
  femininePast: Word('резвилась', 4),
  neuterPast: Word('резвилось', 4),
  pluralPast: Word('резвились', 4),
  imperativeInformal: Word('резвись', 4),
  imperativeFormal: Word('резвитесь', 4),
  imperfect: [],
};

perfectVerbs.set(резвиться.name.text, резвиться);

export { резвиться };