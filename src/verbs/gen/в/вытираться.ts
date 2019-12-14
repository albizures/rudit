import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытираться: PerfectVerb = {
  name: Word('вытираться', 5),
  singular1stPerson: Word('вытираюсь', 5),
  singular2ndPerson: Word('вытираешься', 5),
  singular3rdPerson: Word('вытирается', 5),
  plural1stPerson: Word('вытираемся', 5),
  plural2ndPerson: Word('вытираетесь', 5),
  plural3rdPerson: Word('вытираются', 5),
  masculinePast: Word('вытирался', 5),
  femininePast: Word('вытиралась', 5),
  neuterPast: Word('вытиралось', 5),
  pluralPast: Word('вытирались', 5),
  imperativeInformal: Word('вытирайся', 5),
  imperativeFormal: Word('вытирайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вытираться.name.text, вытираться);

export { вытираться };