import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const таращить: PerfectVerb = {
  name: Word('таращить', 3),
  singular1stPerson: Word('таращу', 3),
  singular2ndPerson: Word('таращишь', 3),
  singular3rdPerson: Word('таращит', 3),
  plural1stPerson: Word('таращим', 3),
  plural2ndPerson: Word('таращите', 3),
  plural3rdPerson: Word('таращат', 3),
  masculinePast: Word('таращил', 3),
  femininePast: Word('таращила', 3),
  neuterPast: Word('таращило', 3),
  pluralPast: Word('таращили', 3),
  imperativeInformal: Word('таращи//тара'щь', 3),
  imperativeFormal: Word('таращьте', 3),
  imperfect: [],
};

perfectVerbs.set(таращить.name.text, таращить);

export { таращить };