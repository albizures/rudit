import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытаращиться: PerfectVerb = {
  name: Word('вытаращиться', 1),
  singular1stPerson: Word('вытаращусь', 1),
  singular2ndPerson: Word('вытаращишься', 1),
  singular3rdPerson: Word('вытаращится', 1),
  plural1stPerson: Word('вытаращимся', 1),
  plural2ndPerson: Word('вытаращитесь', 1),
  plural3rdPerson: Word('вытаращатся', 1),
  masculinePast: Word('вытаращился', 1),
  femininePast: Word('вытаращилась', 1),
  neuterPast: Word('вытаращилось', 1),
  pluralPast: Word('вытаращились', 1),
  imperativeInformal: Word('вытаращись//вы'таращься', 1),
  imperativeFormal: Word('вытаращьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(вытаращиться.name.text, вытаращиться);

export { вытаращиться };