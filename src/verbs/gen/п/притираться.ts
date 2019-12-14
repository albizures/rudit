import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притираться: PerfectVerb = {
  name: Word('притираться', 6),
  singular1stPerson: Word('притираюсь', 6),
  singular2ndPerson: Word('притираешься', 6),
  singular3rdPerson: Word('притирается', 6),
  plural1stPerson: Word('притираемся', 6),
  plural2ndPerson: Word('притираетесь', 6),
  plural3rdPerson: Word('притираются', 6),
  masculinePast: Word('притирался', 6),
  femininePast: Word('притиралась', 6),
  neuterPast: Word('притиралось', 6),
  pluralPast: Word('притирались', 6),
  imperativeInformal: Word('притирайся', 6),
  imperativeFormal: Word('притирайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(притираться.name.text, притираться);

export { притираться };