import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утираться: PerfectVerb = {
  name: Word('утираться', 4),
  singular1stPerson: Word('утираюсь', 4),
  singular2ndPerson: Word('утираешься', 4),
  singular3rdPerson: Word('утирается', 4),
  plural1stPerson: Word('утираемся', 4),
  plural2ndPerson: Word('утираетесь', 4),
  plural3rdPerson: Word('утираются', 4),
  masculinePast: Word('утирался', 4),
  femininePast: Word('утиралась', 4),
  neuterPast: Word('утиралось', 4),
  pluralPast: Word('утирались', 4),
  imperativeInformal: Word('утирайся', 4),
  imperativeFormal: Word('утирайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(утираться.name.text, утираться);

export { утираться };