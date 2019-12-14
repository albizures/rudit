import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const окукливаться: PerfectVerb = {
  name: Word('окукливаться', 2),
  singular1stPerson: Word('окукливаюсь', 2),
  singular2ndPerson: Word('окукливаешься', 2),
  singular3rdPerson: Word('окукливается', 2),
  plural1stPerson: Word('окукливаемся', 2),
  plural2ndPerson: Word('окукливаетесь', 2),
  plural3rdPerson: Word('окукливаются', 2),
  masculinePast: Word('окукливался', 2),
  femininePast: Word('окукливалась', 2),
  neuterPast: Word('окукливалось', 2),
  pluralPast: Word('окукливались', 2),
  imperativeInformal: Word('окукливайся', 2),
  imperativeFormal: Word('окукливайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(окукливаться.name.text, окукливаться);

export { окукливаться };