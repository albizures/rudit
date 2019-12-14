import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скулить: PerfectVerb = {
  name: Word('скулить', 4),
  singular1stPerson: Word('скулю', 4),
  singular2ndPerson: Word('скулишь', 4),
  singular3rdPerson: Word('скулит', 4),
  plural1stPerson: Word('скулим', 4),
  plural2ndPerson: Word('скулите', 4),
  plural3rdPerson: Word('скулят', 4),
  masculinePast: Word('скулил', 4),
  femininePast: Word('скулила', 4),
  neuterPast: Word('скулило', 4),
  pluralPast: Word('скулили', 4),
  imperativeInformal: Word('скули', 4),
  imperativeFormal: Word('скулите', 4),
  imperfect: [],
};

perfectVerbs.set(скулить.name.text, скулить);

export { скулить };