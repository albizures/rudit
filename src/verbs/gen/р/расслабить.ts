import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расслабить: PerfectVerb = {
  name: Word('расслабить', 5),
  singular1stPerson: Word('расслаблю', 5),
  singular2ndPerson: Word('расслабишь', 5),
  singular3rdPerson: Word('расслабит', 5),
  plural1stPerson: Word('расслабим', 5),
  plural2ndPerson: Word('расслабите', 5),
  plural3rdPerson: Word('расслабят', 5),
  masculinePast: Word('расслабил', 5),
  femininePast: Word('расслабила', 5),
  neuterPast: Word('расслабило', 5),
  pluralPast: Word('расслабили', 5),
  imperativeInformal: Word('расслабь', 5),
  imperativeFormal: Word('расслабьте', 5),
  imperfect: [],
};

perfectVerbs.set(расслабить.name.text, расслабить);

export { расслабить };