import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бередить: PerfectVerb = {
  name: Word('бередить', 5),
  singular1stPerson: Word('бережу', 5),
  singular2ndPerson: Word('бередишь', 5),
  singular3rdPerson: Word('бередит', 5),
  plural1stPerson: Word('бередим', 5),
  plural2ndPerson: Word('бередите', 5),
  plural3rdPerson: Word('бередят', 5),
  masculinePast: Word('бередил', 5),
  femininePast: Word('бередила', 5),
  neuterPast: Word('бередило', 5),
  pluralPast: Word('бередили', 5),
  imperativeInformal: Word('береди', 5),
  imperativeFormal: Word('бередите', 5),
  imperfect: [],
};

perfectVerbs.set(бередить.name.text, бередить);

export { бередить };