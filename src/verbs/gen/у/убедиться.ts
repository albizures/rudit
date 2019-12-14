import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убедиться: PerfectVerb = {
  name: Word('убедиться', 4),
  singular1stPerson: Word('убежусь', 4),
  singular2ndPerson: Word('убедишься', 4),
  singular3rdPerson: Word('убедится', 4),
  plural1stPerson: Word('убедимся', 4),
  plural2ndPerson: Word('убедитесь', 4),
  plural3rdPerson: Word('убедятся', 4),
  masculinePast: Word('убедился', 4),
  femininePast: Word('убедилась', 4),
  neuterPast: Word('убедилось', 4),
  pluralPast: Word('убедились', 4),
  imperativeInformal: Word('убедись', 4),
  imperativeFormal: Word('убедитесь', 4),
  imperfect: ['убеждаться'],
};

perfectVerbs.set(убедиться.name.text, убедиться);

export { убедиться };