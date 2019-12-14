import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посылаться: PerfectVerb = {
  name: Word('посылаться', 5),
  singular1stPerson: Word('посылаюсь', 5),
  singular2ndPerson: Word('посылаешься', 5),
  singular3rdPerson: Word('посылается', 5),
  plural1stPerson: Word('посылаемся', 5),
  plural2ndPerson: Word('посылаетесь', 5),
  plural3rdPerson: Word('посылаются', 5),
  masculinePast: Word('посылался', 5),
  femininePast: Word('посылалась', 5),
  neuterPast: Word('посылалось', 5),
  pluralPast: Word('посылались', 5),
  imperativeInformal: Word('посылайся', 5),
  imperativeFormal: Word('посылайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(посылаться.name.text, посылаться);

export { посылаться };