import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const храниться: PerfectVerb = {
  name: Word('храниться', 4),
  singular1stPerson: Word('хранюсь', 4),
  singular2ndPerson: Word('хранишься', 4),
  singular3rdPerson: Word('хранится', 4),
  plural1stPerson: Word('хранимся', 4),
  plural2ndPerson: Word('хранитесь', 4),
  plural3rdPerson: Word('хранятся', 4),
  masculinePast: Word('хранился', 4),
  femininePast: Word('хранилась', 4),
  neuterPast: Word('хранилось', 4),
  pluralPast: Word('хранились', 4),
  imperativeInformal: Word('хранись', 4),
  imperativeFormal: Word('хранитесь', 4),
  imperfect: [],
};

perfectVerbs.set(храниться.name.text, храниться);

export { храниться };