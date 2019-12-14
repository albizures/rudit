import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потрудиться: PerfectVerb = {
  name: Word('потрудиться', 6),
  singular1stPerson: Word('потружусь', 6),
  singular2ndPerson: Word('потрудишься', 4),
  singular3rdPerson: Word('потрудится', 4),
  plural1stPerson: Word('потрудимся', 4),
  plural2ndPerson: Word('потрудитесь', 4),
  plural3rdPerson: Word('потрудятся', 4),
  masculinePast: Word('потрудился', 6),
  femininePast: Word('потрудилась', 6),
  neuterPast: Word('потрудилось', 6),
  pluralPast: Word('потрудились', 6),
  imperativeInformal: Word('потрудись', 6),
  imperativeFormal: Word('потрудитесь', 6),
  imperfect: ['трудиться'],
};

perfectVerbs.set(потрудиться.name.text, потрудиться);

export { потрудиться };