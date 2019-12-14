import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чинить: PerfectVerb = {
  name: Word('чинить', 3),
  singular1stPerson: Word('чиню', 3),
  singular2ndPerson: Word('чинишь', 1),
  singular3rdPerson: Word('чинит', 1),
  plural1stPerson: Word('чиним', 1),
  plural2ndPerson: Word('чините', 1),
  plural3rdPerson: Word('чинят', 1),
  masculinePast: Word('чинил', 3),
  femininePast: Word('чинила', 3),
  neuterPast: Word('чинило', 3),
  pluralPast: Word('чинили', 3),
  imperativeInformal: Word('чини', 3),
  imperativeFormal: Word('чините', 3),
  imperfect: ['починить'],
};

perfectVerbs.set(чинить.name.text, чинить);

export { чинить };