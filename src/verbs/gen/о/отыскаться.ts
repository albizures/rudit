import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отыскаться: PerfectVerb = {
  name: Word('отыскаться', 5),
  singular1stPerson: Word('отыщусь', 4),
  singular2ndPerson: Word('отыщешься', 2),
  singular3rdPerson: Word('отыщется', 2),
  plural1stPerson: Word('отыщемся', 2),
  plural2ndPerson: Word('отыщетесь', 2),
  plural3rdPerson: Word('отыщутся', 2),
  masculinePast: Word('отыскался', 5),
  femininePast: Word('отыскалась', 5),
  neuterPast: Word('отыскалось', 5),
  pluralPast: Word('отыскались', 5),
  imperativeInformal: Word('отыщись', 4),
  imperativeFormal: Word('отыщитесь', 4),
  imperfect: [],
};

perfectVerbs.set(отыскаться.name.text, отыскаться);

export { отыскаться };