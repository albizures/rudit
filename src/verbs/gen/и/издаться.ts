import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издаться: PerfectVerb = {
  name: Word('издаться', 3),
  singular1stPerson: Word('издамся', 3),
  singular2ndPerson: Word('издашься', 3),
  singular3rdPerson: Word('издастся', 3),
  plural1stPerson: Word('издадимся', 5),
  plural2ndPerson: Word('издадитесь', 5),
  plural3rdPerson: Word('издадутся', 5),
  masculinePast: Word('издался', 3),
  femininePast: Word('издалась', 5),
  neuterPast: Word('издалось,издало'сь', 3),
  pluralPast: Word('издались', 3),
  imperativeInformal: Word('издайся', 3),
  imperativeFormal: Word('издайтесь', 3),
  imperfect: ['издаваться'],
};

perfectVerbs.set(издаться.name.text, издаться);

export { издаться };