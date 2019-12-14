import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согласиться: PerfectVerb = {
  name: Word('согласиться', 6),
  singular1stPerson: Word('соглашусь', 6),
  singular2ndPerson: Word('согласишься', 6),
  singular3rdPerson: Word('согласится', 6),
  plural1stPerson: Word('согласимся', 6),
  plural2ndPerson: Word('согласитесь', 6),
  plural3rdPerson: Word('согласятся', 6),
  masculinePast: Word('согласился', 6),
  femininePast: Word('согласилась', 6),
  neuterPast: Word('согласилось', 6),
  pluralPast: Word('согласились', 6),
  imperativeInformal: Word('согласись', 6),
  imperativeFormal: Word('согласитесь', 6),
  imperfect: ['соглашаться'],
};

perfectVerbs.set(согласиться.name.text, согласиться);

export { согласиться };