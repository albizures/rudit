import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const регистрироваться: PerfectVerb = {
  name: Word('регистрироваться', 7),
  singular1stPerson: Word('регистрируюсь', 7),
  singular2ndPerson: Word('регистрируешься', 7),
  singular3rdPerson: Word('регистрируется', 7),
  plural1stPerson: Word('регистрируемся', 7),
  plural2ndPerson: Word('регистрируетесь', 7),
  plural3rdPerson: Word('регистрируются', 7),
  masculinePast: Word('регистрировался', 7),
  femininePast: Word('регистрировалась', 7),
  neuterPast: Word('регистрировалось', 7),
  pluralPast: Word('регистрировались', 7),
  imperativeInformal: Word('регистрируйся', 7),
  imperativeFormal: Word('регистрируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(регистрироваться.name.text, регистрироваться);

export { регистрироваться };