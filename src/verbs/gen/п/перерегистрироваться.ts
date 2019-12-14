import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перерегистрироваться: PerfectVerb = {
  name: Word('перерегистрироваться', 11),
  singular1stPerson: Word('перерегистрируюсь', 11),
  singular2ndPerson: Word('перерегистрируешься', 11),
  singular3rdPerson: Word('перерегистрируется', 11),
  plural1stPerson: Word('перерегистрируемся', 11),
  plural2ndPerson: Word('перерегистрируетесь', 11),
  plural3rdPerson: Word('перерегистрируются', 11),
  masculinePast: Word('перерегистрировался', 11),
  femininePast: Word('перерегистрировалась', 11),
  neuterPast: Word('перерегистрировалось', 11),
  pluralPast: Word('перерегистрировались', 11),
  imperativeInformal: Word('перерегистрируйся', 11),
  imperativeFormal: Word('перерегистрируйтесь', 11),
  imperfect: [],
};

perfectVerbs.set(перерегистрироваться.name.text, перерегистрироваться);

export { перерегистрироваться };