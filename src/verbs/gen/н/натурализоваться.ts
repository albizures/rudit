import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натурализоваться: PerfectVerb = {
  name: Word('натурализоваться', 11),
  singular1stPerson: Word('натурализуюсь', 9),
  singular2ndPerson: Word('натурализуешься', 9),
  singular3rdPerson: Word('натурализуется', 9),
  plural1stPerson: Word('натурализуемся', 9),
  plural2ndPerson: Word('натурализуетесь', 9),
  plural3rdPerson: Word('натурализуются', 9),
  masculinePast: Word('натурализовался', 11),
  femininePast: Word('натурализовалась', 11),
  neuterPast: Word('натурализовалось', 11),
  pluralPast: Word('натурализовались', 11),
  imperativeInformal: Word('натурализуйся', 9),
  imperativeFormal: Word('натурализуйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(натурализоваться.name.text, натурализоваться);

export { натурализоваться };