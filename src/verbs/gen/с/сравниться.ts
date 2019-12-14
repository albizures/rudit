import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сравниться: PerfectVerb = {
  name: Word('сравниться', 5),
  singular1stPerson: Word('сравнюсь', 5),
  singular2ndPerson: Word('сравнишься', 5),
  singular3rdPerson: Word('сравнится', 5),
  plural1stPerson: Word('сравнимся', 5),
  plural2ndPerson: Word('сравнитесь', 5),
  plural3rdPerson: Word('сравнятся', 5),
  masculinePast: Word('сравнился', 5),
  femininePast: Word('сравнилась', 5),
  neuterPast: Word('сравнилось', 5),
  pluralPast: Word('сравнились', 5),
  imperativeInformal: Word('сравнись', 5),
  imperativeFormal: Word('сравнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сравниться.name.text, сравниться);

export { сравниться };