import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свить: PerfectVerb = {
  name: Word('свить', 2),
  singular1stPerson: Word('совью', 4),
  singular2ndPerson: Word('совьёшь', 1),
  singular3rdPerson: Word('совьёт', 1),
  plural1stPerson: Word('совьём', 1),
  plural2ndPerson: Word('совьёте', 6),
  plural3rdPerson: Word('совьют', 4),
  masculinePast: Word('свил', 2),
  femininePast: Word('свила', 4),
  neuterPast: Word('свило', 2),
  pluralPast: Word('свили', 2),
  imperativeInformal: Word('свей', 2),
  imperativeFormal: Word('свейте', 2),
  imperfect: ['вить'],
};

perfectVerbs.set(свить.name.text, свить);

export { свить };