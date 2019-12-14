import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развеселить: PerfectVerb = {
  name: Word('развеселить', 8),
  singular1stPerson: Word('развеселю', 8),
  singular2ndPerson: Word('развеселишь', 8),
  singular3rdPerson: Word('развеселит', 8),
  plural1stPerson: Word('развеселим', 8),
  plural2ndPerson: Word('развеселите', 8),
  plural3rdPerson: Word('развеселят', 8),
  masculinePast: Word('развеселил', 8),
  femininePast: Word('развеселила', 8),
  neuterPast: Word('развеселило', 8),
  pluralPast: Word('развеселили', 8),
  imperativeInformal: Word('развесели', 8),
  imperativeFormal: Word('развеселите', 8),
  imperfect: [],
};

perfectVerbs.set(развеселить.name.text, развеселить);

export { развеселить };