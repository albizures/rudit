import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрисоваться: PerfectVerb = {
  name: Word('изрисоваться', 7),
  singular1stPerson: Word('изрисуюсь', 5),
  singular2ndPerson: Word('изрисуешься', 5),
  singular3rdPerson: Word('изрисуется', 5),
  plural1stPerson: Word('изрисуемся', 5),
  plural2ndPerson: Word('изрисуетесь', 5),
  plural3rdPerson: Word('изрисуются', 5),
  masculinePast: Word('изрисовался', 7),
  femininePast: Word('изрисовалась', 7),
  neuterPast: Word('изрисовалось', 7),
  pluralPast: Word('изрисовались', 7),
  imperativeInformal: Word('изрисуйся', 5),
  imperativeFormal: Word('изрисуйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изрисоваться.name.text, изрисоваться);

export { изрисоваться };