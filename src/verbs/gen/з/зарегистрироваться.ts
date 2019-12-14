import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарегистрироваться: PerfectVerb = {
  name: Word('зарегистрироваться', 9),
  singular1stPerson: Word('зарегистрируюсь', 9),
  singular2ndPerson: Word('зарегистрируешься', 9),
  singular3rdPerson: Word('зарегистрируется', 9),
  plural1stPerson: Word('зарегистрируемся', 9),
  plural2ndPerson: Word('зарегистрируетесь', 9),
  plural3rdPerson: Word('зарегистрируются', 9),
  masculinePast: Word('зарегистрировался', 9),
  femininePast: Word('зарегистрировалась', 9),
  neuterPast: Word('зарегистрировалось', 9),
  pluralPast: Word('зарегистрировались', 9),
  imperativeInformal: Word('зарегистрируйся', 9),
  imperativeFormal: Word('зарегистрируйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(зарегистрироваться.name.text, зарегистрироваться);

export { зарегистрироваться };