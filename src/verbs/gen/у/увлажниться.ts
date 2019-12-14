import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увлажниться: PerfectVerb = {
  name: Word('увлажниться', 6),
  singular1stPerson: Word('увлажнюсь', 6),
  singular2ndPerson: Word('увлажнишься', 6),
  singular3rdPerson: Word('увлажнится', 6),
  plural1stPerson: Word('увлажнимся', 6),
  plural2ndPerson: Word('увлажнитесь', 6),
  plural3rdPerson: Word('увлажнятся', 6),
  masculinePast: Word('увлажнился', 6),
  femininePast: Word('увлажнилась', 6),
  neuterPast: Word('увлажнилось', 6),
  pluralPast: Word('увлажнились', 6),
  imperativeInformal: Word('увлажнись', 6),
  imperativeFormal: Word('увлажнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(увлажниться.name.text, увлажниться);

export { увлажниться };