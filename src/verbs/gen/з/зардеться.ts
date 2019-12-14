import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зардеться: PerfectVerb = {
  name: Word('зардеться', 4),
  singular1stPerson: Word('зардеюсь', 4),
  singular2ndPerson: Word('зардеешься', 4),
  singular3rdPerson: Word('зардеется', 4),
  plural1stPerson: Word('зардеемся', 4),
  plural2ndPerson: Word('зардеетесь', 4),
  plural3rdPerson: Word('зардеются', 4),
  masculinePast: Word('зарделся', 4),
  femininePast: Word('зарделась', 4),
  neuterPast: Word('зарделось', 4),
  pluralPast: Word('зарделись', 4),
  imperativeInformal: Word('зардейся', 4),
  imperativeFormal: Word('зардейтесь', 4),
  imperfect: [],
};

perfectVerbs.set(зардеться.name.text, зардеться);

export { зардеться };