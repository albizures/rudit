import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const редуцироваться: PerfectVerb = {
  name: Word('редуцироваться', 5),
  singular1stPerson: Word('редуцируюсь', 5),
  singular2ndPerson: Word('редуцируешься', 5),
  singular3rdPerson: Word('редуцируется', 5),
  plural1stPerson: Word('редуцируемся', 5),
  plural2ndPerson: Word('редуцируетесь', 5),
  plural3rdPerson: Word('редуцируются', 5),
  masculinePast: Word('редуцировался', 5),
  femininePast: Word('редуцировалась', 5),
  neuterPast: Word('редуцировалось', 5),
  pluralPast: Word('редуцировались', 5),
  imperativeInformal: Word('редуцируйся', 5),
  imperativeFormal: Word('редуцируйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(редуцироваться.name.text, редуцироваться);

export { редуцироваться };