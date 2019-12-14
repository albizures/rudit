import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нравиться: PerfectVerb = {
  name: Word('нравиться', 2),
  singular1stPerson: Word('нравлюсь', 2),
  singular2ndPerson: Word('нравишься', 2),
  singular3rdPerson: Word('нравится', 2),
  plural1stPerson: Word('нравимся', 2),
  plural2ndPerson: Word('нравитесь', 2),
  plural3rdPerson: Word('нравятся', 2),
  masculinePast: Word('нравился', 2),
  femininePast: Word('нравилась', 2),
  neuterPast: Word('нравилось', 2),
  pluralPast: Word('нравились', 2),
  imperativeInformal: Word('нравься', 2),
  imperativeFormal: Word('нравьтесь', 2),
  imperfect: ['понравиться'],
};

perfectVerbs.set(нравиться.name.text, нравиться);

export { нравиться };