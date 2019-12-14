import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допросить: PerfectVerb = {
  name: Word('допросить', 6),
  singular1stPerson: Word('допрошу', 6),
  singular2ndPerson: Word('допросишь', 4),
  singular3rdPerson: Word('допросит', 4),
  plural1stPerson: Word('допросим', 4),
  plural2ndPerson: Word('допросите', 4),
  plural3rdPerson: Word('допросят', 4),
  masculinePast: Word('допросил', 6),
  femininePast: Word('допросила', 6),
  neuterPast: Word('допросило', 6),
  pluralPast: Word('допросили', 6),
  imperativeInformal: Word('допроси', 6),
  imperativeFormal: Word('допросите', 6),
  imperfect: [],
};

perfectVerbs.set(допросить.name.text, допросить);

export { допросить };