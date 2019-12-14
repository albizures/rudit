import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наполниться: PerfectVerb = {
  name: Word('наполниться', 3),
  singular1stPerson: Word('наполнюсь', 3),
  singular2ndPerson: Word('наполнишься', 3),
  singular3rdPerson: Word('наполнится', 3),
  plural1stPerson: Word('наполнимся', 3),
  plural2ndPerson: Word('наполнитесь', 3),
  plural3rdPerson: Word('наполнятся', 3),
  masculinePast: Word('наполнился', 3),
  femininePast: Word('наполнилась', 3),
  neuterPast: Word('наполнилось', 3),
  pluralPast: Word('наполнились', 3),
  imperativeInformal: Word('наполнись', 3),
  imperativeFormal: Word('наполнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(наполниться.name.text, наполниться);

export { наполниться };