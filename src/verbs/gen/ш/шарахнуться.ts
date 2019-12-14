import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шарахнуться: PerfectVerb = {
  name: Word('шарахнуться', 3),
  singular1stPerson: Word('шарахнусь', 3),
  singular2ndPerson: Word('шарахнешься', 3),
  singular3rdPerson: Word('шарахнется', 3),
  plural1stPerson: Word('шарахнемся', 3),
  plural2ndPerson: Word('шарахнетесь', 3),
  plural3rdPerson: Word('шарахнутся', 3),
  masculinePast: Word('шарахнулся', 3),
  femininePast: Word('шарахнулась', 3),
  neuterPast: Word('шарахнулось', 3),
  pluralPast: Word('шарахнулись', 3),
  imperativeInformal: Word('шарахнись', 3),
  imperativeFormal: Word('шарахнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(шарахнуться.name.text, шарахнуться);

export { шарахнуться };