import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытащить: PerfectVerb = {
  name: Word('вытащить', 1),
  singular1stPerson: Word('вытащу', 1),
  singular2ndPerson: Word('вытащишь', 1),
  singular3rdPerson: Word('вытащит', 1),
  plural1stPerson: Word('вытащим', 1),
  plural2ndPerson: Word('вытащите', 1),
  plural3rdPerson: Word('вытащат', 1),
  masculinePast: Word('вытащил', 1),
  femininePast: Word('вытащила', 1),
  neuterPast: Word('вытащило', 1),
  pluralPast: Word('вытащили', 1),
  imperativeInformal: Word('вытащь', 1),
  imperativeFormal: Word('вытащьте', 1),
  imperfect: ['вытаскивать','тащить'],
};

perfectVerbs.set(вытащить.name.text, вытащить);

export { вытащить };