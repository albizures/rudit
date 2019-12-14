import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допилить: PerfectVerb = {
  name: Word('допилить', 5),
  singular1stPerson: Word('допилю', 5),
  singular2ndPerson: Word('допилишь', 3),
  singular3rdPerson: Word('допилит', 3),
  plural1stPerson: Word('допилим', 3),
  plural2ndPerson: Word('допилите', 3),
  plural3rdPerson: Word('допилят', 3),
  masculinePast: Word('допилил', 5),
  femininePast: Word('допилила', 5),
  neuterPast: Word('допилило', 5),
  pluralPast: Word('допилили', 5),
  imperativeInformal: Word('допили', 5),
  imperativeFormal: Word('допилите', 5),
  imperfect: [],
};

perfectVerbs.set(допилить.name.text, допилить);

export { допилить };