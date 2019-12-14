import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ассоциироваться: PerfectVerb = {
  name: Word('ассоциироваться', 6),
  singular1stPerson: Word('ассоциируюсь', 6),
  singular2ndPerson: Word('ассоциируешься', 6),
  singular3rdPerson: Word('ассоциируется', 6),
  plural1stPerson: Word('ассоциируемся', 6),
  plural2ndPerson: Word('ассоциируетесь', 6),
  plural3rdPerson: Word('ассоциируются', 6),
  masculinePast: Word('ассоциировался', 6),
  femininePast: Word('ассоциировалась', 6),
  neuterPast: Word('ассоциировалось', 6),
  pluralPast: Word('ассоциировались', 6),
  imperativeInformal: Word('ассоциируйся', 6),
  imperativeFormal: Word('ассоциируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(ассоциироваться.name.text, ассоциироваться);

export { ассоциироваться };