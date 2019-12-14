import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвенчаться: PerfectVerb = {
  name: Word('обвенчаться', 6),
  singular1stPerson: Word('обвенчаюсь', 6),
  singular2ndPerson: Word('обвенчаешься', 6),
  singular3rdPerson: Word('обвенчается', 6),
  plural1stPerson: Word('обвенчаемся', 6),
  plural2ndPerson: Word('обвенчаетесь', 6),
  plural3rdPerson: Word('обвенчаются', 6),
  masculinePast: Word('обвенчался', 6),
  femininePast: Word('обвенчалась', 6),
  neuterPast: Word('обвенчалось', 6),
  pluralPast: Word('обвенчались', 6),
  imperativeInformal: Word('обвенчайся', 6),
  imperativeFormal: Word('обвенчайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(обвенчаться.name.text, обвенчаться);

export { обвенчаться };