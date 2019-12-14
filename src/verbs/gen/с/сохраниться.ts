import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сохраниться: PerfectVerb = {
  name: Word('сохраниться', 6),
  singular1stPerson: Word('сохранюсь', 6),
  singular2ndPerson: Word('сохранишься', 6),
  singular3rdPerson: Word('сохранится', 6),
  plural1stPerson: Word('сохранимся', 6),
  plural2ndPerson: Word('сохранитесь', 6),
  plural3rdPerson: Word('сохранятся', 6),
  masculinePast: Word('сохранился', 6),
  femininePast: Word('сохранилась', 6),
  neuterPast: Word('сохранилось', 6),
  pluralPast: Word('сохранились', 6),
  imperativeInformal: Word('сохранись', 6),
  imperativeFormal: Word('сохранитесь', 6),
  imperfect: ['сохраняться'],
};

perfectVerbs.set(сохраниться.name.text, сохраниться);

export { сохраниться };