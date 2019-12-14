import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрутиться: PerfectVerb = {
  name: Word('закрутиться', 6),
  singular1stPerson: Word('закручусь', 6),
  singular2ndPerson: Word('закрутишься', 4),
  singular3rdPerson: Word('закрутится', 4),
  plural1stPerson: Word('закрутимся', 4),
  plural2ndPerson: Word('закрутитесь', 4),
  plural3rdPerson: Word('закрутятся', 4),
  masculinePast: Word('закрутился', 6),
  femininePast: Word('закрутилась', 6),
  neuterPast: Word('закрутилось', 6),
  pluralPast: Word('закрутились', 6),
  imperativeInformal: Word('закрутись', 6),
  imperativeFormal: Word('закрутитесь', 6),
  imperfect: [],
};

perfectVerbs.set(закрутиться.name.text, закрутиться);

export { закрутиться };