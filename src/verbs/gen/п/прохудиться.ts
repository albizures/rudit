import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прохудиться: PerfectVerb = {
  name: Word('прохудиться', 6),
  singular1stPerson: Word('прохужусь', 6),
  singular2ndPerson: Word('прохудишься', 6),
  singular3rdPerson: Word('прохудится', 6),
  plural1stPerson: Word('прохудимся', 6),
  plural2ndPerson: Word('прохудитесь', 6),
  plural3rdPerson: Word('прохудятся', 6),
  masculinePast: Word('прохудился', 6),
  femininePast: Word('прохудилась', 6),
  neuterPast: Word('прохудилось', 6),
  pluralPast: Word('прохудились', 6),
  imperativeInformal: Word('прохудись', 6),
  imperativeFormal: Word('прохудитесь', 6),
  imperfect: [],
};

perfectVerbs.set(прохудиться.name.text, прохудиться);

export { прохудиться };