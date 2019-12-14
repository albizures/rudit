import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const швыряться: PerfectVerb = {
  name: Word('швыряться', 4),
  singular1stPerson: Word('швыряюсь', 4),
  singular2ndPerson: Word('швыряешься', 4),
  singular3rdPerson: Word('швыряется', 4),
  plural1stPerson: Word('швыряемся', 4),
  plural2ndPerson: Word('швыряетесь', 4),
  plural3rdPerson: Word('швыряются', 4),
  masculinePast: Word('швырялся', 4),
  femininePast: Word('швырялась', 4),
  neuterPast: Word('швырялось', 4),
  pluralPast: Word('швырялись', 4),
  imperativeInformal: Word('швыряйся', 4),
  imperativeFormal: Word('швыряйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(швыряться.name.text, швыряться);

export { швыряться };