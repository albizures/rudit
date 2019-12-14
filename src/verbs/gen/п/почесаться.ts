import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const почесаться: PerfectVerb = {
  name: Word('почесаться', 5),
  singular1stPerson: Word('почешусь', 5),
  singular2ndPerson: Word('почешешься', 3),
  singular3rdPerson: Word('почешется', 3),
  plural1stPerson: Word('почешемся', 3),
  plural2ndPerson: Word('почешетесь', 3),
  plural3rdPerson: Word('почешутся', 3),
  masculinePast: Word('почесался', 5),
  femininePast: Word('почесалась', 5),
  neuterPast: Word('почесалось', 5),
  pluralPast: Word('почесались', 5),
  imperativeInformal: Word('почешись', 5),
  imperativeFormal: Word('почешитесь', 5),
  imperfect: [],
};

perfectVerbs.set(почесаться.name.text, почесаться);

export { почесаться };