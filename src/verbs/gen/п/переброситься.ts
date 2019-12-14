import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переброситься: PerfectVerb = {
  name: Word('переброситься', 6),
  singular1stPerson: Word('переброшусь', 6),
  singular2ndPerson: Word('перебросишься', 6),
  singular3rdPerson: Word('перебросится', 6),
  plural1stPerson: Word('перебросимся', 6),
  plural2ndPerson: Word('переброситесь', 6),
  plural3rdPerson: Word('перебросятся', 6),
  masculinePast: Word('перебросился', 6),
  femininePast: Word('перебросилась', 6),
  neuterPast: Word('перебросилось', 6),
  pluralPast: Word('перебросились', 6),
  imperativeInformal: Word('перебросься', 6),
  imperativeFormal: Word('перебросьтесь', 6),
  imperfect: [],
};

perfectVerbs.set(переброситься.name.text, переброситься);

export { переброситься };