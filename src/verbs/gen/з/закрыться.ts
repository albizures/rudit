import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрыться: PerfectVerb = {
  name: Word('закрыться', 4),
  singular1stPerson: Word('закроюсь', 4),
  singular2ndPerson: Word('закроешься', 4),
  singular3rdPerson: Word('закроется', 4),
  plural1stPerson: Word('закроемся', 4),
  plural2ndPerson: Word('закроетесь', 4),
  plural3rdPerson: Word('закроются', 4),
  masculinePast: Word('закрылся', 4),
  femininePast: Word('закрылась', 4),
  neuterPast: Word('закрылось', 4),
  pluralPast: Word('закрылись', 4),
  imperativeInformal: Word('закройся', 4),
  imperativeFormal: Word('закройтесь', 4),
  imperfect: [],
};

perfectVerbs.set(закрыться.name.text, закрыться);

export { закрыться };