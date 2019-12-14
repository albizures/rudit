import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сурьмить: PerfectVerb = {
  name: Word('сурьмить', 5),
  singular1stPerson: Word('сурьмлю', 6),
  singular2ndPerson: Word('сурьмишь', 5),
  singular3rdPerson: Word('сурьмит', 5),
  plural1stPerson: Word('сурьмим', 5),
  plural2ndPerson: Word('сурьмите', 5),
  plural3rdPerson: Word('сурьмят', 5),
  masculinePast: Word('сурьмил', 5),
  femininePast: Word('сурьмила', 5),
  neuterPast: Word('сурьмило', 5),
  pluralPast: Word('сурьмили', 5),
  imperativeInformal: Word('сурьми', 5),
  imperativeFormal: Word('сурьмите', 5),
  imperfect: [],
};

perfectVerbs.set(сурьмить.name.text, сурьмить);

export { сурьмить };