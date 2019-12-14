import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увидеться: PerfectVerb = {
  name: Word('увидеться', 2),
  singular1stPerson: Word('увижусь', 2),
  singular2ndPerson: Word('увидишься', 2),
  singular3rdPerson: Word('увидится', 2),
  plural1stPerson: Word('увидимся', 2),
  plural2ndPerson: Word('увидитесь', 2),
  plural3rdPerson: Word('увидятся', 2),
  masculinePast: Word('увиделся', 2),
  femininePast: Word('увиделась', 2),
  neuterPast: Word('увиделось', 2),
  pluralPast: Word('увиделись', 2),
  imperativeInformal: Word('увидься', 2),
  imperativeFormal: Word('увидьтесь', 2),
  imperfect: ['видеться'],
};

perfectVerbs.set(увидеться.name.text, увидеться);

export { увидеться };