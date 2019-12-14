import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшевелить: PerfectVerb = {
  name: Word('расшевелить', 8),
  singular1stPerson: Word('расшевелю', 8),
  singular2ndPerson: Word('расшевелишь', 8),
  singular3rdPerson: Word('расшевелит', 8),
  plural1stPerson: Word('расшевелим', 8),
  plural2ndPerson: Word('расшевелите', 8),
  plural3rdPerson: Word('расшевелят', 8),
  masculinePast: Word('расшевелил', 8),
  femininePast: Word('расшевелила', 8),
  neuterPast: Word('расшевелило', 8),
  pluralPast: Word('расшевелили', 8),
  imperativeInformal: Word('расшевели', 8),
  imperativeFormal: Word('расшевелите', 8),
  imperfect: [],
};

perfectVerbs.set(расшевелить.name.text, расшевелить);

export { расшевелить };