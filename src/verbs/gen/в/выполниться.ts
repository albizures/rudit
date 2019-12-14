import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выполниться: PerfectVerb = {
  name: Word('выполниться', 1),
  singular1stPerson: Word('выполнюсь', 1),
  singular2ndPerson: Word('выполнишься', 1),
  singular3rdPerson: Word('выполнится', 1),
  plural1stPerson: Word('выполнимся', 1),
  plural2ndPerson: Word('выполнитесь', 1),
  plural3rdPerson: Word('выполнятся', 1),
  masculinePast: Word('выполнился', 1),
  femininePast: Word('выполнилась', 1),
  neuterPast: Word('выполнилось', 1),
  pluralPast: Word('выполнились', 1),
  imperativeInformal: Word('выполнись', 1),
  imperativeFormal: Word('выполнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выполниться.name.text, выполниться);

export { выполниться };