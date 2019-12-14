import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предаться: PerfectVerb = {
  name: Word('предаться', 4),
  singular1stPerson: Word('предамся', 4),
  singular2ndPerson: Word('предашься', 4),
  singular3rdPerson: Word('предастся', 4),
  plural1stPerson: Word('предадимся', 6),
  plural2ndPerson: Word('предадитесь', 6),
  plural3rdPerson: Word('предадутся', 6),
  masculinePast: Word('предался', 4),
  femininePast: Word('предалась', 6),
  neuterPast: Word('предалось//предало'сь', 4),
  pluralPast: Word('предались//предали'сь', 4),
  imperativeInformal: Word('предайся', 4),
  imperativeFormal: Word('предайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(предаться.name.text, предаться);

export { предаться };