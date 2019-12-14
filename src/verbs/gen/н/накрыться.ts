import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накрыться: PerfectVerb = {
  name: Word('накрыться', 4),
  singular1stPerson: Word('накроюсь', 4),
  singular2ndPerson: Word('накроешься', 4),
  singular3rdPerson: Word('накроется', 4),
  plural1stPerson: Word('накроемся', 4),
  plural2ndPerson: Word('накроетесь', 4),
  plural3rdPerson: Word('накроются', 4),
  masculinePast: Word('накрылся', 4),
  femininePast: Word('накрылась', 4),
  neuterPast: Word('накрылось', 4),
  pluralPast: Word('накрылись', 4),
  imperativeInformal: Word('накройся', 4),
  imperativeFormal: Word('накройтесь', 4),
  imperfect: [],
};

perfectVerbs.set(накрыться.name.text, накрыться);

export { накрыться };