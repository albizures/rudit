import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изболеться: PerfectVerb = {
  name: Word('изболеться', 5),
  singular1stPerson: Word('изболеюсь', 5),
  singular2ndPerson: Word('изболеешься', 5),
  singular3rdPerson: Word('изболеется', 5),
  plural1stPerson: Word('изболеемся', 5),
  plural2ndPerson: Word('изболеетесь', 5),
  plural3rdPerson: Word('изболеются', 5),
  masculinePast: Word('изболелся', 5),
  femininePast: Word('изболелась', 5),
  neuterPast: Word('изболелось', 5),
  pluralPast: Word('изболелись', 5),
  imperativeInformal: Word('изболейся', 5),
  imperativeFormal: Word('изболейтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изболеться.name.text, изболеться);

export { изболеться };