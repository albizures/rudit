import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слоить: PerfectVerb = {
  name: Word('слоить', 3),
  singular1stPerson: Word('слою', 3),
  singular2ndPerson: Word('слоишь', 3),
  singular3rdPerson: Word('слоит', 3),
  plural1stPerson: Word('слоим', 3),
  plural2ndPerson: Word('слоите', 3),
  plural3rdPerson: Word('слоят', 3),
  masculinePast: Word('слоил', 3),
  femininePast: Word('слоила', 3),
  neuterPast: Word('слоило', 3),
  pluralPast: Word('слоили', 3),
  imperativeInformal: Word('слои', 3),
  imperativeFormal: Word('слоите', 3),
  imperfect: [],
};

perfectVerbs.set(слоить.name.text, слоить);

export { слоить };