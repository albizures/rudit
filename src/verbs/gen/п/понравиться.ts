import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понравиться: PerfectVerb = {
  name: Word('понравиться', 4),
  singular1stPerson: Word('понравлюсь', 4),
  singular2ndPerson: Word('понравишься', 4),
  singular3rdPerson: Word('понравится', 4),
  plural1stPerson: Word('понравимся', 4),
  plural2ndPerson: Word('понравитесь', 4),
  plural3rdPerson: Word('понравятся', 4),
  masculinePast: Word('понравился', 4),
  femininePast: Word('понравилась', 4),
  neuterPast: Word('понравилось', 4),
  pluralPast: Word('понравились', 4),
  imperativeInformal: Word('понравься', 4),
  imperativeFormal: Word('понравьтесь', 4),
  imperfect: ['нравиться'],
};

perfectVerbs.set(понравиться.name.text, понравиться);

export { понравиться };