import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхохотаться: PerfectVerb = {
  name: Word('расхохотаться', 8),
  singular1stPerson: Word('расхохочусь', 8),
  singular2ndPerson: Word('расхохочешься', 6),
  singular3rdPerson: Word('расхохочется', 6),
  plural1stPerson: Word('расхохочемся', 6),
  plural2ndPerson: Word('расхохочетесь', 6),
  plural3rdPerson: Word('расхохочутся', 6),
  masculinePast: Word('расхохотался', 8),
  femininePast: Word('расхохоталась', 8),
  neuterPast: Word('расхохоталось', 8),
  pluralPast: Word('расхохотались', 8),
  imperativeInformal: Word('расхохочись', 8),
  imperativeFormal: Word('расхохочитесь', 8),
  imperfect: [],
};

perfectVerbs.set(расхохотаться.name.text, расхохотаться);

export { расхохотаться };