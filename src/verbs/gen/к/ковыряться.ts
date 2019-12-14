import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ковыряться: PerfectVerb = {
  name: Word('ковыряться', 5),
  singular1stPerson: Word('ковыряюсь', 5),
  singular2ndPerson: Word('ковыряешься', 5),
  singular3rdPerson: Word('ковыряется', 5),
  plural1stPerson: Word('ковыряемся', 5),
  plural2ndPerson: Word('ковыряетесь', 5),
  plural3rdPerson: Word('ковыряются', 5),
  masculinePast: Word('ковырялся', 5),
  femininePast: Word('ковырялась', 5),
  neuterPast: Word('ковырялось', 5),
  pluralPast: Word('ковырялись', 5),
  imperativeInformal: Word('ковыряйся', 5),
  imperativeFormal: Word('ковыряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ковыряться.name.text, ковыряться);

export { ковыряться };