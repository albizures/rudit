import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшевелиться: PerfectVerb = {
  name: Word('расшевелиться', 8),
  singular1stPerson: Word('расшевелюсь', 8),
  singular2ndPerson: Word('расшевелишься', 8),
  singular3rdPerson: Word('расшевелится', 8),
  plural1stPerson: Word('расшевелимся', 8),
  plural2ndPerson: Word('расшевелитесь', 8),
  plural3rdPerson: Word('расшевелятся', 8),
  masculinePast: Word('расшевелился', 8),
  femininePast: Word('расшевелилась', 8),
  neuterPast: Word('расшевелилось', 8),
  pluralPast: Word('расшевелились', 8),
  imperativeInformal: Word('расшевелись', 8),
  imperativeFormal: Word('расшевелитесь', 8),
  imperfect: [],
};

perfectVerbs.set(расшевелиться.name.text, расшевелиться);

export { расшевелиться };