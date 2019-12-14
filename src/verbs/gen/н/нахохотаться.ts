import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахохотаться: PerfectVerb = {
  name: Word('нахохотаться', 7),
  singular1stPerson: Word('нахохочусь', 7),
  singular2ndPerson: Word('нахохочешься', 5),
  singular3rdPerson: Word('нахохочется', 5),
  plural1stPerson: Word('нахохочемся', 5),
  plural2ndPerson: Word('нахохочетесь', 5),
  plural3rdPerson: Word('нахохочутся', 5),
  masculinePast: Word('нахохотался', 7),
  femininePast: Word('нахохоталась', 7),
  neuterPast: Word('нахохоталось', 7),
  pluralPast: Word('нахохотались', 7),
  imperativeInformal: Word('нахохочись', 7),
  imperativeFormal: Word('нахохочитесь', 7),
  imperfect: [],
};

perfectVerbs.set(нахохотаться.name.text, нахохотаться);

export { нахохотаться };