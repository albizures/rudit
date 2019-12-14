import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const суесловить: PerfectVerb = {
  name: Word('суесловить', 5),
  singular1stPerson: Word('суесловлю', 5),
  singular2ndPerson: Word('суесловишь', 5),
  singular3rdPerson: Word('суесловит', 5),
  plural1stPerson: Word('суесловим', 5),
  plural2ndPerson: Word('суесловите', 5),
  plural3rdPerson: Word('суесловят', 5),
  masculinePast: Word('суесловил', 5),
  femininePast: Word('суесловила', 5),
  neuterPast: Word('суесловило', 5),
  pluralPast: Word('суесловили', 5),
  imperativeInformal: Word('суесловь', 5),
  imperativeFormal: Word('суесловьте', 5),
  imperfect: [],
};

perfectVerbs.set(суесловить.name.text, суесловить);

export { суесловить };