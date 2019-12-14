import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкрутиться: PerfectVerb = {
  name: Word('выкрутиться', 1),
  singular1stPerson: Word('выкручусь', 1),
  singular2ndPerson: Word('выкрутишься', 1),
  singular3rdPerson: Word('выкрутится', 1),
  plural1stPerson: Word('выкрутимся', 1),
  plural2ndPerson: Word('выкрутитесь', 1),
  plural3rdPerson: Word('выкрутятся', 1),
  masculinePast: Word('выкрутился', 1),
  femininePast: Word('выкрутилась', 1),
  neuterPast: Word('выкрутилось', 1),
  pluralPast: Word('выкрутились', 1),
  imperativeInformal: Word('выкрутись', 1),
  imperativeFormal: Word('выкрутитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выкрутиться.name.text, выкрутиться);

export { выкрутиться };