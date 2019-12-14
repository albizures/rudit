import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачесаться: PerfectVerb = {
  name: Word('зачесаться', 5),
  singular1stPerson: Word('зачешусь', 5),
  singular2ndPerson: Word('зачешешься', 3),
  singular3rdPerson: Word('зачешется', 3),
  plural1stPerson: Word('зачешемся', 3),
  plural2ndPerson: Word('зачешетесь', 3),
  plural3rdPerson: Word('зачешутся', 3),
  masculinePast: Word('зачесался', 5),
  femininePast: Word('зачесалась', 5),
  neuterPast: Word('зачесалось', 5),
  pluralPast: Word('зачесались', 5),
  imperativeInformal: Word('зачешись', 5),
  imperativeFormal: Word('зачешитесь', 5),
  imperfect: [],
};

perfectVerbs.set(зачесаться.name.text, зачесаться);

export { зачесаться };