import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помутиться: PerfectVerb = {
  name: Word('помутиться', 5),
  singular1stPerson: Word('помучусь', 5),
  singular2ndPerson: Word('помутишься', 5),
  singular3rdPerson: Word('помутится', 5),
  plural1stPerson: Word('помутимся', 5),
  plural2ndPerson: Word('помутитесь', 5),
  plural3rdPerson: Word('помутятся', 5),
  masculinePast: Word('помутился', 5),
  femininePast: Word('помутилась', 5),
  neuterPast: Word('помутилось', 5),
  pluralPast: Word('помутились', 5),
  imperativeInformal: Word('помутись', 5),
  imperativeFormal: Word('помутитесь', 5),
  imperfect: [],
};

perfectVerbs.set(помутиться.name.text, помутиться);

export { помутиться };