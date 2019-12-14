import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жить: PerfectVerb = {
  name: Word('жить', 1),
  singular1stPerson: Word('живу', 3),
  singular2ndPerson: Word('живёшь', 1),
  singular3rdPerson: Word('живёт', 1),
  plural1stPerson: Word('живём', 1),
  plural2ndPerson: Word('живёте', 5),
  plural3rdPerson: Word('живут', 3),
  masculinePast: Word('жил', 1),
  femininePast: Word('жила', 3),
  neuterPast: Word('жило,жило'', 1),
  pluralPast: Word('жили', 1),
  imperativeInformal: Word('живи', 3),
  imperativeFormal: Word('живите', 3),
  imperfect: ['пожить'],
};

perfectVerbs.set(жить.name.text, жить);

export { жить };