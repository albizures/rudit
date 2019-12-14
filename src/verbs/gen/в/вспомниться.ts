import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вспомниться: PerfectVerb = {
  name: Word('вспомниться', 3),
  singular1stPerson: Word('вспомнюсь', 3),
  singular2ndPerson: Word('вспомнишься', 3),
  singular3rdPerson: Word('вспомнится', 3),
  plural1stPerson: Word('вспомнимся', 3),
  plural2ndPerson: Word('вспомнитесь', 3),
  plural3rdPerson: Word('вспомнятся', 3),
  masculinePast: Word('вспомнился', 3),
  femininePast: Word('вспомнилась', 3),
  neuterPast: Word('вспомнилось', 3),
  pluralPast: Word('вспомнились', 3),
  imperativeInformal: Word('вспомнись', 3),
  imperativeFormal: Word('вспомнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(вспомниться.name.text, вспомниться);

export { вспомниться };