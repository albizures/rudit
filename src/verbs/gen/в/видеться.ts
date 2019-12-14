import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const видеться: PerfectVerb = {
  name: Word('видеться', 1),
  singular1stPerson: Word('вижусь', 1),
  singular2ndPerson: Word('видишься', 1),
  singular3rdPerson: Word('видится', 1),
  plural1stPerson: Word('видимся', 1),
  plural2ndPerson: Word('видитесь', 1),
  plural3rdPerson: Word('видятся', 1),
  masculinePast: Word('виделся', 1),
  femininePast: Word('виделась', 1),
  neuterPast: Word('виделось', 1),
  pluralPast: Word('виделись', 1),
  imperativeInformal: Word('видься', 1),
  imperativeFormal: Word('видьтесь', 1),
  imperfect: ['увидеться','привидеться'],
};

perfectVerbs.set(видеться.name.text, видеться);

export { видеться };