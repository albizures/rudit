import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const баллотироваться: PerfectVerb = {
  name: Word('баллотироваться', 6),
  singular1stPerson: Word('баллотируюсь', 6),
  singular2ndPerson: Word('баллотируешься', 6),
  singular3rdPerson: Word('баллотируется', 6),
  plural1stPerson: Word('баллотируемся', 6),
  plural2ndPerson: Word('баллотируетесь', 6),
  plural3rdPerson: Word('баллотируются', 6),
  masculinePast: Word('баллотировался', 6),
  femininePast: Word('баллотировалась', 6),
  neuterPast: Word('баллотировалось', 6),
  pluralPast: Word('баллотировались', 6),
  imperativeInformal: Word('баллотируйся', 6),
  imperativeFormal: Word('баллотируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(баллотироваться.name.text, баллотироваться);

export { баллотироваться };