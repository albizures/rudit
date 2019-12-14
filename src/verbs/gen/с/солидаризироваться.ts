import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const солидаризироваться: PerfectVerb = {
  name: Word('солидаризироваться', 9),
  singular1stPerson: Word('солидаризируюсь', 9),
  singular2ndPerson: Word('солидаризируешься', 9),
  singular3rdPerson: Word('солидаризируется', 9),
  plural1stPerson: Word('солидаризируемся', 9),
  plural2ndPerson: Word('солидаризируетесь', 9),
  plural3rdPerson: Word('солидаризируются', 9),
  masculinePast: Word('солидаризировался', 9),
  femininePast: Word('солидаризировалась', 9),
  neuterPast: Word('солидаризировалось', 9),
  pluralPast: Word('солидаризировались', 9),
  imperativeInformal: Word('солидаризируйся', 9),
  imperativeFormal: Word('солидаризируйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(солидаризироваться.name.text, солидаризироваться);

export { солидаризироваться };