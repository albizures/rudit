import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расчертить: PerfectVerb = {
  name: Word('расчертить', 7),
  singular1stPerson: Word('расчерчу', 7),
  singular2ndPerson: Word('расчертишь', 4),
  singular3rdPerson: Word('расчертит', 4),
  plural1stPerson: Word('расчертим', 4),
  plural2ndPerson: Word('расчертите', 4),
  plural3rdPerson: Word('расчертят', 4),
  masculinePast: Word('расчертил', 7),
  femininePast: Word('расчертила', 7),
  neuterPast: Word('расчертило', 7),
  pluralPast: Word('расчертили', 7),
  imperativeInformal: Word('расчерти', 7),
  imperativeFormal: Word('расчертите', 7),
  imperfect: [],
};

perfectVerbs.set(расчертить.name.text, расчертить);

export { расчертить };