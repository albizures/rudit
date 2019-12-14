import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потоптаться: PerfectVerb = {
  name: Word('потоптаться', 6),
  singular1stPerson: Word('потопчусь', 6),
  singular2ndPerson: Word('потопчешься', 3),
  singular3rdPerson: Word('потопчется', 3),
  plural1stPerson: Word('потопчемся', 3),
  plural2ndPerson: Word('потопчетесь', 3),
  plural3rdPerson: Word('потопчутся', 3),
  masculinePast: Word('потоптался', 6),
  femininePast: Word('потопталась', 6),
  neuterPast: Word('потопталось', 6),
  pluralPast: Word('потоптались', 6),
  imperativeInformal: Word('потопчись', 6),
  imperativeFormal: Word('потопчитесь', 6),
  imperfect: [],
};

perfectVerbs.set(потоптаться.name.text, потоптаться);

export { потоптаться };