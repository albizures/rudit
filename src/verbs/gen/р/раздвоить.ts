import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздвоить: PerfectVerb = {
  name: Word('раздвоить', 6),
  singular1stPerson: Word('раздвою', 6),
  singular2ndPerson: Word('раздвоишь', 6),
  singular3rdPerson: Word('раздвоит', 6),
  plural1stPerson: Word('раздвоим', 6),
  plural2ndPerson: Word('раздвоите', 6),
  plural3rdPerson: Word('раздвоят', 6),
  masculinePast: Word('раздвоил', 6),
  femininePast: Word('раздвоила', 6),
  neuterPast: Word('раздвоило', 6),
  pluralPast: Word('раздвоили', 6),
  imperativeInformal: Word('раздвои', 6),
  imperativeFormal: Word('раздвоите', 6),
  imperfect: [],
};

perfectVerbs.set(раздвоить.name.text, раздвоить);

export { раздвоить };