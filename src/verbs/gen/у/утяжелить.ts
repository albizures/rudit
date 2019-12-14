import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утяжелить: PerfectVerb = {
  name: Word('утяжелить', 6),
  singular1stPerson: Word('утяжелю', 6),
  singular2ndPerson: Word('утяжелишь', 6),
  singular3rdPerson: Word('утяжелит', 6),
  plural1stPerson: Word('утяжелим', 6),
  plural2ndPerson: Word('утяжелите', 6),
  plural3rdPerson: Word('утяжелят', 6),
  masculinePast: Word('утяжелил', 6),
  femininePast: Word('утяжелила', 6),
  neuterPast: Word('утяжелило', 6),
  pluralPast: Word('утяжелили', 6),
  imperativeInformal: Word('утяжели', 6),
  imperativeFormal: Word('утяжелите', 6),
  imperfect: [],
};

perfectVerbs.set(утяжелить.name.text, утяжелить);

export { утяжелить };