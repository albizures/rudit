import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const позаботиться: PerfectVerb = {
  name: Word('позаботиться', 5),
  singular1stPerson: Word('позабочусь', 5),
  singular2ndPerson: Word('позаботишься', 5),
  singular3rdPerson: Word('позаботится', 5),
  plural1stPerson: Word('позаботимся', 5),
  plural2ndPerson: Word('позаботитесь', 5),
  plural3rdPerson: Word('позаботятся', 5),
  masculinePast: Word('позаботился', 5),
  femininePast: Word('позаботилась', 5),
  neuterPast: Word('позаботилось', 5),
  pluralPast: Word('позаботились', 5),
  imperativeInformal: Word('позаботься', 5),
  imperativeFormal: Word('позаботьтесь', 5),
  imperfect: [],
};

perfectVerbs.set(позаботиться.name.text, позаботиться);

export { позаботиться };