import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натрудиться: PerfectVerb = {
  name: Word('натрудиться', 6),
  singular1stPerson: Word('натружусь', 6),
  singular2ndPerson: Word('натрудишься', 6),
  singular3rdPerson: Word('натрудится', 6),
  plural1stPerson: Word('натрудимся', 6),
  plural2ndPerson: Word('натрудитесь', 6),
  plural3rdPerson: Word('натрудятся', 6),
  masculinePast: Word('натрудился', 6),
  femininePast: Word('натрудилась', 6),
  neuterPast: Word('натрудилось', 6),
  pluralPast: Word('натрудились', 6),
  imperativeInformal: Word('натрудись', 6),
  imperativeFormal: Word('натрудитесь', 6),
  imperfect: [],
};

perfectVerbs.set(натрудиться.name.text, натрудиться);

export { натрудиться };