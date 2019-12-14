import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдохновить: PerfectVerb = {
  name: Word('вдохновить', 7),
  singular1stPerson: Word('вдохновлю', 8),
  singular2ndPerson: Word('вдохновишь', 7),
  singular3rdPerson: Word('вдохновит', 7),
  plural1stPerson: Word('вдохновим', 7),
  plural2ndPerson: Word('вдохновите', 7),
  plural3rdPerson: Word('вдохновят', 7),
  masculinePast: Word('вдохновил', 7),
  femininePast: Word('вдохновила', 7),
  neuterPast: Word('вдохновило', 7),
  pluralPast: Word('вдохновили', 7),
  imperativeInformal: Word('вдохнови', 7),
  imperativeFormal: Word('вдохновите', 7),
  imperfect: [],
};

perfectVerbs.set(вдохновить.name.text, вдохновить);

export { вдохновить };