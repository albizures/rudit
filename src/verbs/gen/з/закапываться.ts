import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закапываться: PerfectVerb = {
  name: Word('закапываться', 3),
  singular1stPerson: Word('закапываюсь', 3),
  singular2ndPerson: Word('закапываешься', 3),
  singular3rdPerson: Word('закапывается', 3),
  plural1stPerson: Word('закапываемся', 3),
  plural2ndPerson: Word('закапываетесь', 3),
  plural3rdPerson: Word('закапываются', 3),
  masculinePast: Word('закапывался', 3),
  femininePast: Word('закапывалась', 3),
  neuterPast: Word('закапывалось', 3),
  pluralPast: Word('закапывались', 3),
  imperativeInformal: Word('закапывайся', 3),
  imperativeFormal: Word('закапывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(закапываться.name.text, закапываться);

export { закапываться };