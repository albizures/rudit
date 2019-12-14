import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгромить: PerfectVerb = {
  name: Word('разгромить', 7),
  singular1stPerson: Word('разгромлю', 8),
  singular2ndPerson: Word('разгромишь', 7),
  singular3rdPerson: Word('разгромит', 7),
  plural1stPerson: Word('разгромим', 7),
  plural2ndPerson: Word('разгромите', 7),
  plural3rdPerson: Word('разгромят', 7),
  masculinePast: Word('разгромил', 7),
  femininePast: Word('разгромила', 7),
  neuterPast: Word('разгромило', 7),
  pluralPast: Word('разгромили', 7),
  imperativeInformal: Word('разгроми', 7),
  imperativeFormal: Word('разгромите', 7),
  imperfect: [],
};

perfectVerbs.set(разгромить.name.text, разгромить);

export { разгромить };