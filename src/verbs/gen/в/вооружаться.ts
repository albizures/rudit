import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вооружаться: PerfectVerb = {
  name: Word('вооружаться', 6),
  singular1stPerson: Word('вооружаюсь', 6),
  singular2ndPerson: Word('вооружаешься', 6),
  singular3rdPerson: Word('вооружается', 6),
  plural1stPerson: Word('вооружаемся', 6),
  plural2ndPerson: Word('вооружаетесь', 6),
  plural3rdPerson: Word('вооружаются', 6),
  masculinePast: Word('вооружался', 6),
  femininePast: Word('вооружалась', 6),
  neuterPast: Word('вооружалось', 6),
  pluralPast: Word('вооружались', 6),
  imperativeInformal: Word('вооружайся', 6),
  imperativeFormal: Word('вооружайтесь', 6),
  imperfect: ['вооружиться'],
};

perfectVerbs.set(вооружаться.name.text, вооружаться);

export { вооружаться };