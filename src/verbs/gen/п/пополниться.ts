import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пополниться: PerfectVerb = {
  name: Word('пополниться', 3),
  singular1stPerson: Word('пополнюсь', 3),
  singular2ndPerson: Word('пополнишься', 3),
  singular3rdPerson: Word('пополнится', 3),
  plural1stPerson: Word('пополнимся', 3),
  plural2ndPerson: Word('пополнитесь', 3),
  plural3rdPerson: Word('пополнятся', 3),
  masculinePast: Word('пополнился', 3),
  femininePast: Word('пополнилась', 3),
  neuterPast: Word('пополнилось', 3),
  pluralPast: Word('пополнились', 3),
  imperativeInformal: Word('пополнись', 3),
  imperativeFormal: Word('пополнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(пополниться.name.text, пополниться);

export { пополниться };