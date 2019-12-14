import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const веселить: PerfectVerb = {
  name: Word('веселить', 5),
  singular1stPerson: Word('веселю', 5),
  singular2ndPerson: Word('веселишь', 5),
  singular3rdPerson: Word('веселит', 5),
  plural1stPerson: Word('веселим', 5),
  plural2ndPerson: Word('веселите', 5),
  plural3rdPerson: Word('веселят', 5),
  masculinePast: Word('веселил', 5),
  femininePast: Word('веселила', 5),
  neuterPast: Word('веселило', 5),
  pluralPast: Word('веселили', 5),
  imperativeInformal: Word('весели', 5),
  imperativeFormal: Word('веселите', 5),
  imperfect: [],
};

perfectVerbs.set(веселить.name.text, веселить);

export { веселить };