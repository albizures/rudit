import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взяться: PerfectVerb = {
  name: Word('взяться', 2),
  singular1stPerson: Word('возьмусь', 5),
  singular2ndPerson: Word('возьмёшься', 1),
  singular3rdPerson: Word('возьмётся', 1),
  plural1stPerson: Word('возьмёмся', 1),
  plural2ndPerson: Word('возьмётесь', 7),
  plural3rdPerson: Word('возьмутся', 5),
  masculinePast: Word('взялся', 2),
  femininePast: Word('взялась', 4),
  neuterPast: Word('взялось,взяло'сь', 2),
  pluralPast: Word('взялись', 2),
  imperativeInformal: Word('возьмись', 5),
  imperativeFormal: Word('возьмитесь', 5),
  imperfect: ['браться'],
};

perfectVerbs.set(взяться.name.text, взяться);

export { взяться };