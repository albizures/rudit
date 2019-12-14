import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрисовываться: PerfectVerb = {
  name: Word('изрисовываться', 5),
  singular1stPerson: Word('изрисовываюсь', 5),
  singular2ndPerson: Word('изрисовываешься', 5),
  singular3rdPerson: Word('изрисовывается', 5),
  plural1stPerson: Word('изрисовываемся', 5),
  plural2ndPerson: Word('изрисовываетесь', 5),
  plural3rdPerson: Word('изрисовываются', 5),
  masculinePast: Word('изрисовывался', 5),
  femininePast: Word('изрисовывалась', 5),
  neuterPast: Word('изрисовывалось', 5),
  pluralPast: Word('изрисовывались', 5),
  imperativeInformal: Word('изрисовывайся', 5),
  imperativeFormal: Word('изрисовывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изрисовываться.name.text, изрисовываться);

export { изрисовываться };