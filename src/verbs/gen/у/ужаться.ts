import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужаться: PerfectVerb = {
  name: Word('ужаться', 2),
  singular1stPerson: Word('ужмусь', 3),
  singular2ndPerson: Word('ужмёшься', 3),
  singular3rdPerson: Word('ужмётся', 3),
  plural1stPerson: Word('ужмёмся', 3),
  plural2ndPerson: Word('ужмётесь', 3),
  plural3rdPerson: Word('ужмутся', 3),
  masculinePast: Word('ужался', 2),
  femininePast: Word('ужалась', 2),
  neuterPast: Word('ужалось', 2),
  pluralPast: Word('ужались', 2),
  imperativeInformal: Word('ужмись', 3),
  imperativeFormal: Word('ужмитесь', 3),
  imperfect: [],
};

perfectVerbs.set(ужаться.name.text, ужаться);

export { ужаться };