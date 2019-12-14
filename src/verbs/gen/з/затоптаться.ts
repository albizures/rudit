import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затоптаться: PerfectVerb = {
  name: Word('затоптаться', 6),
  singular1stPerson: Word('затопчусь', 6),
  singular2ndPerson: Word('затопчешься', 3),
  singular3rdPerson: Word('затопчется', 3),
  plural1stPerson: Word('затопчемся', 3),
  plural2ndPerson: Word('затопчетесь', 3),
  plural3rdPerson: Word('затопчутся', 3),
  masculinePast: Word('затоптался', 6),
  femininePast: Word('затопталась', 6),
  neuterPast: Word('затопталось', 6),
  pluralPast: Word('затоптались', 6),
  imperativeInformal: Word('затопчись', 6),
  imperativeFormal: Word('затопчитесь', 6),
  imperfect: [],
};

perfectVerbs.set(затоптаться.name.text, затоптаться);

export { затоптаться };