import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добудиться: PerfectVerb = {
  name: Word('добудиться', 5),
  singular1stPerson: Word('добужусь', 5),
  singular2ndPerson: Word('добудишься', 3),
  singular3rdPerson: Word('добудится', 3),
  plural1stPerson: Word('добудимся', 3),
  plural2ndPerson: Word('добудитесь', 3),
  plural3rdPerson: Word('добудятся', 3),
  masculinePast: Word('добудился', 5),
  femininePast: Word('добудилась', 5),
  neuterPast: Word('добудилось', 5),
  pluralPast: Word('добудились', 5),
  imperativeInformal: Word('добудись', 5),
  imperativeFormal: Word('добудитесь', 5),
  imperfect: [],
};

perfectVerbs.set(добудиться.name.text, добудиться);

export { добудиться };