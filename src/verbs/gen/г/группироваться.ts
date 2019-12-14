import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const группироваться: PerfectVerb = {
  name: Word('группироваться', 9),
  singular1stPerson: Word('группируюсь', 7),
  singular2ndPerson: Word('группируешься', 7),
  singular3rdPerson: Word('группируется', 7),
  plural1stPerson: Word('группируемся', 7),
  plural2ndPerson: Word('группируетесь', 7),
  plural3rdPerson: Word('группируются', 7),
  masculinePast: Word('группировался', 9),
  femininePast: Word('группировалась', 9),
  neuterPast: Word('группировалось', 9),
  pluralPast: Word('группировались', 9),
  imperativeInformal: Word('группируйся', 7),
  imperativeFormal: Word('группируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(группироваться.name.text, группироваться);

export { группироваться };