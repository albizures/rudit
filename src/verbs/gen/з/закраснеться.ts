import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закраснеться: PerfectVerb = {
  name: Word('закраснеться', 7),
  singular1stPerson: Word('закраснеюсь', 7),
  singular2ndPerson: Word('закраснеешься', 7),
  singular3rdPerson: Word('закраснеется', 7),
  plural1stPerson: Word('закраснеемся', 7),
  plural2ndPerson: Word('закраснеетесь', 7),
  plural3rdPerson: Word('закраснеются', 7),
  masculinePast: Word('закраснелся', 7),
  femininePast: Word('закраснелась', 7),
  neuterPast: Word('закраснелось', 7),
  pluralPast: Word('закраснелись', 7),
  imperativeInformal: Word('закраснейся', 7),
  imperativeFormal: Word('закраснейтесь', 7),
  imperfect: [],
};

perfectVerbs.set(закраснеться.name.text, закраснеться);

export { закраснеться };