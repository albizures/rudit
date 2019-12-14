import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрыться: PerfectVerb = {
  name: Word('укрыться', 3),
  singular1stPerson: Word('укроюсь', 3),
  singular2ndPerson: Word('укроешься', 3),
  singular3rdPerson: Word('укроется', 3),
  plural1stPerson: Word('укроемся', 3),
  plural2ndPerson: Word('укроетесь', 3),
  plural3rdPerson: Word('укроются', 3),
  masculinePast: Word('укрылся', 3),
  femininePast: Word('укрылась', 3),
  neuterPast: Word('укрылось', 3),
  pluralPast: Word('укрылись', 3),
  imperativeInformal: Word('укройся', 3),
  imperativeFormal: Word('укройтесь', 3),
  imperfect: [],
};

perfectVerbs.set(укрыться.name.text, укрыться);

export { укрыться };