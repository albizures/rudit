import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повториться: PerfectVerb = {
  name: Word('повториться', 6),
  singular1stPerson: Word('повторюсь', 6),
  singular2ndPerson: Word('повторишься', 6),
  singular3rdPerson: Word('повторится', 6),
  plural1stPerson: Word('повторимся', 6),
  plural2ndPerson: Word('повторитесь', 6),
  plural3rdPerson: Word('повторятся', 6),
  masculinePast: Word('повторился', 6),
  femininePast: Word('повторилась', 6),
  neuterPast: Word('повторилось', 6),
  pluralPast: Word('повторились', 6),
  imperativeInformal: Word('повторись', 6),
  imperativeFormal: Word('повторитесь', 6),
  imperfect: [],
};

perfectVerbs.set(повториться.name.text, повториться);

export { повториться };