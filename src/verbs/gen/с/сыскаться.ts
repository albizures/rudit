import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сыскаться: PerfectVerb = {
  name: Word('сыскаться', 4),
  singular1stPerson: Word('сыщусь', 3),
  singular2ndPerson: Word('сыщешься', 1),
  singular3rdPerson: Word('сыщется', 1),
  plural1stPerson: Word('сыщемся', 1),
  plural2ndPerson: Word('сыщетесь', 1),
  plural3rdPerson: Word('сыщутся', 1),
  masculinePast: Word('сыскался', 4),
  femininePast: Word('сыскалась', 4),
  neuterPast: Word('сыскалось', 4),
  pluralPast: Word('сыскались', 4),
  imperativeInformal: Word('сыщись', 3),
  imperativeFormal: Word('сыщитесь', 3),
  imperfect: [],
};

perfectVerbs.set(сыскаться.name.text, сыскаться);

export { сыскаться };