import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгрудиться: PerfectVerb = {
  name: Word('сгрудиться', 5),
  singular1stPerson: Word('сгружусь', 5),
  singular2ndPerson: Word('сгрудишься', 5),
  singular3rdPerson: Word('сгрудится', 5),
  plural1stPerson: Word('сгрудимся', 5),
  plural2ndPerson: Word('сгрудитесь', 5),
  plural3rdPerson: Word('сгрудятся', 5),
  masculinePast: Word('сгрудился', 5),
  femininePast: Word('сгрудилась', 5),
  neuterPast: Word('сгрудилось', 5),
  pluralPast: Word('сгрудились', 5),
  imperativeInformal: Word('сгрудись', 5),
  imperativeFormal: Word('сгрудитесь', 5),
  imperfect: [],
};

perfectVerbs.set(сгрудиться.name.text, сгрудиться);

export { сгрудиться };