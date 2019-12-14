import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подновить: PerfectVerb = {
  name: Word('подновить', 6),
  singular1stPerson: Word('подновлю', 7),
  singular2ndPerson: Word('подновишь', 6),
  singular3rdPerson: Word('подновит', 6),
  plural1stPerson: Word('подновим', 6),
  plural2ndPerson: Word('подновите', 6),
  plural3rdPerson: Word('подновят', 6),
  masculinePast: Word('подновил', 6),
  femininePast: Word('подновила', 6),
  neuterPast: Word('подновило', 6),
  pluralPast: Word('подновили', 6),
  imperativeInformal: Word('поднови', 6),
  imperativeFormal: Word('подновите', 6),
  imperfect: [],
};

perfectVerbs.set(подновить.name.text, подновить);

export { подновить };