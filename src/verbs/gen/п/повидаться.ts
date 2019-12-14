import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повидаться: PerfectVerb = {
  name: Word('повидаться', 5),
  singular1stPerson: Word('повидаюсь', 5),
  singular2ndPerson: Word('повидаешься', 5),
  singular3rdPerson: Word('повидается', 5),
  plural1stPerson: Word('повидаемся', 5),
  plural2ndPerson: Word('повидаетесь', 5),
  plural3rdPerson: Word('повидаются', 5),
  masculinePast: Word('повидался', 5),
  femininePast: Word('повидалась', 5),
  neuterPast: Word('повидалось', 5),
  pluralPast: Word('повидались', 5),
  imperativeInformal: Word('повидайся', 5),
  imperativeFormal: Word('повидайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(повидаться.name.text, повидаться);

export { повидаться };