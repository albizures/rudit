import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбросить: PerfectVerb = {
  name: Word('выбросить', 1),
  singular1stPerson: Word('выброшу', 1),
  singular2ndPerson: Word('выбросишь', 1),
  singular3rdPerson: Word('выбросит', 1),
  plural1stPerson: Word('выбросим', 1),
  plural2ndPerson: Word('выбросите', 1),
  plural3rdPerson: Word('выбросят', 1),
  masculinePast: Word('выбросил', 1),
  femininePast: Word('выбросила', 1),
  neuterPast: Word('выбросило', 1),
  pluralPast: Word('выбросили', 1),
  imperativeInformal: Word('выброси//вы'брось', 1),
  imperativeFormal: Word('выбросьте', 1),
  imperfect: [],
};

perfectVerbs.set(выбросить.name.text, выбросить);

export { выбросить };