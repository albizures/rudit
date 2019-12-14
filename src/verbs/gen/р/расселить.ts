import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расселить: PerfectVerb = {
  name: Word('расселить', 6),
  singular1stPerson: Word('расселю', 6),
  singular2ndPerson: Word('расселишь', 6),
  singular3rdPerson: Word('расселит', 6),
  plural1stPerson: Word('расселим', 6),
  plural2ndPerson: Word('расселите', 6),
  plural3rdPerson: Word('расселят', 6),
  masculinePast: Word('расселил', 6),
  femininePast: Word('расселила', 6),
  neuterPast: Word('расселило', 6),
  pluralPast: Word('расселили', 6),
  imperativeInformal: Word('рассели', 6),
  imperativeFormal: Word('расселите', 6),
  imperfect: [],
};

perfectVerbs.set(расселить.name.text, расселить);

export { расселить };