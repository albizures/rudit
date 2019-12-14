import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const броситься: PerfectVerb = {
  name: Word('броситься', 2),
  singular1stPerson: Word('брошусь', 2),
  singular2ndPerson: Word('бросишься', 2),
  singular3rdPerson: Word('бросится', 2),
  plural1stPerson: Word('бросимся', 2),
  plural2ndPerson: Word('броситесь', 2),
  plural3rdPerson: Word('бросятся', 2),
  masculinePast: Word('бросился', 2),
  femininePast: Word('бросилась', 2),
  neuterPast: Word('бросилось', 2),
  pluralPast: Word('бросились', 2),
  imperativeInformal: Word('бросься', 2),
  imperativeFormal: Word('бросьтесь', 2),
  imperfect: ['бросаться'],
};

perfectVerbs.set(броситься.name.text, броситься);

export { броситься };