import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перержаветь: PerfectVerb = {
  name: Word('перержаветь', 8),
  singular1stPerson: Word('перержавею', 8),
  singular2ndPerson: Word('перержавеешь', 8),
  singular3rdPerson: Word('перержавеет', 8),
  plural1stPerson: Word('перержавеем', 8),
  plural2ndPerson: Word('перержавеете', 8),
  plural3rdPerson: Word('перержавеют', 8),
  masculinePast: Word('перержавел', 8),
  femininePast: Word('перержавела', 8),
  neuterPast: Word('перержавело', 8),
  pluralPast: Word('перержавели', 8),
  imperativeInformal: Word('перержавей', 8),
  imperativeFormal: Word('перержавейте', 8),
  imperfect: [],
};

perfectVerbs.set(перержаветь.name.text, перержаветь);

export { перержаветь };