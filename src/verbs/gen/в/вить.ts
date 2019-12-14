import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вить: PerfectVerb = {
  name: Word('вить', 1),
  singular1stPerson: Word('вью', 2),
  singular2ndPerson: Word('вьёшь', 2),
  singular3rdPerson: Word('вьёт', 2),
  plural1stPerson: Word('вьём', 2),
  plural2ndPerson: Word('вьёте', 2),
  plural3rdPerson: Word('вьют', 2),
  masculinePast: Word('вил', 1),
  femininePast: Word('вила', 3),
  neuterPast: Word('вило', 1),
  pluralPast: Word('вили', 1),
  imperativeInformal: Word('вей', 1),
  imperativeFormal: Word('вейте', 1),
  imperfect: ['свить'],
};

perfectVerbs.set(вить.name.text, вить);

export { вить };