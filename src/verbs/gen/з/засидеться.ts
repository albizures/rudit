import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засидеться: PerfectVerb = {
  name: Word('засидеться', 5),
  singular1stPerson: Word('засижусь', 5),
  singular2ndPerson: Word('засидишься', 5),
  singular3rdPerson: Word('засидится', 5),
  plural1stPerson: Word('засидимся', 5),
  plural2ndPerson: Word('засидитесь', 5),
  plural3rdPerson: Word('засидятся', 5),
  masculinePast: Word('засиделся', 5),
  femininePast: Word('засиделась', 5),
  neuterPast: Word('засиделось', 5),
  pluralPast: Word('засиделись', 5),
  imperativeInformal: Word('засидись', 5),
  imperativeFormal: Word('засидитесь', 5),
  imperfect: [],
};

perfectVerbs.set(засидеться.name.text, засидеться);

export { засидеться };