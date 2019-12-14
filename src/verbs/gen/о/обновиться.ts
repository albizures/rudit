import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обновиться: PerfectVerb = {
  name: Word('обновиться', 5),
  singular1stPerson: Word('обновлюсь', 6),
  singular2ndPerson: Word('обновишься', 5),
  singular3rdPerson: Word('обновится', 5),
  plural1stPerson: Word('обновимся', 5),
  plural2ndPerson: Word('обновитесь', 5),
  plural3rdPerson: Word('обновятся', 5),
  masculinePast: Word('обновился', 5),
  femininePast: Word('обновилась', 5),
  neuterPast: Word('обновилось', 5),
  pluralPast: Word('обновились', 5),
  imperativeInformal: Word('обновись', 5),
  imperativeFormal: Word('обновитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обновиться.name.text, обновиться);

export { обновиться };