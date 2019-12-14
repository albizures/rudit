import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накаляться: PerfectVerb = {
  name: Word('накаляться', 5),
  singular1stPerson: Word('накаляюсь', 5),
  singular2ndPerson: Word('накаляешься', 5),
  singular3rdPerson: Word('накаляется', 5),
  plural1stPerson: Word('накаляемся', 5),
  plural2ndPerson: Word('накаляетесь', 5),
  plural3rdPerson: Word('накаляются', 5),
  masculinePast: Word('накалялся', 5),
  femininePast: Word('накалялась', 5),
  neuterPast: Word('накалялось', 5),
  pluralPast: Word('накалялись', 5),
  imperativeInformal: Word('накаляйся', 5),
  imperativeFormal: Word('накаляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(накаляться.name.text, накаляться);

export { накаляться };