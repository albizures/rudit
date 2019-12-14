import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const срубить: PerfectVerb = {
  name: Word('срубить', 4),
  singular1stPerson: Word('срублю', 5),
  singular2ndPerson: Word('срубишь', 2),
  singular3rdPerson: Word('срубит', 2),
  plural1stPerson: Word('срубим', 2),
  plural2ndPerson: Word('срубите', 2),
  plural3rdPerson: Word('срубят', 2),
  masculinePast: Word('срубил', 4),
  femininePast: Word('срубила', 4),
  neuterPast: Word('срубило', 4),
  pluralPast: Word('срубили', 4),
  imperativeInformal: Word('сруби', 4),
  imperativeFormal: Word('срубите', 4),
  imperfect: [],
};

perfectVerbs.set(срубить.name.text, срубить);

export { срубить };