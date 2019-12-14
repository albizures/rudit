import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бесить: PerfectVerb = {
  name: Word('бесить', 3),
  singular1stPerson: Word('бешу', 3),
  singular2ndPerson: Word('бесишь', 1),
  singular3rdPerson: Word('бесит', 1),
  plural1stPerson: Word('бесим', 1),
  plural2ndPerson: Word('бесите', 1),
  plural3rdPerson: Word('бесят', 1),
  masculinePast: Word('бесил', 3),
  femininePast: Word('бесила', 3),
  neuterPast: Word('бесило', 3),
  pluralPast: Word('бесили', 3),
  imperativeInformal: Word('беси', 3),
  imperativeFormal: Word('бесите', 3),
  imperfect: ['взбесить'],
};

perfectVerbs.set(бесить.name.text, бесить);

export { бесить };