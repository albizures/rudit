import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const метаться: PerfectVerb = {
  name: Word('метаться', 3),
  singular1stPerson: Word('мечусь', 3),
  singular2ndPerson: Word('мечешься', 1),
  singular3rdPerson: Word('мечется', 1),
  plural1stPerson: Word('мечемся', 1),
  plural2ndPerson: Word('мечетесь', 1),
  plural3rdPerson: Word('мечутся', 1),
  masculinePast: Word('метался', 3),
  femininePast: Word('металась', 3),
  neuterPast: Word('металось', 3),
  pluralPast: Word('метались', 3),
  imperativeInformal: Word('мечись', 3),
  imperativeFormal: Word('мечитесь', 3),
  imperfect: [],
};

perfectVerbs.set(метаться.name.text, метаться);

export { метаться };