import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затесаться: PerfectVerb = {
  name: Word('затесаться', 5),
  singular1stPerson: Word('затешусь', 5),
  singular2ndPerson: Word('затешешься', 3),
  singular3rdPerson: Word('затешется', 3),
  plural1stPerson: Word('затешемся', 3),
  plural2ndPerson: Word('затешетесь', 3),
  plural3rdPerson: Word('затешутся', 3),
  masculinePast: Word('затесался', 5),
  femininePast: Word('затесалась', 5),
  neuterPast: Word('затесалось', 5),
  pluralPast: Word('затесались', 5),
  imperativeInformal: Word('затешись', 5),
  imperativeFormal: Word('затешитесь', 5),
  imperfect: [],
};

perfectVerbs.set(затесаться.name.text, затесаться);

export { затесаться };