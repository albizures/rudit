import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бросить: PerfectVerb = {
  name: Word('бросить', 2),
  singular1stPerson: Word('брошу', 2),
  singular2ndPerson: Word('бросишь', 2),
  singular3rdPerson: Word('бросит', 2),
  plural1stPerson: Word('бросим', 2),
  plural2ndPerson: Word('бросите', 2),
  plural3rdPerson: Word('бросят', 2),
  masculinePast: Word('бросил', 2),
  femininePast: Word('бросила', 2),
  neuterPast: Word('бросило', 2),
  pluralPast: Word('бросили', 2),
  imperativeInformal: Word('брось', 2),
  imperativeFormal: Word('бросьте', 2),
  imperfect: ['бросать'],
};

perfectVerbs.set(бросить.name.text, бросить);

export { бросить };