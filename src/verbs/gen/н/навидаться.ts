import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навидаться: PerfectVerb = {
  name: Word('навидаться', 5),
  singular1stPerson: Word('навидаюсь', 5),
  singular2ndPerson: Word('навидаешься', 5),
  singular3rdPerson: Word('навидается', 5),
  plural1stPerson: Word('навидаемся', 5),
  plural2ndPerson: Word('навидаетесь', 5),
  plural3rdPerson: Word('навидаются', 5),
  masculinePast: Word('навидался', 5),
  femininePast: Word('навидалась', 5),
  neuterPast: Word('навидалось', 5),
  pluralPast: Word('навидались', 5),
  imperativeInformal: Word('навидайся', 5),
  imperativeFormal: Word('навидайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(навидаться.name.text, навидаться);

export { навидаться };